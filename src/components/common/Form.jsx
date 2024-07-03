
import { Grid, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useTheme from '../../constants/useTheme';

export const Form = () => {
  const { theme } = useTheme();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Debes ingresar el nombre'),
      lastName: Yup.string().required('Debes ingresar tus apellidos'),
      email: Yup.string().required('Debes ingresar tu email'),
      number: Yup.string()
        .required('Debes ingresar tu numero celular')
        .matches(/^[0-9]{10}$/, {
          message: 'Debes ingresar un numero de 10 digitos (301+1234567)',
        }),
    }),
    onSubmit: (data) => {
      console.log(data);
      fetch('https://getform.io/f/warkerlb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Formulario enviado exitosamente!');
            formik.resetForm();
          } else {
            console.error('Error enviando el formulario');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  });

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary,
        
      }}
      className="w-full h-[400px] mx-auto px-6 flex items-center justify-center xl:h-[300px]"
    >
      <div
        style={{
          backgroundColor: theme.background,
        }}
        className="h-[200px] mx-auto px-6 flex items-center xl:w-[800px]"
      >
        <form action="" onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12} lg={6}>
              <TextField
                name="name"
                fullWidth
                variant="filled"
                label="Digita tu nombre"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
                style={{
                  backgroundColor: theme.form,
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="lastName"
                fullWidth
                variant="filled"
                label="Digita tu apellido"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={Boolean(formik.errors.lastName)}
                helperText={formik.errors.lastName}
                style={{
                  backgroundColor: theme.form,
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="email"
                fullWidth
                variant="filled"
                label="digitatu@email.com"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                style={{
                  backgroundColor: theme.form,
                  
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                name="number"
                fullWidth
                variant="filled"
                label="Digita tu número celular"
                type="string"
                onChange={formik.handleChange}
                value={formik.values.number}
                error={Boolean(formik.errors.number)}
                helperText={formik.errors.number}

                style={{
                  backgroundColor: theme.form,
                  
                }}
                InputProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.textPrimary,
                  },
                }}
              />
            </Grid>

            <Grid item xs={6} lg={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                aria-label="Enviar formulario"
                endIcon={<SendIcon />}

              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};