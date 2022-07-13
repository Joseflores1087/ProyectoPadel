import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancha } from 'src/app/interfaces/cancha';
import { CanchasService } from 'src/app/services/canchas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-cancha',
  templateUrl: './new-cancha.component.html',
  styleUrls: ['./new-cancha.component.css']
})
export class NewCanchaComponent implements OnInit {
  form: FormGroup;
  data: any;
  rol: any;
  cancha: Cancha[] = [];
  private fileName: any
  constructor(private fb: FormBuilder,
    private user: UserService,
    private canchas: CanchasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.form = new FormGroup({
      nombre_cancha: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      codigo_postal: new FormControl(''),
      cantidad_canchas: new FormControl('', Validators.email),
      id_user: new FormControl(''),
      file: new FormControl(''),
    })
  }

  ngOnInit(): void {
    const canchaId = this.activatedRoute.snapshot.params['id'];
    if (canchaId) {
      console.log(canchaId);
      this.canchas.GetCanchaById(canchaId).subscribe((cancha) => {
        console.log(cancha);
        // this.estado = usuario[0].id_cancha;
        // this.rolSel = usuario[0].id_rol;
        this.form.patchValue({
          nombre_cancha: cancha[0].nombre_cancha,
          direccion: cancha[0].direccion,
          telefono: cancha[0].telefono,
          codigo_postal: cancha[0].codigo_postal,
          cantidad_canchas: cancha[0].cantidad_canchas,
          id_user: cancha[0].id_user,
        })
      })
    }
    this.getUser();
  }

  selectFile(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      //  reader.onload = (event: any)=>{
      //    this.imgURL = 'assets/img/pdf.png';
      //  }
     
      console.log(file)
    }

  }
  newCancha() {
    const formValue = {
      nombre_cancha: this.form.value.nombre_cancha,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      codigo_postal: this.form.value.codigo_postal,
      cantidad_canchas: this.form.value.cantidad_canchas,
      id_user: this.form.value.id_user,
      file: this.fileName,
    }
    console.log(formValue.file)
    this.canchas.NewCancha(formValue).subscribe(res => {
      this.router.navigate(['/dashboard/canchas']);
      console.log('Exito');
    })

  }

  getUser() {
    this.user.GetUser().subscribe(res => {
      this.data = res;
    })
  }

}

