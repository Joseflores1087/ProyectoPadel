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
  private fileTmp: any;

  constructor(private fb: FormBuilder,
    private user: UserService,
    private canchas: CanchasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.form = new FormGroup({
      nombre_cancha: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      codigo_postal: new FormControl('', Validators.required),
      cantidad_canchas: new FormControl('', [Validators.required, Validators.email]),
      id_user: new FormControl('', Validators.required),
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
      console.log(file.name);
      this.fileTmp = file;
      // {
      //   fileRaw: file,
      //   fileName: file.name
      // }
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      //  reader.onload = (event: any)=>{
      //    this.imgURL = 'assets/img/pdf.png';
      //  }
      console.log(file)
    }
  }

  newCancha() {
    const bodyFile: any = new FormData();
    bodyFile.append('nombre_cancha', this.form.value.nombre_cancha);
    bodyFile.append('direccion', this.form.value.direccion);
    bodyFile.append('telefono', this.form.value.telefono);
    bodyFile.append('codigo_postal', this.form.value.codigo_postal);
    bodyFile.append('cantidad_canchas', this.form.value.cantidad_canchas);
    bodyFile.append('id_user', this.form.value.id_user);
    bodyFile.append('file', this.fileTmp);

    this.canchas.NewCancha(bodyFile).subscribe(res => {
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

