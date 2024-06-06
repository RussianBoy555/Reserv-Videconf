import { useForm } from "react-hook-form";
import { emailValidator, passwordValidator } from "./validators"; // Importa los validadores personalizados

export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Procesa los datos del formulario aquí
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h2>Iniciar Sesión</h2>
            <input type="email" {...register("email", { required: true, validate: emailValidator })} placeholder="Correo electrónico" />
            {errors.email && <span>{errors.email.message}</span>}
            <input type="password" {...register("password", { required: true, validate: passwordValidator })} placeholder="Contraseña" />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit">Ingresar</button>
        </form>
    );
}

export default LoginForm;