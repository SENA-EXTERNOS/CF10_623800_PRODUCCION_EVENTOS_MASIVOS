<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Estados financieros 
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.pt-5
        .tarjeta.position-relative.rounded-0.bg2(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute2
                img(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')
            .col-lg-10
              .p-3  
                p(data-aos="fade-down").mb-0 #[b Cuando hablamos de estados contables o estados financieros], nos referimos al tipo de informe que nos permite dar una imagen precisa de las condiciones financieras actuales de la empresa. Son documentos que brindan la posibilidad de interpretación o análisis relacionados con la información de la empresa, con el fin de tomar decisiones más acertadas en interés del desarrollo de la empresa.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5 ¿Qué son los estados financieros?
        br        
        br
        p Los estados financieros tienen diferentes nombres. Se conocen como #[b cuentas anuales, estados contables o estados financieros] y describen la estructura contable y económica de la organización. Estos documentos reflejan las actividades económicas que normalmente se desarrollan dentro de la empresa, durante un determinado período de tiempo.
        br        
        br
        p Por lo general, los estados financieros representan el año fiscal que corresponde a un año en la organización. Esto permite a los inversores evaluar si la empresa tiene una estructura solvente y si es rentable invertir en ella.
        br        
        br
        h5 Componentes de los Estados Financieros
        br        
        br
        p.mb-0 Lo primero que se debe saber es que se pueden clasificar en estos: Estado de la situación financiera o Balance General, Estado de Resultados, Estado de Flujo de Caja.

    h4(data-aos="fade-down").mb-5 Veamos qué incluye cada uno de ellos.

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='') 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')                         
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="Estado de la situación financiera o Balance General")
            .col-10
              p #[b Documento contable con la finalidad de informar sobre el estado de la empresa.] Incluye sus ingresos y obligaciones, así como sus reservas y capital, que se evalúan de acuerdo con las normas de contabilidad generalmente aceptadas.    
          .row.justify-content-center(titulo="Estado de flujo de caja")
            .col-10
              p #[b El flujo de caja proporciona información sobre la capacidad de una empresa para pagar sus deudas.] Por lo tanto, es necesario conocer el estado de la empresa. Es una buena herramienta para medir la liquidez de una empresa. La diferencia entre ingresos y gastos, es decir, el resultado de restar los ingresos que tiene la empresa y los costes que tiene que conseguir, lo llamamos “flujo de caja neto”. Los flujos de caja son vitales para la supervivencia de la entidad, aportan información muy importante sobre la empresa, ya que indican si se encuentra en una situación financiera sólida. 
          .row.justify-content-center(titulo="Estado de resultados")
            .col-10
              p Es una comparación de los ingresos y gastos de una organización. También revela si es rentable pagar dividendos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          h5(data-aos="fade-down").mb-0 El estado de resultados tiene dos componentes principales, los ingresos y los costos y gastos. 

    h5(data-aos="fade-down").mb-5 A continuación, se describe cada uno de estos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")           
      .col-lg-9 
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ingresos")
            h4 Ingresos 
            p Ingreso es el aumento de los activos o la disminución de los pasivos de una entidad que, durante el ejercicio contable, tiene un efecto positivo en los resultados o, en su caso, en la variación neta del patrimonio contable y, en consecuencia, el correspondiente al capital adquirido o al patrimonio suscrito. Los ingresos deben reconocerse solo cuando el movimiento de activos y pasivos tiene un efecto positivo en los resultados o el capital contable de la entidad, a través de resultados o, según corresponda, un cambio neto en el patrimonio neto, respectivamente.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Costos y Gastos")
            h4 Costos y Gastos
            p Costo y gasto es la reducción en los activos o el aumento en los pasivos de una entidad, durante el período contable, con el propósito de generar ingresos y con el propósito de causar un efecto negativo en la utilidad o pérdida, o, según sea el caso ser, por la variación neta en el patrimonio contable, y, por tanto, en el capital adquirido o el Capital contable, respectivamente. #[b Los costos y gastos representan los esfuerzos de la gestión económica para lograr el rendimiento y generar ingresos], y además deben reconocerse solo cuando se mueven los activos y pasivos.

            p Afectar negativamente el capital adquirido o el patrimonio de la entidad sociedad, a través de la utilidad neta o, en su caso, la variación neta del patrimonio contable, respectivamente. Para efectos de información financiera, los costos deben entenderse como el valor de los recursos que han sido entregados o prometidos a ser entregados a cambio de bienes o servicios adquiridos por la entidad con el propósito de generar ingresos. 
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.svg', alt='')                
</template>

<script>
export default {
  name: 'Tema5',
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
