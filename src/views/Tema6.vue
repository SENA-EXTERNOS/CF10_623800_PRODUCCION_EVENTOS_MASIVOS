<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Criterios de selección y evaluación de proveedores 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        p(data-aos="fade-down") #[b Elegir el proveedor adecuado implica algo más que navegar a través de una variedad de listas de precios]. Su elección depende de muchos factores, incluida la relación calidad-precio, la fiabilidad y la prestación de servicio, entre otros. La forma en que evalúa la importancia de estos diversos factores depende de sus prioridades y estrategia comercial.
             
        .color-fondo-text1.bg-color(data-aos="fade-down")
          .color-fondo-text1__texto
            p Dependiendo de la estrategia de abastecimiento de su empresa, los criterios para seleccionar proveedores pueden diferir de los demás. Sin embargo, siempre habrá rasgos básicos que cualquier proveedor debería tener, como los que se verán a continuación.  
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/lUP4Nlp-nL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/32.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5 Modelos de evaluación de proveedores
        br
        br
        p Las evaluaciones de proveedores  tienen como objetivo medir y monitorear el desempeño de un posible vendedor, con el objetivo de reducir costos, mitigar riesgos e impulsar la mejora. Una de las mejores maneras de hacer esto es crear un formulario o formato de revisión de recursos. Esta evaluación consiste en una serie de preguntas basadas en criterios como calificaciones, capacidades, consistencia, calidad, etc., para comparar y garantizar  se tome la mejor decisión frente a lo que ofrece la industria. 

    .row.justify-content-center.align-items-center    
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 3
                  p.mb-0 En el siguiente documento se identifican los diferentes métodos de evaluación de proveedores.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_3_Metodos_de_evaluacion_de_proveedores.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-12.pt-5
        .tarjeta.position-relative.rounded-0.bg2(data-aos="flip-down")
          .row.justify-content-end.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute3
                img(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg', alt='')
            .col-lg-9
              .p-3
                p(data-aos="fade-down") #[b RFP (#[i Request for Proposal]):] Una solicitud de propuesta, o RFP para abreviar en inglés, es un documento preparado internamente dentro de una empresa con el objetivo de solicitar a diferentes proveedores que brinden las mejores soluciones y su presupuesto para satisfacer necesidades específicas.

                p(data-aos="fade-down").mb-0 Es un documento que se utiliza en muchos ámbitos, entre ellos el de las telecomunicaciones, donde resulta especialmente útil por la complejidad de los proyectos y la diversidad de propuestas y soluciones que ofrecen los desarrolladores. Una buena RFP facilitará el proceso de selección de proveedores y evitará que las líneas presupuestarias queden fuera de los requisitos del proveedor. 


    p(data-aos="fade-down").pt-5 Ahora que ya se sabe que es una solicitud de vista o RFP, veamos que debe contener:


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="Objetivos del proceso de contratación")
            .col-10
              p Es necesario definir claramente la tecnología y los objetivos de optimización de costos que se persiguen.
          .row.justify-content-center(titulo="Describir la situación actual y futura")
            .col-10
              p Es necesario analizar los datos de consumo de la empresa y evaluar los retos tecnológicos de la empresa en los próximos años y sus posibles soluciones tecnológicas.
          .row.justify-content-center(titulo="Aspectos generales")
            .col-10
              p Se describe detalladamente la fase de soporte del servicio: cuándo y cómo queremos cambiar.
          .row.justify-content-center(titulo="Requisitos y especificaciones")
            .col-10
              p Estos son los puntos que debe respetar el proveedor y los requisitos específicos del cliente.
          .row.justify-content-center(titulo="Tablas de plan de planificación")
            .col-10
              p Es importante fijar un plazo para el coordinador en función de alguna urgencia, aunque debe ser lógico porque los mediadores necesitan tiempo para prepararse. En esta sección, se pueden establecer plazos tentativos para cada etapa del proyecto, por ejemplo, momento en que se recibirán las propuestas, reuniones presenciales y si se puede o no proponer una segunda enmienda. 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg', alt='') 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Una vez redactado el RFP, es necesario enviarlo a los proveedores. Estas personas serán las encargadas de comunicar las recomendaciones a la empresa para que se pueda comparar y seleccionar el paquete que mejor se adapte a las necesidades.


    h5(data-aos="fade-down").mb-5 A continuación, se observa el proceso que se debe tener en cuenta para la evaluación de un proveedor:

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.svg',  alt='')     
</template>

<script>
export default {
  name: 'Tema6',
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
