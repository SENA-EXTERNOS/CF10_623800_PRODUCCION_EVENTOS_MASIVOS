<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Régimen fiscal y tributario de las empresas 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
      .col-lg-4
        p(data-aos="fade-down") El régimen fiscal es el conjunto de herramientas que determinan cómo se reparten los ingresos entre el gobierno y las empresas.  Hay una variedad de herramientas fiscales que pueden utilizarse para crear un régimen fiscal que rige la actividad económica de cada empresa.

        p(data-aos="fade-down").mb-0 El estatuto tributario es el conjunto de #[b normas que rigen la mayor parte de los aspectos formales y sustantivos de la recaudación tributaria en Colombia], en concordancia con el Decreto 624 de 1989.      
      .col-lg-4
        .bg3.p-3
          h5(data-aos="fade-down") El Estatuto tributario se encuentra dividido en 6 libros y un título preliminar:
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              p.mb-0 Título Preliminar
            li 
              i.fas.fa-angle-right
              p.mb-0 Libro I - Impuesto de Renta y Complementarios
            li 
              i.fas.fa-angle-right
              p.mb-0 Libro II - Retención en la Fuente
            li 
              i.fas.fa-angle-right
              p.mb-0 Libro III - Impuestos Sobre las Ventas
            li 
              i.fas.fa-angle-right
              p.mb-0 Libro IV - Impuesto de Timbre Nacional
            li 
              i.fas.fa-angle-right
              p.mb-0 Libro V - Procedimiento Tributario
            li 
              i.fas.fa-angle-right
              p.mb-0 Libro VI - Gravamen a los Movimientos Financieros 

    p(data-aos="fade-down").mb-5 #[b En Colombia existen los impuestos nacionales y los impuestos distritales o regionales]. Los impuestos nacionales más comunes son (renta, IVA, impuestos especiales) son aplicados a todas las personas naturales o jurídicas con residencia fiscal en el país. Los impuestos regionales (industria y comercio, prediales) son determinados por cada departamento o municipio dentro de los parámetros establecidos por la ley. A continuación, se resumen la definición y tarifas para cada uno.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1
      span Impuestos Nacionales

    .tabla-a.color-acento-botones.mb-5 
      table.table1
        caption Referencia: Procolombia (2022). #[i Impuestos en Colombia]. https://investincolombia.com.co/es/como-invertir/impuestos-en-colombia
        thead
          tr
            td IMPUESTO
            td DEFINICIÓN
            td TARIFA                  
        tbody
          tr.bgt1
            td(rowspan='2') Renta
            td Grava las utilidades derivadas de las operaciones ordinarias de la empresa.
            td(rowspan='2') 35 % para 2022 Impuesto a la renta para usuarios industriales (no comerciales) de zona franca: 20 %
          tr.bgt1
            td A las empresas o usuarios que operan en las zonas francas del país se les aplica una tarifa preferencial.
          tr.bgt2
            td Tributación de dividendos
            td Grava las utilidades que tributadas a nivel de la sociedad o establecimiento permanente.
            td 10 %
          tr.bgt1
            td Ganancia ocasional
            td Grava las ganancias derivadas de las actividades no contempladas en las operaciones ordinarias de las empresas.
            td 10 %
          tr.bgt2
            td Gravamen a los Movimientos Financieros
            td Grava las transacciones destinadas a retirar fondos de cuentas corrientes, ahorros y cheques de gerencia.
            td 0,4 % por operación
          tr.bgt1
            td(rowspan='2') Impuesto al Valor Agregado (IVA)
            td(rowspan='2') Es un impuesto indirecto sobre la prestación de servicios y venta e importación de bienes.
            td Tarifa general: 19 %
          tr.bgt1
            td Tarifas especiales: 0 % y 5 %
          tr.bgt2
            td Impuesto al consumo
            td Es un impuesto indirecto que grava los sectores de vehículos, telecomunicaciones, comidas y bebidas.
            td Tarifas: 2 %, 4 %, 8 % y 16 %

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 2
      span Impuestos Distritales

    .tabla-a.color-acento-botones.mb-5 
      table.table1
        caption Referencia: Procolombia (2022). #[i Impuestos en Colombia]. https://investincolombia.com.co/es/como-invertir/impuestos-en-colombia
        thead
          tr
            td IMPUESTO
            td DEFINICIÓN
            td TARIFA
        tbody
          tr.bgt1
            td Impuesto de industria y comercio (ICA)                          
            td Grava las actividades industriales, comerciales o de servicios realizadas por un contribuyente con o sin establecimiento comercial, en la jurisdicción de una municipalidad  o distrito. Es administrado por la municipalidad o distrito correspondiente.                          
            td Entre 0,2 % y 1 % de los ingresos de la compañía  
          tr.bgt2
            td Impuesto predial                          
            td Grava anualmente el derecho de propiedad, usufructo o posesión de un bien mueble. Es administrado por la municipalidad o distrito donde se ubica el inmueble.                          
            td Entre 0,5 % y 1,6 % 
          tr.bgt1
            td Impuesto de registro                          
            td Grava los actos, documentos o contratos que deben registrarse ante la Cámara de Comercio y las oficinas de instrumentos públicos.                           
            td Del 0,1 % al 1 %

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-12.pt-5
        .tarjeta.position-relative.rounded-0.bg2(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute3
                img(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='')
            .col-lg-9
              .p-3
                p(data-aos="fade-down") #[b El sistema tributario comprende todos los derechos y obligaciones tributarias de las distintas entidades] de acuerdo con las actividades económicas que desarrollan. En primer lugar, el régimen fiscal depende de si el receptor de la renta es una persona natural o jurídica. Por ejemplo, ser un empleado no es lo mismo que una corporación, los impuestos a pagar son diferentes y también lo son las tasas o porcentajes.

                p(data-aos="fade-down").mb-0 #[b Todo sistema tributario consiste en un conjunto de leyes que los contribuyentes deben seguir.] Estas leyes incluyen condiciones de pago, exclusiones, gastos deducibles sin impuestos, entre muchas otras cosas.
</template>

<script>
export default {
  name: 'Tema3',
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
