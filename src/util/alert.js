const successAlert = async (Swal, message) => {
    await Swal.fire({
      title: message,
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      heightAuto: false,
    });
  };
  
  const errorAlert = async (Swal, message) => {
    await Swal.fire({
      title: message,
      icon: 'error',
      heightAuto: false,
    });
  };


  export { successAlert, errorAlert};
