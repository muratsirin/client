const emailRegex = RegExp(/^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i);

export function formValidate(name, value) {
    switch (name) {
        case 'firstName':
            if (!value || value.trim() === '') {
                return 'Ad alanı boş olamaz.';
            }
            return '';
        case 'lastName':
            if (!value || value.trim() === '') {
                return 'Soyad alanı boş olamaz.';
            }
            return '';
        case 'username':
            if (!value) {
                return 'Email alanı boş olamaz.';
            } else if (!emailRegex.test(value)) {
                return 'Lütfen geçerli bir email adresi giriniz.';
            }
            return '';
        case 'password':
            if (!value) {
                return 'Parola alanı boş olamaz.';
            }
            return '';
        default:
            return '';
    }
}

export function onSubmitValidation(user) {
    const validationErrors = {};

    Object.keys(user).forEach(name => {
        const error = formValidate(name, user[name]);
        if (error && error.length > 0) {
            validationErrors[name] = error;
        }
    });

    return validationErrors;
}