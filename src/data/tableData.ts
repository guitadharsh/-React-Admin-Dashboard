const tableHeading = [
    { title: 'Event Name', isSort: false },
    { title: 'Event Start', isSort: false },
    { title: 'Event End', isSort: true },
    { title: 'Client Name', isSort: true },
    { title: 'Contact Info', isSort: false },
    { title: 'Venue', isSort: false },
    { title: 'City', isSort: false },
    { title: 'State', isSort: false },
    { title: 'Zip Code', isSort: false },
]

const tableData = [
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
    { name: 'Filled Name', start: 'Jan 12, 2024', end: 'Jan 12, 2024', client: 'Mohammad Asad', contact: '+12 923829129', venue: 'St street Adress 123', city: 'hyrdrabad',  state: 'Telungana', zipcode: '695534'},
]


export { tableHeading, tableData }