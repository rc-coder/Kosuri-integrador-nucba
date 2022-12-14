//Funcion para formatear Precios
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

export const formatDate = (seconds) => {
  const fecha = new Date(seconds * 1000);
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  const year = fecha.getFullYear();
  return `${dia}/${mes}/${year}`;
};
