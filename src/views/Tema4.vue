<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Facturación y cuentas de cobro de productos y servicios 
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.pt-5
        .tarjeta.position-relative.rounded-0.bg2(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute2
                img(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='')
            .col-lg-10
              .p-3  
                p(data-aos="fade-down").mb-0 Un sistema de factura electrónica es una herramienta informática que soporta las transacciones de compra y venta de bienes, sujeto a ciertas condiciones para que DIAN verifique la información. Actualmente esto funciona de acuerdo con el modelo de autenticación previa. La facturación electrónica es una solución de automatización de pagos de DIAN y una poderosa herramienta contra la evasión fiscal.

    h4(data-aos="fade-down").mb-5 Estos son los pasos que debe seguir una factura electrónica: 

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        p(data-aos="fade-down").mb-0 Para conocer a fondo información importante sobre la factura electrónica, se sugiere #[b descargar y estudiar los siguientes documentos:  Anexo 1_ DIAN factura electrónica, y Anexo 2_  Pasos para la facturación electrónica;]  igualmente a visitar la página de la DIAN en el enlace que encuentra en la bibliografía de este componente.                       
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg', alt='')

    .row.justify-content-center.align-items-center    
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 1
                  p.mb-0 DIAN factura electrónica
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_Dian_factura_electronica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 2
                  p.mb-0 Pasos para la facturación electrónica
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_pasos_facturacion_electronica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    h4(data-aos="fade-down").mb-5 A continuación, se presentan los documentos que se consideran equivalentes a una factura:

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 #[b Documentos equivalentes a factura:] La Resolución 000042 establece nuevas especificaciones para los documentos equivalentes a facturas aceptados en los incisos b), d), e) y g) del artículo 617 TE. Aquí se especifican los requisitos que debe cumplir cada documento.  

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='')                              
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
