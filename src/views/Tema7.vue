<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Indicadores de evaluación a proveedores 
    .bloque-texto-b.color-secundario.p-4
      .bloque-texto-b__texto
        i.fas.fa-quote-left.colori
        p.mb-0 Los indicadores de gestión o <em>Key Performance Indicators</em> en sus siglas en inglés, (KPI), no es una tarea fácil como se podría pensar, debido al hecho de que hay variaciones diferentes de la definición de un KPI disponibles en la literatura escrita. Generalmente, encontramos un enfoque más concreto, operativo, de los diferentes conceptos; los KPI deberían ser herramientas prácticas más que discursivas. 
        br
        .bloque-texto-d__autor 
          .h5.mb-0 (Lord, 2008)          
        i.fas.fa-quote-right.colori

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-8        
        p(data-aos="fade-down") De acuerdo con lo anterior, un KPI es una medida que evalúa cómo una empresa ejecuta su visión estratégica. Este término se refiere a cómo una estrategia interactiva, se integra en la estrategia de la empresa en su conjunto, por ello es importante que todos los implicados en ella estén de acuerdo en lo que representa la estrategia y cómo se interpretan.

        p(data-aos="fade-down") Es necesario destacar el hecho de que hay un límite en la forma en que cada uno de los puntos de optimización puede mejorar. También se han visto los efectos de la anulación donde el aumento de la eficacia de una acción concreta parecía producirse solo a favor de otra acción.

      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='') 
    
      b #[i “Lo que no se puede definir no se puede medir, lo que no se puede medir no se pueden mejorar, lo que no se puede mejorar se puede deteriorar” (Lord, 2008).]

    h5(data-aos="fade-down").mb-5 Se puede reconocer los elementos de un indicador de gestión, de acuerdo con el siguiente esquema

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')                         
      .col-lg-7
        LineaTiempoD.color-primario
          p(numero="1" titulo="Nombre") Sujeto a la actividad a medir. 
          p(numero="2" titulo="Objetivo") Cual es el objetivo o meta se plantea el indicador.
          p(numero="3" titulo="Fórmula") Expresión matemática para calcular los resultados del indicador.
          p(numero="4" titulo="Periodicidad") Tiempo establecido para medir el indicador. 
          p(numero="5" titulo="Responsable") Persona encargada de implementar el indicador. 
          p(numero="6" titulo="Área") Área o departamento de la empresa que recibe el indicador. 
          p(numero="7" titulo="Impacto") Se mide el resultado de este y el impacto que tiene sobre las áreas que se le aplican.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para conocer las variables más comunes para tener en cuenta descargue y el siguiente documento: #[b Anexo 4_ Variables de indicadores para eventos.]            
    .row.justify-content-center.align-items-center    
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 4
                  p.mb-0 Variables de indicadores para eventos
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_4_Variable_de_indicadores_para_eventos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 
</template>

<script>
export default {
  name: 'Tema7',
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
