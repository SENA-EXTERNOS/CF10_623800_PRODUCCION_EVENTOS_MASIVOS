<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Bases de datos y comunicación con proveedores 
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.pt-5
        .tarjeta.position-relative.rounded-0.bg2(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute4
                img(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='')
            .col-lg-10
              .p-3  
                p(data-aos="fade-down").mb-0 Una base de datos se refiere a un conjunto de datos relacionados y a la forma en que están organizados. #[b El acceso a estos datos suele ser proporcionado por un “sistema de gestión de bases de datos” (SGBD)] que consiste en un conjunto integrado de programas informáticos que permite a los usuarios interactuar con una o varias bases de datos y proporciona acceso a todos los datos contenidos en ella (aunque pueden existir restricciones que limiten el acceso a determinados datos). El SGBD ofrece diversas funciones que permiten introducir, almacenar y recuperar grandes cantidades de información y proporciona formas de gestionar cómo se organiza esa información.

    h5(data-aos="fade-down").mb-5 Otros aspectos a tener en cuenta  sobre las base de datos:
    .tarjeta.tarjeta--azul.p-5.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start.p-3
          .col-lg-8.mb-4.mb-md-0
            p #[b Una gran herramienta que apoya la analítica de datos son los diferentes softwares especializados o herramientas ofimáticas que se encuentran en el mercado]. Los datos que generalmente se procesan en analítica de datos o el #[i Big Data] son semiestructurados o estructurados y tienen diferentes orígenes. 

            p Son muy usados en las industrias, pues la información obtenida es la base para tomar decisiones, lo cual puede generar beneficios en el incremento de ingresos, establecer mejoras en los procesos y maximizar campañas publicitarias. Sin embargo, el principal objetivo de la analítica de datos es dar impulso al rendimiento o beneficio empresarial. 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')
        .row.justify-content-center.align-items-start.p-3
          .col-lg-8.mb-4.mb-md-0
            p #[b Las metodologías o técnicas aplicadas para una base de datos demandan realizar en primera instancia un análisis o exploración de datos]. Esto tiene como objeto identificar patrones y la relación que hay entre ellos, posteriormente se apoya en un análisis confirmatorio de datos que permite la aplicación de técnicas estadísticas para establecer si las hipótesis lanzadas son verdaderos o falsas. 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='') 
        .row.justify-content-center.align-items-start.p-3
          .col-lg-8.mb-4.mb-md-0
            p #[b El análisis de datos o #[i Big Data] es muy aplicado en los análisis cualitativos], es decir se realiza el análisis de datos numéricos los cuales tienen variables que pueden ser cuantificables, pueden compararse y medirse a través de la estadística, es de anotar que el análisis cualitativo es de carácter interpretativo, es decir que se hace a través de interpretaciones de los estadísticos, basados en la comprensión que se haga de los datos que no son numéricos. En este análisis, se nos presentan los datos. No podemos diseñar un experimento que cumpla con nuestro modelo estadístico favorito. 

            p En las aplicaciones de analítica a gran escala, se necesita una gran cantidad de trabajo, normalmente el 80 % del esfuerzo solo para limpiar los datos, de modo que puedan ser utilizados por un modelo de aprendizaje automático. 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='') 
        .row.justify-content-center.align-items-start.p-3
          .col-lg-8.mb-4.mb-md-0
            p Debido a la estrecha relación entre ambos, el término “base de datos” se utiliza a menudo de forma casual para referirse tanto a una base de datos como al SGBD utilizado para manipularla.  Fuera del mundo de la informática profesional, #[b el término base de datos se suele utilizar para referirse a cualquier colección de datos relacionados (como una hoja de cálculo o un fichero)], ya que los requisitos de tamaño y uso suelen requerir el uso de un sistema de gestión de bases de datos. 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='') 
        .row.justify-content-center.align-items-start.p-3
          .col-lg-8.mb-4.mb-md-0
            p #[b No hay una metodología única a seguir en las aplicaciones reales a gran escala]. Normalmente, una vez definido el problema de negocio, se necesita una etapa de investigación para diseñar la metodología a utilizar. Sin embargo, es relevante mencionar unas pautas generales que se aplican a casi todos los problemas. Una de las tareas más importantes en el análisis de #[i Big Data] es el modelado estadístico, es decir, los problemas de clasificación o regresión supervisados y no supervisados. 

            p Una vez que los datos se han limpiado y pre-procesado, disponibles para el modelado, se debe tener cuidado en la evaluación de diferentes modelos con métricas de pérdida razonables y luego, una vez que el modelo se implementa, se debe informar de la evaluación y los resultados. Un error común en la modelización predictiva es limitarse a implementar el modelo y no medir nunca su rendimiento. 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='') 
        .row.justify-content-center.align-items-start.p-3
          .col-lg-8.mb-4.mb-md-0
            p #[b El manejo de datos se regula mediante el Derecho de Hábeas Data], el cual se basa en Colombia por autorizar a los habitantes residentes actualizar, conocer, y rectificar toda la información que tengan las distintas entidades y bases de datos del territorio nacional. Nació como parte importante de los artículos 15 y 20 de la Constitución Política. Más adelante, fue desarrollado como derecho autosuficiente y sin dependencia, que disfrutan todos los colombianos.

            p Es desde 1995 que ya se comienza a tener esta excepción, no obstante, #[b en el 2008 se crea la primera Ley de Habeas Data], la 1266, la cual tiene un carácter particular que solo aplica para la información financiera. Los bancos usan esta información para evaluar el peligro crediticio de una persona, como hábitos de pago, créditos tomados antes y sueldo o ingresos promedios.

            p #[b Por su lado, la ley más vigente del derecho de Habeas Data ha sido emitida en el 2012]. La ley 1581 es de carácter general y se aplica en todos los espacios de recolección de datos de una persona y que, por lo tanto, no son financieros ni crediticios. Son usados por entidades de naturaleza pública o privada. Esta ley resume todo el funcionamiento de la información de una persona.
 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        p(data-aos="fade-down").mb-0 Ninguna entidad puede hacer uso de esta información sin el permiso que el mismo dueño autorice de ella. La empresa o persona que sin la autorización debida realice uso de datos individuales recibirá una sanción y multa. Es por ello, que continuamente piden una aceptación una vez que se firma un contrato o se hace una compra.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/45.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La ley 1266 de 2008, también conocida como #[b Ley de Habeas Data, se aplica a todos los datos personales, financieros, crediticios, comerciales y de servicios registrados en un banco de datos]. En este sentido, la aplicación de la ley 1266 de 2008 está encaminada a regular el uso de lesa información y, por tanto, otro tipo de datos (por ejemplo, aquellos mantenidos en un ámbito exclusivamente personal o doméstico o los que se incluyen en una historia clínica) se encuentran excluidos de la aplicación de esta norma. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        .bg4.p-3
          p(data-aos="fade-down").mb-0 Una vez claro el manejo de información y la  protección de datos, es importante destacar que mantener una constante, adecuada y eficiente comunicación con los proveedores es una prioridad. Recuerde entonces que, un canal de comunicación es un medio por el cual se lleva a cabo una labor de comunicación en la que el emisor, ya sea físico o virtual, transmite información recibida por una o varias personas.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.svg', alt='')    
      .col-lg-4 
        .color-fondo-text2.bg-color(data-aos="fade-down")
          .color-fondo-text2__texto 
            p Para transmitir una comunicación de manera efectiva, es importante comprender los factores que intervienen en el proceso de comunicación. La empresa es quien inicia este proceso, entregará un mensaje en el que dará a conocer a través de un canal de comunicación, ya sea directo o virtual, los conceptos que quiere expresar. Pero estas no son las únicas variables que juegan un papel en la comunicación. El mensaje será recibido por uno o más destinatarios previstos teniendo en cuenta el contexto de la situación.

    .row.justify-content-center.align-items-center    
      .col-lg-10
        p(data-aos="fade-down").mb-5 Para conocer los diferentes canales a utilizar para la comunicación con proveedores y la estructura de una solicitud de propuesta o invitación a cotizar, por favor descargue el siguiente documento: Anexo 5: Canales de comunicación y solicitud de propuesta.
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 PDF - Anexo 5 (Falta en diseño)
                  p.mb-0 Canales de comunicación y solicitud de propuesta
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_4_Variable_de_indicadores_para_eventos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros.                      
</template>

<script>
export default {
  name: 'Tema8',
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
