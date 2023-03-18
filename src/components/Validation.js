import React from "react";

export default function Validate(userData, setErrors, errors) {
    if (!userData.username) setErrors({ ...errors, username: 'Nombre de usuario vacío' });
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))) {
        setErrors({ ...errors, username: 'Email inválido' });
    } else if (userData.username.length > 35) {
        setErrors({ ...errors, username: 'o puede superar los 35 caracteres' });
    }
    else setErrors({ ...errors, username: '' });

    if (!userData.password) setErrors({ ...errors, password: 'Contraseña vacía' });
    else if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({ ...errors, password: 'La contraseña debe estar entre los 6 y 10 caractéres' });
    }
    else if (!(/\d/.test((userData.password)))) {
        setErrors({ ...errors, password: 'La contraseña debe tener al menos 1 número' });
    }
    else setErrors({ ...errors, password: '' });

}