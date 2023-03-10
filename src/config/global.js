export default {
  global: {
    componenteFormativo: 'Lineamientos contratación de proveedores',
    descripcionCurso:
      'Definir las condiciones de contratación para proveedores de eventos masivos, requiere estudiar una serie de aspectos tales como:  registro de proveedores, tipo de empresa, capacidad financiera, régimen tributario, indicadores de gestión, bases de datos y canales de comunicación, para de esta forma negociar los términos con el proveedor requerido, acorde a las necesidades del evento y criterios de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Registro de proveedores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Empresa y tipos de sociedades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Régimen fiscal y tributario de las empresas ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Facturación y cuentas de cobro de productos y servicios ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Estados financieros ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Criterios de selección y evaluación de proveedores ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Indicadores de evaluación a proveedores ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Bases de datos y comunicación con proveedores ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Registro de proveedores',
      referencia: 'Colombia compra eficiente, (2022, agosto)',
      tipo: 'Manual',
      link: 'https://www.colombiacompra.gov.co/content/registro-de-proveedores',
    },
    {
      tema: '2. Empresas y tipos de sociedad',
      referencia:
        'Bancolombia, clasificación, tipos de sociedades en Colombia <i>s.f.</i>',
      tipo: 'Artículo',
      link:
        'https://www.bancolombia.com/negocios/actualizate/emprendimiento/tipos-de-sociedades-comerciales-en-colombia',
    },
    {
      tema: '3. Régimen fiscal y tributario de las empresas',
      referencia:
        'INVESTINCOLOMBIA, Guía legal 7 régimen tributario colombiano (Agosto, 2022)',
      tipo: 'Documento',
      link:
        'https://investincolombia.com.co/es/articulos-y-herramientas/herramientas/guia-legal-7-regimen-tributario-colombiano',
    },
    {
      tema: '4. Facturación y cuentas de cobro de productos y servicios',
      referencia: 'DIAN, que es la factura electrónica (2022)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kmCPu19LeTQ',
    },
  ],
  glosario: [
    {
      termino: 'Balance',
      significado:
        'análisis del activo y el pasivo para determinar el estado económico de una empresa o entidad.',
    },
    {
      termino: 'Base de datos',
      significado:
        'sistema de almacenamiento de datos diseñado de forma organizada, que facilita la búsqueda de la información que se necesita.',
    },
    {
      termino: 'Declaración Renta',
      significado:
        'documento que se presenta a la DIAN con el consolidado de un año de ingresos, egresos e inversiones.',
    },
    {
      termino: 'Factura',
      significado:
        'es un documento que mantiene un registro de una transacción entre un comprador y un vendedor, como un recibo en papel de una tienda o un registro en línea de un minorista electrónico.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas según el caso.',
    },
    {
      termino: 'Redes de datos',
      significado:
        'sistemas de comunicación que se instalan y operan exclusivamente para la transferencia de información entre dispositivos de comunicación de datos (como los ordenadores). Conjunto asociado para manejo de información.',
    },
    {
      termino: 'RFP',
      significado:
        'es un documento que las organizaciones utilizan para exponer su necesidad de servicios concretos en una comunidad o en un grupo de contratistas.',
    },
    {
      termino: 'Registro de datos',
      significado:
        'se define como el grupo de información con cierta correlación, estructurados en una tabla comportada por campos como son las columnas y filas, el objetivo general de este es poner por escrito y asegurar la conservación de los datos recogidos para estudios específicos a desarrollar e implementar dentro de la empresa.',
    },
    {
      termino: 'Sistema electrónico',
      significado:
        'Conjunto de circuitos que utilizan señales eléctricas para operar y procesarlas para realizar ciertas funciones.',
    },
    {
      termino: 'Sociedad',
      significado:
        'conjunto de personas, pueblos o naciones que conviven bajo normas comunes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gerencie, T. d. (2021). Gerencie.com. <i>Tipos de sociedades comerciales</i>. Obtenido de https://www.gerencie.com: ',
      link: 'https://www.gerencie.com/tipos-de-sociedades-comerciales.html',
    },
    {
      referencia:
        'Mora, L. A. (2004). Indicadores de gestión logísticos. Ecoe Ediciones.',
    },
    {
      referencia: 'Real Academia Española (2022). Balance.',
      link: 'https://dle.rae.es/balance?m=form.',
    },
    {
      referencia: 'Real Academia Española (2022). Sociedad.',
      link: 'https://dle.rae.es/sociedad?m=form.',
    },
    {
      referencia: 'SIIGO, (2022, agosto 30) ¿Qué son los estados financieros?',
      link:
        'https://www.siigo.com/blog/empresario/que-son-los-estados-financieros/#:~:text=inventario%20en%20Siigo,Estados%20Financieros%20bajo%20NIIF,prop%C3%B3sito%20de%20brindar%20informaci%C3%B3n%20general. ',
    },
    {
      referencia: 'Impuestos en Colombia (2022). <i>Invierta en Colombia</i>.',
      link:
        'https://investincolombia.com.co/es/como-invertir/impuestos-en-colombia',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
