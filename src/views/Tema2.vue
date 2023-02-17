<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Empresa y tipos de sociedades
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.pt-5
        .tarjeta.position-relative.rounded-0.bg2(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute2
                img(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')
            .col-lg-10
              .p-3 
                p(data-aos="fade-down").mb-0 Según Economipedia, #[b una empresa] es una organización de personas y recursos encaminada a obtener una ventaja económica mediante el desarrollo de una determinada actividad. Esta unidad de producción puede tener una sola persona y debe esforzarse por obtener ganancias y lograr una serie de objetivos especificados en su composición. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
              p.textd.px-3 En Colombia, las sociedades comerciales se clasifican en diferentes tipos y clases, lo que determina aspectos como responsabilidad y administración.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Gerencie.com, 2021)  

    h4(data-aos="fade-down").mb-5 A continuación, se describen los tipos de sociedad y su principal característica. 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')                         
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="Sociedad anónima")
            .col-10
              p #[b Una sociedad anónima es una sociedad de capital, donde el capital se divide en acciones de igual valor], que pueden cotizar en bolsa, y donde los socios responden de manera limitada por el monto de sus aportes a la sociedad. La sociedad es uno de los números más utilizados en la formación de sociedades, y se compone de un múltiplo de socios que no puede ser inferior a cinco (5) socios y un máximo ilimitado. La razón social debe seguir la abreviatura S.A. y en Colombia la razón social se rige por el Código de Comercio a partir del artículo 373.
          .row.justify-content-center(titulo="S.A.S.")
            .col-10
              p Corresponde a las siglas de #[b Sociedad por Acciones Simplificada], que es una sociedad de capital similar a una sociedad anónima sin necesidad de ser una persona jurídica.
              p Una de las características de las S.A.S. es que su constitución es, como su nombre lo indica, simplificada en la medida en que puede constituirse mediante escritura privada, salvo que la constitución prevea la sucesión de bienes por correo público, en este caso sí, debe constituirse mediante un certificado público. Es decir, por regla general, no es necesario formalizarla mediante escritura pública en notario, basta un contrato privado, que luego se inscribe en el registro mercantil, según lo previsto en el artículo 5 del Código.
          
          .row.justify-content-center(titulo="Sociedad en comandita")
            .col-10
              p La sociedad en comandita es un tipo de sociedad en la que existe un grupo de socios administradores, acompañado de otro grupo de socios que aportan capital sin asumir responsabilidad alguna más allá de sus aportes.
              p [strong Comanditar es acompañar, es también dar medios a una empresa sin asumir responsabilidades comerciales.] Por ello, los socios colectivos tienen responsabilidad limitada, mientras que los socios administradores, que dirigen y administran la sociedad, tienen responsabilidad solidaria e ilimitada.
          
          .row.justify-content-center(titulo="Sociedades de economía mixta")
            .col-10
              p Las sociedades de economía mixta, las define el código de comercio en el artículo 461 de la siguiente manera, y en su primer inciso señala: «Son de economía mixta las sociedades comerciales que se constituyen con aportes estatales y de capital privado.» Cuando los aportes estatales sean del 90% o más en las sociedades de economía mixta, estas se someterán al régimen de las sociedades comerciales e industriales del Estado.
              p Las contribuciones del Estado a una empresa mixta incluyen los beneficios que el Estado puede otorgar a esa empresa de conformidad con el artículo 463 del Código de Comercio.
          
          .row.justify-content-center(titulo="Sociedades limitadas")
            .col-10
              p Las Sociedades Limitadas en Colombia se rigen por el Código de Comercio, Secciones 353 a 372. Tiene las características de que es una sociedad general, tiene responsabilidad limitada, tiene un número limitado de socios y el capital social debe estar registrado y pagado.
              p La denominación social para este tipo de sociedades se distingue por el hecho de que debe ir acompañada de la palabra “Ltda.”, tal como se define en el artículo 357 del Código de Comercio. Esta abreviatura es tan importante que, si no consta en los estatutos sociales, la responsabilidad de los socios no se limitará al término común e ilimitado.
          
          .row.justify-content-center(titulo="Sociedad colectiva")
            .col-10
              p La Sociedad colectiva, como su nombre lo indica, es una empresa en la que la responsabilidad y la gestión son colectivas, es decir, pertenece a todos los socios.
              p Todos los socios interactúan colectivamente con el negocio de la compañía, y todos trabajan como funcionarios, aunque pueden delegar este trabajo en un tercero u otro socio. Las Sociedades Colectivas se conforman entre personas, en la que todos los socios están interesados en participar en su desarrollo, precisamente por su carácter colectivo.
          
          .row.justify-content-center(titulo="Sociedad en comandita simple")
            .col-10
              p Se determina porque el capital social se divide en cuotas, no en acciones.  Estas sociedades no tienen un mínimo de socios, ni definen el capital que deben suscribir y pagar.  El desarrollo es ejercido por los socios y la vigilancia por los comanditarios o un revisor fiscal. (Gerencie, 2021)
              p Les aplica las normas de las sociedades colectivas y cualquier modificación debe ser aprobada por el 100% de los socios y solo se disuelve cuando el capital social se reduce a la tercera parte o menos o cuando desaparece uno de los 2 tipos de socios (colectivo, aportan trabajo y comanditario, aportan capital social).
          
          .row.justify-content-center(titulo="Empresa Unipersonal")
            .col-10
              p Empresa Unipersonal, como lo dice el nombre, la propiedad única es de una persona, la propietaria absoluta del negocio. Una persona natural puede tener un negocio como propietario único sin tener una corporación, como en el caso de una persona que abre un restaurante y lo registra en la Cámara de Comercio. Si bien este restaurante puede llamarse un negocio porque emplea y brinda servicios como cualquier otro negocio, legalmente no es diferente de un negocio propiedad de una persona física.
              p Una empresa unipersonal es una empresa que forma una entidad legal que no es el propietario, por lo que los activos de la empresa están separados de los activos de sus propietarios, lo que no es el caso de una empresa.                                                                                       


</template>

<script>
export default {
  name: 'Tema2',
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
