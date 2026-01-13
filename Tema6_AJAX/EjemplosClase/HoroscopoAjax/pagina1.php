<?php
// Implementamos una API que devuelve texto plano
sleep(2); // Introducimos un retardo para simular una demora del servidor
header('Content-Type: text/plain; charset=utf-8');// Cabecera a usar cuando el API devuelve texto plano

// echo "Método HTTP recibido: ".$_SERVER['REQUEST_METHOD']."<br>";
if ($_REQUEST['cod'] == 1)
  echo "Aries: Hoy los cambios serán físicos, personales, de carácter, Te sentirás impulsivo y tomarás  iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás.";
if ($_REQUEST['cod'] == 2)
  echo "Tauro: Hoy los cambios serán privados, íntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu cónyuge puede aportar buen status a tu vida o apoyo a tu profesión.";
if ($_REQUEST['cod'] == 3)
  echo "Géminis: Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. Día esperanzado, ilusiones. Mucha energía sexual y fuerza emocional. Deseos difíciles de controlar.";
if ($_REQUEST['cod'] == 4)
  echo "Cancer: Este día la profesión y las relaciones con superiores y con tu madre serán de importancia. Actividad en relación a estos temas. Momentos positivos con compañeros de trabajo. Actividad laboral agradable.";
if ($_REQUEST['cod'] == 5)
  echo "Leo: Este día los estudios, los viajes, el extranjero y la espiritualidad serán lo importante. Pensamientos, religión y filosofía también. Vivencias kármicas de la época te vuelven responsable tomando decisiones.";
if ($_REQUEST['cod'] == 6) {
  echo "Virgo: Para este día toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extrañas. Hay karma de prueba durante este período en tu parte psicológica, generándose algunos replanteos.";
}
if ($_REQUEST['cod'] == 7)
  echo "Libra: Hoy todo asunto tiene que ver con tu pareja, también con socios, con la gente o el público. Ellos serán lo más importante del día. Ganancias a través de especulaciones o del juego. Actividades vocacionales artísticas.";
if ($_REQUEST['cod'] == 8)
  echo "Escorpio: Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atención a ambos. Experiencias diversas con compañeros. Durante este período tendrás muchos recursos para ganar dinero.";
if ($_REQUEST['cod'] == 9)
  echo "Sagitario: Durante este día se vivirán cambios en relación a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Período de encuentros con personas o situaciones que te impresionan.";
if ($_REQUEST['cod'] == 10)
  echo "Capricornio: Los cambios del día tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al carácter en la convivencia. El karma de responsabilidad de estos momentos te acercará al mundo de lo desconocido, mucha madurez y contacto con el más allá.";
if ($_REQUEST['cod'] == 11)
  echo "Acuario: Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicación, los viajes cortos o traslados frecuentes. El hablar y trasladarse será importante hoy. Mentalidad e ideas activas.";
if ($_REQUEST['cod'] == 12)
  echo "Piscis: Durante este día se vivirán cambios en la economía, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisión profesionales, buscarás el liderazgo.";
