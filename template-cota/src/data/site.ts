// Todo el contenido del sitio vive aquí. Los textos son de ejemplo.

export const site = {
	name: 'TEXTO GRANDE',
	fullName: 'Nombre Apellido',
	role: 'Estudiante de Ingeniería Mecatrónica',
	location: 'Ciudad, País',
	year: 2026,
	status: 'Disponible para prácticas',
	email: 'hola@ejemplo.com',
	cv: '#',
	socials: [
		{ label: 'LinkedIn', href: '#' },
		{ label: 'GitHub', href: '#' },
		{ label: 'Instagram', href: '#' }
	]
};

export const nav = [
	{ label: 'Sobre mí', href: '#sobre-mi' },
	{ label: 'Áreas', href: '#areas' },
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Proceso', href: '#proceso' },
	{ label: 'Contacto', href: '#contacto' }
];

export const hero = {
	headline: ['Diseño, prototipo', 'y pruebo ideas', 'hasta que funcionan'],
	intro:
		'Estudiante de cuarto año que disfruta el punto donde se cruzan la mecánica, la electrónica y el software. Aquí reúno los proyectos que he construido dentro y fuera de la facultad.'
};

export const marquee = [
	'Diseño mecánico',
	'Sistemas embebidos',
	'Control automático',
	'Simulación',
	'Robótica',
	'Impresión 3D',
	'Análisis de datos'
];

export const about = {
	text: 'Me interesa entender cómo funcionan las cosas y después hacerlas funcionar mejor. Trabajo con método: investigo, modelo, prototipo rápido y mido. Me siento cómoda tanto en el taller con un soldador como frente a una simulación o una hoja de cálculo.',
	stats: [
		{ value: 12, suffix: '+', label: 'Proyectos completos' },
		{ value: 4, suffix: 'º', label: 'Año de carrera' },
		{ value: 3, suffix: '', label: 'Hackathons' },
		{ value: 2, suffix: '', label: 'Prácticas' }
	]
};

export const areas = [
	{
		title: 'Diseño mecánico',
		description:
			'Modelado paramétrico, planos con tolerancias y análisis por elementos finitos para validar piezas antes de fabricarlas.',
		tools: ['SolidWorks', 'Fusion 360', 'GD&T', 'FEA', 'Impresión 3D']
	},
	{
		title: 'Electrónica y embebidos',
		description:
			'Diseño de PCBs, firmware para microcontroladores e integración de sensores y actuadores en sistemas reales.',
		tools: ['ESP32', 'STM32', 'KiCad', 'C / C++', 'FreeRTOS']
	},
	{
		title: 'Software y datos',
		description:
			'Scripts de automatización, procesamiento de señales y visualización de datos para tomar decisiones con evidencia.',
		tools: ['Python', 'MATLAB', 'ROS 2', 'Git', 'SQL']
	},
	{
		title: 'Gestión de proyectos',
		description:
			'Planificación, documentación técnica y trabajo en equipos multidisciplinares con metodologías ágiles.',
		tools: ['Scrum', 'Lean', 'Notion', 'Documentación técnica']
	}
];

export const projects = [
	{
		title: 'Brazo robótico 4 GDL',
		category: 'Robótica',
		year: 2025,
		summary: 'Brazo de bajo coste con cinemática inversa y control desde una interfaz web.',
		tags: ['CAD', 'Arduino', 'Cinemática']
	},
	{
		title: 'Estación meteorológica IoT',
		category: 'Electrónica',
		year: 2025,
		summary: 'Red de sensores con ESP32 que publica datos por MQTT a un panel en tiempo real.',
		tags: ['ESP32', 'MQTT', 'PCB']
	},
	{
		title: 'Optimización de línea de montaje',
		category: 'Industrial',
		year: 2024,
		summary: 'Simulación de eventos discretos que redujo un 18% el tiempo de ciclo en un caso de estudio.',
		tags: ['Simulación', 'Lean']
	},
	{
		title: 'Dron de inspección',
		category: 'Control',
		year: 2024,
		summary: 'Proyecto en equipo: ajuste de controladores PID y planificación de rutas autónomas.',
		tags: ['PID', 'PX4', 'Equipo']
	},
	{
		title: 'Prótesis de mano impresa',
		category: 'Biomecánica',
		year: 2023,
		summary: 'Mano accionada por tendones, diseñada para imprimirse sin soportes y ensamblarse en una hora.',
		tags: ['Fusion 360', 'Impresión 3D']
	},
	{
		title: 'Panel de consumo energético',
		category: 'Datos',
		year: 2023,
		summary: 'Análisis del consumo eléctrico de la facultad con detección de picos y recomendaciones.',
		tags: ['Python', 'Pandas', 'Dashboards']
	}
];

export const process = [
	{
		title: 'Investigar',
		description:
			'Defino el problema real, las restricciones y cómo voy a medir el éxito antes de abrir cualquier software.',
		deliverables: ['Requisitos', 'Estado del arte', 'Métricas']
	},
	{
		title: 'Diseñar',
		description:
			'Exploro alternativas con bocetos y modelos, y elijo con matrices de decisión en lugar de intuiciones.',
		deliverables: ['Modelos CAD', 'Esquemáticos', 'Simulaciones']
	},
	{
		title: 'Prototipar',
		description:
			'Construyo rápido y barato para equivocarme pronto. Cada iteración responde a una pregunta concreta.',
		deliverables: ['Prototipos', 'Firmware', 'Bitácora']
	},
	{
		title: 'Validar',
		description:
			'Pruebo contra las métricas iniciales, documento resultados y dejo todo listo para que otra persona lo continúe.',
		deliverables: ['Ensayos', 'Informe técnico', 'Repositorio']
	}
];

export const experience = [
	{ year: '2025', role: 'Prácticas en ingeniería de procesos', place: 'Empresa Ejemplo S.A.', type: 'Prácticas' },
	{ year: '2024', role: 'Ayudante de cátedra — Física II', place: 'Universidad Ejemplo', type: 'Docencia' },
	{ year: '2024', role: '1er puesto — Hackathon de energía', place: 'Evento Ejemplo', type: 'Premio' },
	{ year: '2023', role: 'Equipo de robótica estudiantil', place: 'Universidad Ejemplo', type: 'Equipo' },
	{ year: '2021 —', role: 'Grado en Ingeniería Mecatrónica', place: 'Universidad Ejemplo', type: 'Formación' }
];
