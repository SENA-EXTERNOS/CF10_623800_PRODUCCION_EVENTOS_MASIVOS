<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7    
        p(data-aos="fade-down") Bienvenido querido aprendiz. Las empresas necesitan de diferentes agentes naturales o jurídicos para la obtención de sus materias primas, ellos son los llamados proveedores. Decidir qué proveedor utilizar para cada servicio o producto puede requerir mucha investigación y consideración.  En este componente de formación, analizaremos que es un proveedor y que implica la selección de los mismos en el proceso de contratación de servicios para eventos masivos. Además, se abordarán los conceptos para identificar los requerimientos necesarios en el proceso de  selección y contratación de proveedores, tales como empresa, facturación electrónica, estados financieros, evaluación de proveedores, identificación de indicadores de gestión y manejo de bases de datos e implementación de canales de comunicación. Para iniciar este proceso lo invitamos a ver el siguiente video y le deseamos éxitos en el desarrollo de este componente formativo.

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.svg', alt='')   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RWifXygMXXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
