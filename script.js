
const map = L.map('map').setView([43.238, 76.945], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const locations = [
  { name: 'Пункт приёма вещей', address: 'ул. Абая, 12', coords: [43.222, 76.851] },
  { name: 'Переработка пластика', address: 'пр. Назарбаева, 45', coords: [43.2389, 76.8897] },
  { name: 'Сбор макулатуры', address: 'ул. Толе би, 89', coords: [43.256, 76.928] },
  { name: 'Экоцентр при школе', address: 'ул. Гагарина, 15', coords: [43.231, 76.921] },
  { name: 'Приём стекла', address: 'ул. Сейфуллина, 100', coords: [43.251, 76.891] },
  { name: 'Сбор батареек', address: 'ТРЦ Mega Center', coords: [43.236, 76.909] },
  { name: 'Переработка металла', address: 'ул. Райымбека, 220', coords: [43.269, 76.856] },
  { name: 'Пункт приёма одежды', address: 'ул. Байтурсынова, 75', coords: [43.242, 76.905] },
  { name: 'Экомобиль', address: 'Площадь Республики', coords: [43.238, 76.945] },
  { name: 'Переработка пластика №2', address: 'ул. Шевченко, 150', coords: [43.244, 76.877] },
  { name: 'Приём электроники', address: 'ул. Жандосова, 200', coords: [43.222, 76.882] },
  { name: 'Экопункт у парка', address: 'Парк 28 гвардейцев', coords: [43.255, 76.951] },
  { name: 'Сбор лампочек', address: 'ул. Карасай батыра, 80', coords: [43.244, 76.915] },
  { name: 'Приём шин', address: 'ул. Саина, 300', coords: [43.221, 76.84] },
  { name: 'Экопункт на рынке', address: 'Зеленый базар', coords: [43.263, 76.954] },
  { name: 'Сбор алюминия', address: 'ул. Абылай хана, 90', coords: [43.247, 76.923] },
  { name: 'Приём бумаги', address: 'ул. Панфилова, 120', coords: [43.257, 76.935] },
  { name: 'Экопункт у метро', address: 'ст. метро Байконур', coords: [43.235, 76.909] },
  { name: 'Сбор оргтехники', address: 'ул. Тимирязева, 100', coords: [43.233, 76.877] },
  { name: 'Приём пластиковых бутылок', address: 'ул. Достык, 50', coords: [43.254, 76.95] }
];

locations.forEach(loc => {
  L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b><br>${loc.address}`);
});