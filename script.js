/* Misi Penjaga Warisan Nusantara
   Media pembelajaran IPAS Sejarah untuk kelas VI SD/MI.
   Data materi, tokoh, peristiwa, soal, dan konfigurasi dikumpulkan di objek DATA.
*/
const DATA = {
  config: {
    title: 'Misi Penjaga Warisan Nusantara',
    subject: 'IPAS (Sejarah)',
    grade: 'VI',
    videoUrl: 'https://youtu.be/hFgBmCVjO8s',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/hFgBmCVjO8s',
    googleFormUrl: '', // Isi dengan tautan Google Form kelas.
    developerName: 'Mahasiswa PGMI', // Ganti sesuai kebutuhan.
    localStorageKey: 'misiPenjagaWarisanNusantara_v1',
    maxUploadBytes: 1500000,
    mapTiles: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  objectives: [
    'Menyebutkan nama pahlawan dan lokasi situs sejarah dengan tepat.',
    'Menguraikan latar belakang dan kronologi perjuangan secara runtut.',
    'Menghubungkan nilai keteladanan pahlawan dengan perilaku sehari-hari.'
  ],
  materials: [
    {
      id: 'bangsa-asing', title: 'Kedatangan Bangsa Asing', short: 'Awal persaingan rempah', icon: '⛵',
      prompt: 'Mengapa bangsa Eropa datang ke Nusantara?',
      explanation: 'Bangsa Eropa mencari rempah-rempah. Portugis tiba di Malaka pada 1511 dan Maluku pada 1512. Spanyol tiba di Tidore pada 1521. Cornelis de Houtman tiba di Banten pada 1596. VOC dibentuk pada 1602. Inggris berkuasa singkat pada 1811–1816 di bawah Thomas Stamford Raffles.',
      fact: 'Rempah-rempah seperti cengkih dan pala sangat berharga dalam perdagangan dunia.',
      everyday: 'Saat berdagang, kita perlu bersikap adil. Jangan mengambil keuntungan dengan merugikan orang lain.',
      question: 'Bangsa Eropa terutama mencari komoditas apa di Nusantara?',
      options: ['Rempah-rempah', 'Batu bara', 'Mobil', 'Telepon genggam'], answer: 0,
      terms: ['rempah-rempah', 'VOC', 'monopoli']
    },
    {
      id: 'pemicu-perlawanan', title: 'Mengapa Rakyat Melawan?', short: 'Penyebab perlawanan', icon: '⚖️',
      prompt: 'Apa yang membuat rakyat tidak tinggal diam?',
      explanation: 'Rakyat menentang monopoli rempah, tanam paksa, pajak berat, campur tangan urusan kerajaan, dan perampasan tanah. Kebijakan tersebut merugikan kehidupan rakyat. Perlawanan muncul di berbagai daerah dengan tokoh dan strategi berbeda.',
      fact: 'Monopoli membuat pihak tertentu menguasai perdagangan dan membatasi pihak lain.',
      everyday: 'Ketika aturan kelompok tidak adil, sampaikan keberatan dengan sopan dan ajak mencari solusi.',
      question: 'Manakah contoh kebijakan yang memicu perlawanan?',
      options: ['Pajak berat dan perampasan tanah', 'Gotong royong membersihkan kampung', 'Musyawarah kelas', 'Berbagi bekal dengan teman'], answer: 0,
      terms: ['monopoli', 'tanam paksa', 'perlawanan']
    },
    {
      id: 'perlawanan-daerah', title: 'Perlawanan di Berbagai Daerah', short: 'Pahlawan Nusantara', icon: '🛡️',
      prompt: 'Apakah perjuangan hanya terjadi di satu wilayah?',
      explanation: 'Tidak. Sultan Hasanuddin berjuang di Makassar pada 1666–1669. Pattimura memimpin perlawanan Maluku pada 1817. Tuanku Imam Bonjol memimpin Perang Padri di Sumatra Barat. Pangeran Diponegoro memimpin Perang Jawa pada 1825–1830. Teuku Umar dan Cut Nyak Dien berjuang dalam Perang Aceh. Pangeran Antasari dikenal dalam Perang Banjar. Sisingamangaraja XII berjuang di Tapanuli.',
      fact: 'Perjuangan di berbagai daerah menunjukkan keberanian rakyat mempertahankan tanah air.',
      everyday: 'Kenali sejarah daerahmu. Ceritakan kepada teman dengan menghargai perjuangan setiap tokoh.',
      question: 'Tokoh yang memimpin Perang Jawa 1825–1830 adalah …',
      options: ['Pangeran Diponegoro', 'Pattimura', 'Sultan Hasanuddin', 'Pangeran Antasari'], answer: 0,
      terms: ['gerilya', 'Perang Padri', 'Perang Jawa']
    },
    {
      id: 'perang-padri', title: 'Perang Padri', short: 'Perjuangan di Sumatra Barat', icon: '⛰️',
      prompt: 'Bagaimana strategi dapat membantu perjuangan?',
      explanation: 'Perang Padri bermula dari pertentangan kaum adat dan kaum Padri di Minangkabau, Sumatra Barat. Tuanku Imam Bonjol memimpin kaum Padri setelah Datuk Bandaro. Ia memakai strategi gerilya. Belanda menangkapnya pada 25 Oktober 1837 dan mengasingkannya. Ia wafat pada 1864 dekat Manado.',
      fact: 'Gerilya dilakukan dengan bergerak dan menyerang secara tak terduga.',
      everyday: 'Saat menghadapi tugas sulit, susun strategi, berlatih, dan bekerja sama dengan teman.',
      question: 'Strategi yang digunakan Tuanku Imam Bonjol adalah …',
      options: ['Gerilya', 'Menyerah tanpa usaha', 'Menghindari semua kerja sama', 'Menghentikan perjuangan sejak awal'], answer: 0,
      terms: ['gerilya', 'pengasingan', 'gencatan senjata']
    },
    {
      id: 'perang-jawa', title: 'Perang Jawa', short: 'Perjuangan Diponegoro', icon: '🐎',
      prompt: 'Mengapa tanah leluhur penting bagi masyarakat?',
      explanation: 'Perang Jawa dipimpin Pangeran Diponegoro pada 1825–1830. Pajak berat dan pemasangan patok jalan di tanah leluhur menjadi pemicu. Pasukannya memakai taktik gerilya. Belanda lalu membangun banyak benteng melalui strategi Benteng Stelsel.',
      fact: 'Benteng Stelsel bertujuan mempersempit ruang gerak pasukan Diponegoro.',
      everyday: 'Hormati hak orang lain. Bicarakan perubahan lingkungan bersama warga yang terdampak.',
      question: 'Apa tujuan strategi Benteng Stelsel?',
      options: ['Mempersempit ruang gerak pasukan Diponegoro', 'Membagikan tanah kepada rakyat', 'Membuka sekolah di setiap desa', 'Menghentikan semua pajak'], answer: 0,
      terms: ['Benteng Stelsel', 'patok jalan', 'gerilya']
    },
    {
      id: 'pergerakan-nasional', title: 'Menuju Kemerdekaan', short: 'Pergerakan nasional', icon: '🇮🇩',
      prompt: 'Bagaimana perjuangan berkembang menjadi gerakan nasional?',
      explanation: 'Perjuangan berkembang melalui organisasi dan persatuan. Budi Utomo berdiri pada 1908. Sumpah Pemuda berlangsung pada 1928. Jepang menduduki Indonesia pada 1942. BPUPKI dan PPKI berperan pada 1945. Soekarno–Hatta memproklamasikan kemerdekaan pada 17 Agustus 1945.',
      fact: 'Sumpah Pemuda menguatkan semangat satu tanah air, satu bangsa, dan satu bahasa.',
      everyday: 'Perbedaan suku dan bahasa bukan penghalang. Kita dapat bekerja sama untuk tujuan bersama.',
      question: 'Kapan Proklamasi Kemerdekaan Indonesia dibacakan?',
      options: ['17 Agustus 1945', '28 Oktober 1928', '20 Mei 1908', '17 Agustus 1942'], answer: 0,
      terms: ['pergerakan nasional', 'Sumpah Pemuda', 'proklamasi', 'BPUPKI', 'PPKI']
    },
    {
      id: 'nilai-teladan', title: 'Nilai Keteladanan Pahlawan', short: 'Teladan untuk hari ini', icon: '❤️',
      prompt: 'Bagaimana perjuangan pahlawan dapat kita teladani sekarang?',
      explanation: 'Pahlawan mengajarkan keberanian, pantang menyerah, cinta tanah air, gotong royong, kejujuran, dan kepedulian. Nilai itu dapat diterapkan di rumah, sekolah, dan lingkungan. Teladan tidak harus berupa perang; tindakan baik sehari-hari juga berarti.',
      fact: 'Menjaga warisan sejarah juga berarti merawat cerita dan peninggalan dengan bertanggung jawab.',
      everyday: 'Berani mengakui kesalahan, membantu teman, menjaga kebersihan, dan menyelesaikan tugas bersama.',
      question: 'Membantu teman yang kesulitan merupakan contoh nilai …',
      options: ['Peduli dan gotong royong', 'Monopoli', 'Perampasan', 'Sikap acuh'], answer: 0,
      terms: ['teladan', 'cinta tanah air', 'gotong royong']
    }
  ],
  heroes: [
    { id:'hasanuddin', name:'Sultan Hasanuddin', region:'Makassar, Sulawesi Selatan', period:'1666–1669', life:'Tahun hidup tidak dicantumkan pada data acuan.', role:'Memimpin perlawanan di Makassar.', value:'Berani membela daerah dan rakyat.', icon:'👑', lat:-5.1477, lng:119.4327, challenge:'Apa nilai yang bisa kamu teladani dari keberanian membela rakyat?' },
    { id:'pattimura', name:'Pattimura', region:'Maluku', period:'1817', life:'Tahun hidup tidak dicantumkan pada data acuan.', role:'Memimpin perlawanan di Maluku.', value:'Berani dan pantang menyerah.', icon:'⚔️', lat:-3.6954, lng:128.1814, challenge:'Sebutkan satu tindakan berani yang tetap sopan di sekolah.' },
    { id:'imambonjol', name:'Tuanku Imam Bonjol', region:'Sumatra Barat', period:'Perang Padri 1803–1838', life:'Wafat pada 1864; tahun lahir tidak dicantumkan pada data acuan.', role:'Memimpin kaum Padri dan menggunakan strategi gerilya.', value:'Teguh, strategis, dan pantang menyerah.', icon:'⛰️', lat:0.3013, lng:100.3692, challenge:'Mengapa strategi dan ketekunan diperlukan dalam tugas sulit?' },
    { id:'diponegoro', name:'Pangeran Diponegoro', region:'Yogyakarta dan Jawa', period:'Perang Jawa 1825–1830', life:'Wafat pada 1855; tahun lahir tidak dicantumkan pada data acuan.', role:'Memimpin Perang Jawa melawan Belanda.', value:'Cinta tanah air dan berani menentang ketidakadilan.', icon:'🐎', lat:-7.7956, lng:110.3695, challenge:'Bagaimana cara menyampaikan keberatan terhadap aturan yang tidak adil?' },
    { id:'teukuumar', name:'Teuku Umar', region:'Aceh', period:'Perang Aceh 1873–1904', life:'Tahun hidup tidak dicantumkan pada data acuan.', role:'Tokoh perlawanan dalam Perang Aceh.', value:'Cerdik dan berani.', icon:'🌿', lat:5.5483, lng:95.3238, challenge:'Kapan berpikir cermat membantu kelompokmu mencapai tujuan?' },
    { id:'cutnyakdien', name:'Cut Nyak Dien', region:'Aceh', period:'Perang Aceh 1873–1904', life:'Tahun hidup tidak dicantumkan pada data acuan.', role:'Tokoh perjuangan dalam Perang Aceh.', value:'Teguh dan pantang menyerah.', icon:'🌺', lat:4.1363, lng:96.1285, challenge:'Apa yang bisa kamu lakukan saat menghadapi kegagalan?' },
    { id:'antasari', name:'Pangeran Antasari', region:'Kalimantan Selatan', period:'Perang Banjar 1859–1905', life:'Tahun hidup tidak dicantumkan pada data acuan.', role:'Tokoh perlawanan dalam Perang Banjar.', value:'Berani dan mencintai tanah air.', icon:'🌳', lat:-3.3194, lng:114.5908, challenge:'Bagaimana caramu menjaga lingkungan tempat tinggal?' },
    { id:'sisingamangaraja', name:'Sisingamangaraja XII', region:'Tapanuli, Sumatra Utara', period:'1878–1907', life:'Tahun hidup tidak dicantumkan pada data acuan.', role:'Memimpin perlawanan di Tapanuli.', value:'Teguh membela masyarakat.', icon:'🛡️', lat:2.3333, lng:99.0667, challenge:'Bagaimana cara menunjukkan kepedulian kepada masyarakat?' }
  ],
  localHeroByProvince: {
    'Sulawesi Selatan':'hasanuddin','Maluku':'pattimura','Sumatera Barat':'imambonjol','DI Yogyakarta':'diponegoro','Aceh':'cutnyakdien','Kalimantan Selatan':'antasari','Sumatera Utara':'sisingamangaraja'
  },
  provinces: ['Aceh','Sumatera Utara','Sumatera Barat','Riau','Kepulauan Riau','Jambi','Sumatera Selatan','Kepulauan Bangka Belitung','Bengkulu','Lampung','Banten','DKI Jakarta','Jawa Barat','Jawa Tengah','DI Yogyakarta','Jawa Timur','Bali','Nusa Tenggara Barat','Nusa Tenggara Timur','Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara','Sulawesi Utara','Gorontalo','Sulawesi Tengah','Sulawesi Barat','Sulawesi Selatan','Sulawesi Tenggara','Maluku','Maluku Utara','Papua','Papua Barat','Papua Selatan','Papua Tengah','Papua Pegunungan','Papua Barat Daya'],
  events: [
    { year:1511, title:'Portugis menguasai Malaka', text:'Portugis tiba di Malaka untuk berdagang dan berusaha menguasai jalur rempah.', why:'Peristiwa ini menjadi bagian awal persaingan bangsa Eropa di kawasan Nusantara.' },
    { year:1596, title:'Belanda tiba di Banten', text:'Pelayaran Belanda yang dipimpin Cornelis de Houtman tiba di Banten.', why:'Kedatangan ini berkembang menjadi upaya menguasai perdagangan.' },
    { year:1602, title:'VOC dibentuk', text:'Belanda membentuk VOC untuk memperkuat kepentingan dagangnya.', why:'VOC berkaitan dengan monopoli perdagangan yang merugikan rakyat.' },
    { year:1817, title:'Perlawanan Pattimura', text:'Pattimura memimpin perlawanan di Maluku.', why:'Peristiwa ini memperlihatkan perlawanan rakyat di daerah.' },
    { year:1825, title:'Perang Jawa dimulai', text:'Pangeran Diponegoro memimpin perlawanan setelah ketegangan dan kebijakan yang merugikan.', why:'Perlawanan besar ini berlangsung hingga 1830.' },
    { year:1908, title:'Budi Utomo', text:'Budi Utomo berdiri sebagai bagian dari masa pergerakan nasional.', why:'Organisasi membantu mengembangkan semangat kebangsaan.' },
    { year:1928, title:'Sumpah Pemuda', text:'Pemuda menegaskan satu tanah air, satu bangsa, dan satu bahasa Indonesia.', why:'Persatuan menjadi kekuatan penting dalam perjuangan.' },
    { year:1945, title:'Proklamasi Kemerdekaan', text:'Soekarno–Hatta memproklamasikan kemerdekaan pada 17 Agustus 1945.', why:'Indonesia menyatakan kemerdekaannya kepada dunia.' }
  ],
  glossaries: {
    'Rempah-rempah':'Bagian tumbuhan, seperti cengkih dan pala, yang digunakan sebagai bumbu atau bahan lainnya.',
    'VOC':'Persekutuan dagang Belanda yang dibentuk pada 1602.',
    'Monopoli':'Keadaan ketika satu pihak menguasai perdagangan suatu barang.',
    'Tanam paksa':'Kebijakan kolonial yang mewajibkan rakyat menanam tanaman tertentu untuk kepentingan pemerintah kolonial.',
    'Gerilya':'Strategi perjuangan dengan pergerakan lincah dan serangan mendadak.',
    'Gencatan senjata':'Penghentian pertempuran untuk sementara.',
    'Pengasingan':'Tindakan memindahkan seseorang jauh dari daerah asalnya.',
    'Benteng Stelsel':'Strategi Belanda membangun banyak benteng untuk mempersempit ruang gerak pasukan Diponegoro.',
    'Pergerakan nasional':'Gerakan perjuangan yang tumbuh melalui organisasi dan semangat kebangsaan.',
    'Proklamasi':'Pernyataan resmi tentang kemerdekaan Indonesia pada 17 Agustus 1945.',
    'BPUPKI':'Badan yang membahas persiapan kemerdekaan Indonesia pada 1945.',
    'PPKI':'Panitia yang melanjutkan persiapan kemerdekaan Indonesia pada 1945.',
    'Gotong royong':'Bekerja bersama-sama untuk mencapai tujuan bersama.'
  },
  quiz: [
    {id:'q1',type:'mc',level:'C1–C2',q:'Apa tujuan utama kedatangan bangsa Eropa ke Nusantara pada awalnya?',opts:['Mencari rempah-rempah','Membuat jalur kereta api','Membuka taman hiburan','Mencari kendaraan bermotor'],a:0,why:'Rempah-rempah sangat berharga dalam perdagangan dunia.'},
    {id:'q2',type:'mc',level:'C1–C2',q:'Bangsa Portugis menguasai Malaka pada tahun …',opts:['1511','1521','1596','1602'],a:0,why:'Dalam materi acuan, Portugis tiba dan menguasai Malaka pada 1511.'},
    {id:'q3',type:'mc',level:'C1–C2',q:'Bangsa Spanyol tiba di Tidore pada tahun …',opts:['1511','1512','1521','1811'],a:2,why:'Spanyol tiba di Tidore, Maluku, pada 1521.'},
    {id:'q4',type:'mc',level:'C1–C2',q:'Siapakah yang tiba di Banten pada 1596?',opts:['Cornelis de Houtman','Thomas Stamford Raffles','Pattimura','Soekarno'],a:0,why:'Pelayaran Belanda yang dipimpin Cornelis de Houtman tiba di Banten pada 1596.'},
    {id:'q5',type:'mc',level:'C1–C2',q:'VOC dibentuk pada tahun …',opts:['1602','1817','1908','1945'],a:0,why:'VOC dibentuk pada 1602.'},
    {id:'q6',type:'mc',level:'C1–C2',q:'Tokoh yang memimpin Perang Jawa adalah …',opts:['Pangeran Diponegoro','Pangeran Antasari','Pattimura','Teuku Umar'],a:0,why:'Pangeran Diponegoro memimpin Perang Jawa pada 1825–1830.'},
    {id:'q7',type:'mc',level:'C1–C2',q:'Perang Padri berlangsung di wilayah …',opts:['Sumatra Barat','Maluku','Kalimantan Selatan','Tapanuli'],a:0,why:'Perang Padri terjadi di tanah Minangkabau, Sumatra Barat.'},
    {id:'q8',type:'mc',level:'C1–C2',q:'Siapakah tokoh perlawanan di Maluku pada 1817?',opts:['Pattimura','Cut Nyak Dien','Sisingamangaraja XII','Sultan Hasanuddin'],a:0,why:'Pattimura memimpin perlawanan di Maluku pada 1817.'},
    {id:'q9',type:'mc',level:'C1–C2',q:'Budi Utomo berdiri pada tahun …',opts:['1908','1928','1942','1945'],a:0,why:'Budi Utomo berdiri pada 1908.'},
    {id:'q10',type:'mc',level:'C1–C2',q:'Sumpah Pemuda berlangsung pada tahun …',opts:['1908','1928','1938','1945'],a:1,why:'Sumpah Pemuda berlangsung pada 1928.'},
    {id:'q11',type:'mc',level:'C1–C2',q:'Kapan Proklamasi Kemerdekaan Indonesia dibacakan?',opts:['17 Agustus 1945','20 Mei 1908','28 Oktober 1928','17 Agustus 1942'],a:0,why:'Proklamasi Kemerdekaan dibacakan pada 17 Agustus 1945.'},
    {id:'q12',type:'mc',level:'C1–C2',q:'Manakah yang termasuk nilai keteladanan pahlawan?',opts:['Pantang menyerah','Mementingkan diri sendiri','Tidak peduli','Berkata tidak jujur'],a:0,why:'Pantang menyerah merupakan salah satu nilai keteladanan yang dipelajari.'},
    {id:'q13',type:'mc',level:'C3',q:'Kelompokmu berbeda pendapat saat membuat tugas sejarah. Sikap yang paling tepat adalah …',opts:['Berdiskusi dan membagi tugas bersama','Meninggalkan kelompok','Memaksa semua mengikuti satu orang','Menyembunyikan hasil kerja teman'],a:0,why:'Diskusi dan pembagian tugas mencerminkan gotong royong serta menghargai perbedaan.'},
    {id:'q14',type:'mc',level:'C3',q:'Kamu menemukan sampah di sekitar monumen sejarah. Apa tindakan terbaik?',opts:['Memungut sampah dengan aman dan membuangnya pada tempatnya','Membiarkannya','Mencoret monumen','Mengajak teman merusak papan informasi'],a:0,why:'Menjaga kebersihan situs sejarah merupakan bentuk kepedulian terhadap warisan.'},
    {id:'q15',type:'mc',level:'C3',q:'Temanmu menyerah karena tugasnya sulit. Nilai apa yang sebaiknya kamu tunjukkan?',opts:['Menyemangati dan membantu mencari langkah berikutnya','Menertawakannya','Mengerjakan semuanya tanpa berdiskusi','Mengatakan bahwa ia tidak mampu'],a:0,why:'Menyemangati teman menunjukkan kepedulian dan sikap pantang menyerah.'},
    {id:'q16',type:'mc',level:'C3',q:'Kamu ingin mengetahui pahlawan daerahmu. Langkah awal yang baik adalah …',opts:['Bertanya kepada guru atau keluarga dan memeriksa sumber tepercaya','Menebak namanya','Menyebarkan cerita yang belum jelas','Mengabaikan sejarah setempat'],a:0,why:'Informasi lokal sebaiknya diperiksa melalui sumber yang tepercaya.'},
    {id:'q17',type:'mc',level:'C3',q:'Saat musyawarah kelas, pendapat temanmu berbeda. Kamu sebaiknya …',opts:['Mendengarkan alasan teman lalu mencari kesepakatan','Langsung memotong pembicaraan','Mengejek pendapatnya','Menolak tanpa mendengar'],a:0,why:'Mendengarkan pendapat adalah cara menghargai orang lain dan menyelesaikan masalah.'},
    {id:'q18',type:'mc',level:'HOTS',q:'Apa risiko terbesar jika poster sejarah menyebut tahun tanpa memeriksa sumber?',opts:['Pembaca dapat menerima informasi keliru sebagai fakta','Poster pasti lebih mudah dibaca','Semua tokoh akan menjadi sama','Sejarah tidak lagi perlu dipelajari'],a:0,why:'Informasi yang tidak diverifikasi dapat menyesatkan pembaca dan menyebarkan kekeliruan sejarah.'},
    {id:'q19',type:'mc',level:'HOTS',q:'Mengapa perlawanan yang terpisah-pisah lebih mudah dipatahkan penjajah?',opts:['Kekuatan dan koordinasi antardaerah belum menyatu','Semua rakyat tidak peduli tanah air','Semua daerah tidak memiliki tokoh','Penjajah tidak mempunyai strategi'],a:0,why:'Perjuangan yang kurang terkoordinasi lebih sulit menyatukan sumber daya dan strategi.'},
    {id:'q20',type:'mc',level:'HOTS',q:'Apa pelajaran penting dari perubahan perjuangan daerah menuju pergerakan nasional?',opts:['Persatuan dapat memperkuat tujuan bersama','Perbedaan harus dihapus dengan paksaan','Satu daerah harus berjuang sendiri','Kerja sama tidak diperlukan'],a:0,why:'Semangat persatuan membantu perjuangan mencapai tujuan bersama.'},
    {id:'q21',type:'tf',level:'HOTS',q:'Monopoli perdagangan dapat merugikan rakyat karena membatasi kebebasan berdagang.',opts:['Benar','Salah'],a:0,why:'Monopoli memberi penguasaan kepada pihak tertentu dan dapat merugikan pedagang atau rakyat.'},
    {id:'q22',type:'tf',level:'HOTS',q:'Strategi Benteng Stelsel dibuat untuk membantu pasukan Diponegoro bergerak lebih leluasa.',opts:['Benar','Salah'],a:1,why:'Benteng Stelsel digunakan Belanda untuk mempersempit ruang gerak pasukan Diponegoro.'},
    {id:'q23',type:'tf',level:'HOTS',q:'Menghormati pahlawan cukup dilakukan dengan menghafal namanya; menjaga situs sejarah tidak penting.',opts:['Benar','Salah'],a:1,why:'Menghormati pahlawan juga dapat dilakukan dengan merawat situs dan meneladani nilai baiknya.'},
    {id:'q24',type:'tf',level:'HOTS',q:'Keberanian pahlawan bisa diterapkan sekarang dengan menyampaikan kebenaran secara bertanggung jawab.',opts:['Benar','Salah'],a:0,why:'Keberanian dapat diwujudkan melalui tindakan jujur, sopan, dan bertanggung jawab.'},
    {id:'q25',type:'tf',level:'C3',q:'Kerja sama dalam kelompok merupakan salah satu cara menerapkan gotong royong.',opts:['Benar','Salah'],a:0,why:'Gotong royong berarti bekerja bersama untuk mencapai tujuan bersama.'}
  ],
  miniHeroes: [
    {hero:'Sultan Hasanuddin', place:'Makassar'},
    {hero:'Pattimura', place:'Maluku'},
    {hero:'Tuanku Imam Bonjol', place:'Sumatra Barat'},
    {hero:'Pangeran Diponegoro', place:'Jawa'},
    {hero:'Pangeran Antasari', place:'Kalimantan Selatan'}
  ],
  values: [
    {id:'berani', label:'Berani', example:'Mengatakan yang benar meskipun sulit.'},
    {id:'pantang', label:'Pantang menyerah', example:'Mencoba kembali setelah gagal.'},
    {id:'cinta', label:'Cinta tanah air', example:'Menjaga situs sejarah dan lingkungan.'},
    {id:'gotong', label:'Gotong royong', example:'Membagi tugas dan bekerja bersama.'},
    {id:'jujur', label:'Jujur', example:'Mengakui kesalahan dan tidak menyontek.'},
    {id:'peduli', label:'Peduli', example:'Membantu teman yang kesulitan.'}
  ]
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const shuffle = list => { const result = [...list]; for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];} return result; };
const clone = obj => JSON.parse(JSON.stringify(obj));

function freshState(){
  return {
    name:'', className:'VI', xp:0, screen:'dashboard', materialIndex:0, missionIndex:0,
    readMaterials:[], missionDone:[], badges:[], collectedHeroes:[], stamps:[],
    journal:'', caseChoice:'', valueMatches:{}, province:'', localHeroNote:'',
    quizOrder:[], quizOptionOrder:{}, quizAnswers:{}, quizIndex:0, quizSubmitted:false,
    quizResult:null, quizReviewOpen:false, quizXpAwarded:false,
    wordGame:{letters:'', answer:'', solved:false, awarded:false}, matchGame:{answers:{}, checked:false, awarded:false},
    project:{name:'',type:'',dataUrl:'',mime:'',savedAt:''}, fontScale:1, garuVisible:true,
    seenWelcome:false
  };
}
let state = freshState();
let mapInstance = null;
let currentMarkers = [];
let draggedSortId = null;

function safeReadState(){
  try { const raw = localStorage.getItem(DATA.config.localStorageKey); if(raw){ const saved=JSON.parse(raw); return {...freshState(),...saved}; } }
  catch(err){ console.warn('Penyimpanan lokal tidak dapat dibaca.', err); }
  return freshState();
}
function persist(){
  try { localStorage.setItem(DATA.config.localStorageKey, JSON.stringify(state)); return true; }
  catch(err){ console.warn('Penyimpanan browser penuh atau tidak tersedia.', err); return false; }
}
function toast(message, type='normal'){
  const region=$('#toastRegion'); if(!region)return;
  const item=document.createElement('div'); item.className='toast '+(type==='success'?'success':type==='warn'?'warn':type==='error'?'error':''); item.textContent=message;
  region.appendChild(item); setTimeout(()=>item.remove(),3600);
}
function sayGaru(message){
  $('#garuMessage').textContent=message;
  if(state.garuVisible){ $('#garuBubble').classList.remove('hidden-bubble'); }
}
function getLevel(xp=state.xp){
  if(xp>=120)return {name:'Penjaga Nusantara',next:160,prev:120};
  if(xp>=70)return {name:'Detektif Waktu',next:120,prev:70};
  if(xp>=30)return {name:'Penjelajah',next:70,prev:30};
  return {name:'Murid Baru',next:30,prev:0};
}
function addXP(amount, reason){
  state.xp += amount;
  const level=getLevel();
  persist(); updatePersistentUI();
  toast(`+${amount} XP${reason?' • '+reason:''}`, 'success');
  if(state.xp===amount || state.xp===30 || state.xp===70 || state.xp===120) sayGaru(`Hebat, ${state.name}! Kamu naik semangat. Sekarang kamu ${level.name}.`);
}
function unlockBadge(id){
  if(!state.badges.includes(id)){state.badges.push(id);persist();const b=badgeData().find(x=>x.id===id);if(b){toast(`Lencana didapat: ${b.name}!`,'success');sayGaru(`Keren, ${state.name}! Kamu mendapat lencana ${b.name}.`);} }
}
function badgeData(){return [
  {id:'map',name:'Penjelajah Peta',icon:'🗺️',desc:'Selesaikan Misi 2 dan jelajahi lokasi sejarah.'},
  {id:'timeline',name:'Ahli Lini Masa',icon:'⏳',desc:'Selesaikan tantangan urutan peristiwa.'},
  {id:'teladan',name:'Si Teladan',icon:'💚',desc:'Selesaikan refleksi nilai keteladanan.'},
  {id:'quiz',name:'Juara Kuis',icon:'🏆',desc:'Raih nilai kuis minimal 85.'}
];}
function completedPercent(){
  const materialCount=state.readMaterials.length;
  const missionCount=state.missionDone.length;
  const quizCount=state.quizSubmitted?1:0;
  return Math.round((materialCount+missionCount+quizCount)/(DATA.materials.length+4+1)*100);
}
function currentStampCount(){return state.stamps.length;}
function updatePersistentUI(){
  $('#sidebarName').textContent=state.name||'Penjelajah';
  $('#sidebarLevel').textContent=getLevel().name;
  $('#stampCount').textContent=currentStampCount();
  $('#missionNavDot').textContent=`${state.missionDone.length}/4`;
  document.documentElement.style.setProperty('--font-scale', String(state.fontScale||1));
  $('#toggleGaru span').textContent=state.garuVisible?'Sembunyikan Garu':'Tampilkan Garu';
  $('#garuBubble').classList.toggle('hidden-bubble',!state.garuVisible);
}
function destroyMap(){if(mapInstance){mapInstance.remove();mapInstance=null;currentMarkers=[];}}
function showApp(){ $('#loginScreen').classList.add('hidden'); $('#learningApp').classList.remove('hidden'); updatePersistentUI(); }
function showLogin(){ $('#loginScreen').classList.remove('hidden'); $('#learningApp').classList.add('hidden'); $('#studentName').value=state.name||''; }
function navigate(screen){
  const known=['dashboard','materi','aktivitas','kuis','hasil','petunjuk','tentang'];
  if(!known.includes(screen))return;
  destroyMap(); state.screen=screen; persist();
  if(!state.name){showLogin();return;}
  showApp();
  $$('.nav-item,[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav===screen));
  const crumbs={dashboard:'Dashboard',materi:'Buku Materi',aktivitas:'Aktivitas & Misi',kuis:'Zona Kuis',hasil:'Hasil Belajar',petunjuk:'Petunjuk',tentang:'Tentang Media'};
  $('#pageBreadcrumb').textContent=crumbs[screen]||'Jelajah';
  renderScreen();
  if(window.innerWidth<=900)closeMobileNav();
  $('#content').focus({preventScroll:true});
}
function renderScreen(){
  destroyMap();
  const content=$('#content');
  const renderers={dashboard:renderDashboard,materi:renderMaterials,aktivitas:renderActivities,kuis:renderQuiz,hasil:renderResults,petunjuk:renderGuide,tentang:renderAbout};
  content.innerHTML=(renderers[state.screen]||renderDashboard)();
  updatePersistentUI();
  if(state.screen==='aktivitas' && state.missionIndex===1) initMap();
  if(state.screen==='materi') refreshGlossaryButtons();
  if(state.screen==='aktivitas' && state.missionIndex===2) bindSortDragDrop();
  if(state.screen==='aktivitas' && state.missionIndex===3) bindReflectionCounter();
  if(state.screen==='kuis' && state.wordGame.letters==='') prepareWordGame();
}
function missionTitle(index){return ['Teaser dan Petunjuk','Peta dan Profil Tokoh','Ruang Sinema dan Garis Waktu','Lab Karakter dan Refleksi'][index]||'Misi';}
function isMissionUnlocked(index){if(index===0)return true;return state.missionDone.includes(index-1);}
function screenHeader(eyebrow,title,description,action=''){
  return `<div class="page-title-row"><div><div class="eyebrow-label">${eyebrow}</div><h1>${title}</h1><p>${description}</p></div>${action}</div>`;
}
function renderDashboard(){
  const level=getLevel(); const levelProgress=Math.min(100,Math.max(0,Math.round(((state.xp-level.prev)/(level.next-level.prev))*100)));
  const menu=[
    {screen:'materi',icon:'📚',tone:'tone-red',title:'Buku Materi',desc:'Baca kisah perjuangan dan uji pemahaman di setiap bab.',status:`${state.readMaterials.length}/${DATA.materials.length} bab`,arrow:'Buka materi'},
    {screen:'aktivitas',icon:'🧩',tone:'tone-gold',title:'Aktivitas & Misi',desc:'Jelajahi peta, susun lini masa, dan tulis refleksi.',status:`${state.missionDone.length}/4 misi`,arrow:'Mulai misi'},
    {screen:'kuis',icon:'🎯',tone:'tone-blue',title:'Zona Kuis',desc:'Uji pengetahuan melalui 25 pertanyaan dan mini-game.',status:state.quizSubmitted?'Sudah dikerjakan':'25 pertanyaan',arrow:'Masuk kuis'},
    {screen:'hasil',icon:'🏆',tone:'tone-green',title:'Hasil Belajar',desc:'Lihat skor, koleksi, lencana, dan sertifikatmu.',status:state.quizSubmitted?`${state.quizResult?.score||0} nilai`:'Belum ada nilai',arrow:'Lihat hasil'},
    {screen:'petunjuk',icon:'💡',tone:'tone-gold',title:'Petunjuk',desc:'Panduan ringkas agar petualangan berjalan lancar.',status:'6 langkah',arrow:'Baca petunjuk'},
    {screen:'tentang',icon:'📜',tone:'tone-red',title:'Tentang Media',desc:'Kenali tujuan belajar dan teman perjalananmu, Garu.',status:'IPAS • Kelas VI',arrow:'Kenali media'}
  ];
  const stamps=['📍 Penjelajah Peta','⏳ Ahli Lini Masa','💚 Si Teladan','🏆 Juara Kuis'];
  return `${screenHeader('SELAMAT DATANG KEMBALI',`Halo, ${escapeHTML(state.name)}!`,'Kapsul waktu sudah menunggu. Siap menemukan jejak sejarah hari ini?')}
    <section class="hero-panel"><div class="hero-copy"><span class="tag gold">🧭 DETEKTIF WAKTU • KELAS VI</span><h1>Misi Penjaga<br><em>Warisan Nusantara</em></h1><p>Temukan kisah perjuangan, kenali pahlawan, dan bawa nilai baik mereka ke kehidupan sehari-hari.</p><div class="hero-actions"><button class="btn btn-primary" data-nav="aktivitas">Lanjutkan Petualangan <span>➜</span></button><button class="btn btn-secondary" data-nav="materi">Buka Buku Materi</button></div></div><div class="hero-illustration" aria-label="Ilustrasi peta petualangan sejarah"><div class="island"><span class="map-pin pin-one">📍</span><span class="map-pin pin-two">🏛️</span><span class="map-pin pin-three">⭐</span><span class="river"></span></div><div class="hero-mascot" aria-hidden="true">🦅</div></div></section>
    <section class="stats-grid"><div class="stat-card"><span class="stat-icon tone-red">⭐</span><div><small>Total XP</small><strong>${state.xp}</strong><span class="stat-sub">Terus kumpulkan!</span></div></div><div class="stat-card"><span class="stat-icon tone-gold">🧭</span><div><small>Level Detektif</small><strong style="font-size:1.05rem">${level.name}</strong><span class="stat-sub">Level petualangan</span></div></div><div class="stat-card"><span class="stat-icon tone-green">📚</span><div><small>Materi dipelajari</small><strong>${state.readMaterials.length}/${DATA.materials.length}</strong><span class="stat-sub">Bab yang dituntaskan</span></div></div><div class="stat-card"><span class="stat-icon tone-blue">🎯</span><div><small>Nilai kuis</small><strong>${state.quizSubmitted?state.quizResult.score:'—'}</strong><span class="stat-sub">${state.quizSubmitted?'Nilai terakhir':'Belum dikerjakan'}</span></div></div></section>
    <section class="panel progress-panel"><div class="progress-head"><strong>📈 Progres Penjaga Warisan</strong><span>${completedPercent()}% selesai</span></div><div class="progress-track" role="progressbar" aria-label="Progres belajar" aria-valuenow="${completedPercent()}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${completedPercent()}%"></div></div><div class="progress-head" style="margin:12px 0 0"><small class="muted">Level berikutnya: ${level.next} XP</small><small class="muted">${Math.max(0,level.next-state.xp)} XP lagi</small></div><div class="progress-track" style="height:6px;margin-top:5px"><div class="progress-fill" style="width:${levelProgress}%;background:var(--gold)"></div></div></section>
    <div class="section-heading"><div><h2>Pilih Petualanganmu</h2><p>Semua langkah mengantarmu menjadi Penjaga Nusantara.</p></div></div><section class="menu-grid">${menu.map(m=>`<button class="menu-card" data-nav="${m.screen}"><span class="menu-status">${m.status}</span><span class="menu-icon ${m.tone}">${m.icon}</span><h3>${m.title}</h3><p>${m.desc}</p><span class="menu-arrow">${m.arrow} →</span></button>`).join('')}</section>
    <div class="section-heading"><div><h2>Paspor Sejarah</h2><p>Kumpulkan stempel dari setiap misi yang kamu selesaikan.</p></div><button class="link-button" data-nav="hasil">Lihat koleksi →</button></div><section class="passport-row"><div class="panel passport-panel"><div class="passport-large">🛂</div><div><h3>Paspor Detektif</h3><p class="muted tiny">Pemilik: <strong>${escapeHTML(state.name)}</strong> • Kelas VI</p><div class="stamp-list">${stamps.map((s,i)=>`<span class="stamp ${state.badges.includes(['map','timeline','teladan','quiz'][i])?'earned':''}">${s}</span>`).join('')}</div></div></div><div class="panel"><h3>🎒 Pesan dari Garu</h3><p class="muted">“Sejarah bukan hanya cerita masa lalu. Kita bisa belajar keberanian dan kepedulian darinya.”</p><button class="btn btn-secondary btn-small" data-action="garu-tip">Dapatkan petunjuk</button></div></section>`;
}
function renderMaterials(){
  const index=Math.max(0,Math.min(DATA.materials.length-1,state.materialIndex)); const m=DATA.materials[index];
  return `${screenHeader('PERPUSTAKAAN DETEKTIF','Buku Materi','Pelajari setiap bab. Jawab pertanyaan di akhir kartu untuk mendapat XP.')}
    <div class="material-layout"><aside class="panel toc-panel"><h3>Daftar Isi</h3>${DATA.materials.map((item,i)=>`<button class="toc-item ${i===index?'active':''}" data-action="select-material" data-index="${i}"><span>${state.readMaterials.includes(item.id)?'✓':String(i+1).padStart(2,'0')}</span>${item.title}</button>`).join('')}<div style="border-top:1px solid var(--line);margin:13px 0"></div><strong class="tiny">Kata Baru</strong><div class="key-terms">${Object.keys(DATA.glossaries).slice(0,5).map(term=>`<button class="term-chip" data-action="glossary" data-term="${escapeHTML(term)}">${term}</button>`).join('')}</div></aside>
    <article class="material-card"><div class="material-banner"><div><span class="chapter-number">BAB ${String(index+1).padStart(2,'0')} • ${state.readMaterials.includes(m.id)?'SUDAH DIPELAJARI':'SEDANG DIPELAJARI'}</span><h2>${m.title}</h2><p>${m.short}</p></div><div class="chapter-illustration" aria-hidden="true">${m.icon}</div></div><div class="material-body"><div class="prompt-box"><strong>❓ Pertanyaan Pemantik</strong><p>${m.prompt}</p></div><div class="material-copy"><p>${m.explanation}</p></div><div class="fact-box"><strong>🔎 Tahukah Kamu?</strong>${m.fact}</div><div class="everyday-box"><strong>🌱 Contoh dalam Kehidupan Sehari-hari</strong>${m.everyday}</div><div class="check-box"><h3>✅ Cek Pemahaman</h3><p>${m.question}</p><div class="check-options">${m.options.map((o,i)=>`<label class="choice-label"><input type="radio" name="materialCheck" value="${i}"><span>${o}</span></label>`).join('')}</div><p id="materialFeedback" class="feedback-line" aria-live="polite"></p><div class="material-controls"><button class="btn btn-secondary" data-action="speak-material">🔊 Dengarkan</button><div><button class="btn btn-secondary" data-action="prev-material" ${index===0?'disabled':''}>← Sebelumnya</button><button class="btn btn-primary" data-action="check-material" data-id="${m.id}">Periksa Jawaban</button><button class="btn btn-secondary" data-action="next-material" ${index===DATA.materials.length-1?'disabled':''}>Berikutnya →</button></div></div><div style="margin-top:18px"><strong class="tiny">Kata Baru pada bab ini</strong><div class="key-terms">${m.terms.map(term=>`<button class="term-chip" data-action="glossary" data-term="${escapeHTML(term)}">${term}</button>`).join('')}</div></div></div></div></article></div>`;
}
function renderActivities(){
  const idx=state.missionIndex; const titles=['Teaser & Petunjuk','Peta & Profil Tokoh','Sinema & Garis Waktu','Lab Karakter'];
  const states=Array.from({length:4},(_,i)=>({i,done:state.missionDone.includes(i),unlocked:isMissionUnlocked(i)}));
  let workspace='';
  if(idx===0) workspace=renderMissionOne();
  else if(idx===1) workspace=renderMissionTwo();
  else if(idx===2) workspace=renderMissionThree();
  else workspace=renderMissionFour();
  return `${screenHeader('RUANG MISI','Aktivitas Belajar','Satu misi membuka jalan menuju misi berikutnya. Coba, periksa, lalu lanjutkan.')}
    <div class="mission-tabs">${states.map(s=>`<button class="mission-tab ${idx===s.i?'active':''} ${s.done?'done':''}" data-action="select-mission" data-index="${s.i}" ${s.unlocked?'':'disabled'}><span class="mission-index">${s.done?'✓':s.unlocked?s.i+1:'🔒'}</span><span><strong>Misi ${s.i+1}</strong><small>${titles[s.i]}</small></span></button>`).join('')}</div>
    <section class="panel mission-workspace">${workspace}</section>
    <div class="section-heading"><div><h2>🎁 Bonus: Mading Digital & Ruang Karya</h2><p>Buat karya sejarah dari perangkatmu. Berkas disimpan secara lokal di browser.</p></div></div>${renderProjectPanel()}`;
}
function renderMissionOne(){
  const done=state.missionDone.includes(0);
  return `<div class="mission-hero"><div><span class="tag red">MISI 1 • PEMANASAN</span><h2>Mulai dari Cerita di Sekitarmu</h2><p>Sejarah juga ada di sekitar rumah dan sekolahmu. Simak video pengantar, lalu pikirkan peninggalan yang pernah kamu lihat.</p><div class="callout"><strong>🎯 Target Misi</strong><p>${DATA.objectives[0]} Cari tahu mengapa tempat bersejarah perlu dijaga.</p></div><p class="muted tiny" style="margin-top:14px">Video pembelajaran: pentingnya sejarah lokal.</p><a class="btn btn-secondary btn-small" href="${DATA.config.videoUrl}" target="_blank" rel="noopener">Buka video di YouTube ↗</a><button class="btn btn-primary" data-action="complete-mission" data-index="0" style="margin-top:16px">${done?'Misi selesai ✓':'Saya siap menjelajah →'}</button></div><div><iframe class="video-frame" src="${DATA.config.videoEmbedUrl}" title="Video tentang pentingnya sejarah lokal" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p class="tiny muted" style="margin:8px 2px 0">Jika video tidak tampil, gunakan tombol buka video di YouTube.</p></div></div>`;
}
function renderMissionTwo(){
  const selectedHero=DATA.heroes.find(h=>h.id===state.selectedMapHero);
  return `<span class="tag gold">MISI 2 • JELAJAH PETA</span><h2 style="margin:12px 0 6px">Temukan Jejak Pahlawan</h2><p class="muted">Pilih penanda di peta. Baca profil singkat dan jawab tantangan kecilnya.</p><div class="map-layout"><div id="historyMap" class="map-holder" role="application" aria-label="Peta interaktif lokasi tokoh sejarah"></div><div class="map-sidebar"><div class="panel"><h3>📍 Kartu Profil Tokoh</h3><div id="heroDetailPanel">${selectedHero?heroProfileHTML(selectedHero):'<p class="map-detail">Pilih penanda pada peta untuk membuka profil pahlawan.</p><div class="profile-mini-challenge">Tantangan: Mengapa kita perlu mengenal sejarah daerah?</div>'}</div><button class="btn btn-primary btn-block btn-small" data-action="complete-mission" data-index="1">${state.missionDone.includes(1)?'Misi selesai ✓':'Selesaikan Jelajah Peta'}</button></div><div class="panel"><h3>🔎 Cari Pahlawan Daerahmu</h3><label for="provinceSelect">Pilih provinsi</label><select class="form-control" id="provinceSelect"><option value="">Pilih provinsi …</option>${DATA.provinces.map(p=>`<option ${state.province===p?'selected':''} value="${escapeHTML(p)}">${p}</option>`).join('')}</select><div id="provinceResult">${state.province?provinceResultHTML(state.province):'<p class="map-detail" style="margin-top:10px">Pilih provinsi untuk mencari nama tokoh pada materi ini.</p>'}</div></div></div></div><p class="tiny muted" style="margin-top:14px">Peta menggunakan OpenStreetMap. Lokasi penanda menunjukkan wilayah terkait perjuangan, bukan selalu lokasi monumen tertentu.</p>`;
}
function heroProfileHTML(h){return `<div class="hero-profile"><!-- GANTI GAMBAR DI SINI: gunakan data-img untuk URL foto dan cantumkan kredit sumber bila memakai foto. --><div class="hero-portrait" data-img="" data-credit="">${h.icon}</div><div><h3>${h.name}</h3><p>📍 ${h.region}</p><p>🗓️ Tahun hidup: ${h.life}</p><p>Masa perjuangan: ${h.period}</p><p>Peran: ${h.role}</p></div></div><div class="profile-mini-challenge"><strong>💭 Tantangan mini</strong><br>${h.challenge}</div><button class="btn btn-secondary btn-small" style="margin-top:10px" data-action="collect-hero" data-id="${h.id}">${state.collectedHeroes.includes(h.id)?'✓ Kartu terkumpul':'＋ Kumpulkan kartu pahlawan'}</button>`;}
function provinceResultHTML(province){
  const id=DATA.localHeroByProvince[province]; const h=DATA.heroes.find(x=>x.id===id);
  if(h)return `<div class="province-result"><strong>✨ Pahlawan pada materi:</strong><br>${h.name}<br><small>${h.region} • ${h.period}</small><p style="margin:8px 0 0">Pelajari kisahnya, lalu tanyakan pada keluarga atau guru tentang situs sejarah di sekitar tempat tinggalmu.</p></div>`;
  return `<div class="province-result"><strong>📝 Ayo telusuri lebih lanjut!</strong><p style="margin:6px 0">Nama tokoh dari ${escapeHTML(province)} belum ada pada daftar ringkas media ini. Tanyakan kepada guru atau keluarga dan periksa sumber tepercaya.</p><label for="localHeroNote" style="display:block;font-size:.8rem;font-weight:900;margin:8px 0 4px">Catat nama tokoh yang kamu temukan</label><input class="form-control" id="localHeroNote" maxlength="90" placeholder="Nama pahlawan daerah…" value="${escapeHTML(state.localHeroNote)}"><button class="btn btn-secondary btn-small" data-action="save-local-hero" style="margin-top:8px">Simpan catatan</button></div>`;
}
function renderMissionThree(){
  const eIndex=Number(state.timelineIndex||0); const event=DATA.events[Math.max(0,Math.min(DATA.events.length-1,eIndex))];
  const timelineOrder=state.timelineOrder&&state.timelineOrder.length?state.timelineOrder:shuffle(DATA.events.slice(0,5).map(x=>x.year));
  state.timelineOrder=timelineOrder;
  const orderEvents=timelineOrder.map(y=>DATA.events.find(e=>e.year===y)).filter(Boolean);
  return `<span class="tag blue">MISI 3 • RUANG SINEMA</span><h2 style="margin:12px 0 6px">Susun Jejak Waktu</h2><p class="muted">Lihat komik ringkas, geser penunjuk tahun, lalu urutkan peristiwa.</p><div class="comic-grid"><div class="comic-panel"><span class="comic-icon">⛵</span><small>PANEL 1</small><strong>Jalur Rempah</strong><p>Bangsa Eropa datang untuk berdagang dan mencari rempah.</p></div><div class="comic-panel"><span class="comic-icon">🛡️</span><small>PANEL 2</small><strong>Rakyat Melawan</strong><p>Kebijakan yang merugikan memicu perlawanan di berbagai daerah.</p></div><div class="comic-panel"><span class="comic-icon">🤝</span><small>PANEL 3</small><strong>Semangat Bersatu</strong><p>Organisasi dan persatuan ikut menguatkan perjuangan.</p></div><div class="comic-panel"><span class="comic-icon">🇮🇩</span><small>PANEL 4</small><strong>Kemerdekaan</strong><p>Proklamasi dibacakan pada 17 Agustus 1945.</p></div></div><div class="timeline-box"><div class="progress-head"><strong>🕰️ Geser Lini Masa</strong><span>${eIndex+1} dari ${DATA.events.length}</span></div><input id="timelineSlider" type="range" min="0" max="${DATA.events.length-1}" value="${eIndex}" step="1" aria-label="Pilih peristiwa pada lini masa"><div class="timeline-event"><div class="year">${event.year}</div><h3>${event.title}</h3><p>${event.text}</p><div class="callout"><strong>Mengapa penting?</strong><p>${event.why}</p></div></div></div><div class="panel" style="padding:18px"><div class="progress-head"><div><h3 style="margin-bottom:3px">🧩 Tantangan: Urutkan Peristiwa</h3><p class="muted tiny" style="margin:0">Gunakan tombol naik/turun atau seret kartu. Urutkan dari tahun paling awal.</p></div><button class="btn btn-secondary btn-small" data-action="reshuffle-timeline">Acak ulang</button></div><div id="sortList" class="sort-list">${orderEvents.map((e,i)=>`<div class="sort-item" draggable="true" data-sort-year="${e.year}"><span class="drag-grip" aria-hidden="true">⠿</span><span><strong>${e.title}</strong><br><small class="muted">Petunjuk: ${e.text}</small></span><div style="margin-left:auto;display:flex;gap:4px"><button class="icon-button" style="height:32px;min-width:32px" data-action="sort-up" data-year="${e.year}" aria-label="Naikkan ${e.title}" ${i===0?'disabled':''}>↑</button><button class="icon-button" style="height:32px;min-width:32px" data-action="sort-down" data-year="${e.year}" aria-label="Turunkan ${e.title}" ${i===orderEvents.length-1?'disabled':''}>↓</button></div></div>`).join('')}</div><p id="sortFeedback" class="feedback-line" aria-live="polite"></p><div style="display:flex;gap:9px;flex-wrap:wrap"><button class="btn btn-primary" data-action="check-timeline-order">Periksa Urutan</button><button class="btn btn-secondary" data-action="complete-mission" data-index="2">${state.missionDone.includes(2)?'Misi selesai ✓':'Tandai misi selesai'}</button></div></div>`;
}
function renderMissionFour(){
  const wordCount=(state.journal||'').trim().split(/\s+/).filter(Boolean).length;
  const options=[['Bantu teman memahami tugas','Mendukung teman merupakan tindakan peduli.'],['Menolak menyontek dengan sopan','Menjaga kejujuran tetap penting meski ada tekanan.'],['Mengajak kelas merawat situs sejarah','Kerja bersama menunjukkan cinta tanah air.']];
  return `<span class="tag green">MISI 4 • LAB KARAKTER</span><h2 style="margin:12px 0 6px">Bawa Nilai Pahlawan ke Hari Ini</h2><p class="muted">Pilih tindakan yang tepat, cocokkan nilai, lalu tulis refleksimu.</p><div class="grid-two"><div class="panel"><h3>🎭 Studi Kasus: Dilema Detektif</h3><p>Kelompokmu mendapat tugas tentang situs sejarah. Seorang teman ingin menyalin tulisan internet tanpa memeriksa sumber. Apa yang kamu lakukan?</p><div class="case-options">${options.map((o,i)=>`<button class="case-option ${state.caseChoice===String(i)?'selected':''}" data-action="case-choice" data-choice="${i}"><span>${['A','B','C'][i]}.</span><span><strong>${o[0]}</strong><small>${o[1]}</small></span></button>`).join('')}</div><p id="caseFeedback" class="feedback-line" aria-live="polite">${state.caseChoice!==''?caseFeedbackText(state.caseChoice):''}</p></div><div class="panel"><h3>🧩 Jodohkan Nilai dan Perilaku</h3><p class="muted tiny">Pilih nilai yang paling cocok dengan contoh.</p><div class="match-grid">${DATA.values.slice(0,4).map((v,i)=>`<div class="match-item"><label for="match-${v.id}">${v.example}</label><select id="match-${v.id}" data-value-match="${v.id}"><option value="">Pilih nilai…</option>${DATA.values.map(val=>`<option value="${val.id}" ${state.valueMatches[v.id]===val.id?'selected':''}>${val.label}</option>`).join('')}</select></div>`).join('')}</div><button class="btn btn-secondary btn-small" data-action="check-values" style="margin-top:12px">Periksa pasangan</button><p id="valueFeedback" class="feedback-line" aria-live="polite"></p></div></div><div class="panel" style="margin-top:17px"><div class="progress-head"><div><h3 style="margin-bottom:4px">📓 Jurnal Refleksi</h3><p class="muted tiny" style="margin:0">Tuliskan nilai pahlawan yang ingin kamu praktikkan.</p></div><span id="wordCount">${wordCount} kata</span></div><textarea id="journalText" class="reflection-text" maxlength="1000" placeholder="Contoh: Saya ingin meneladani sikap pantang menyerah dengan…">${escapeHTML(state.journal)}</textarea><div class="word-bank"><span class="tiny muted" style="align-self:center;font-weight:900">Bank kata bantu:</span>${['berani','jujur','peduli','gotong royong','pantang menyerah','cinta tanah air'].map(w=>`<button type="button" data-action="insert-word" data-word="${w}">${w}</button>`).join('')}</div><div class="material-controls"><span class="muted tiny">Jurnal tersimpan di browser perangkat ini.</span><div><button class="btn btn-secondary" data-action="save-journal">Simpan jurnal</button><button class="btn btn-primary" data-action="finish-reflection">Selesaikan Misi 4 →</button></div></div><p id="journalFeedback" class="feedback-line" aria-live="polite"></p></div>`;
}
function renderProjectPanel(){
  const p=state.project;
  return `<section class="panel"><div class="grid-two"><div><h3>🖼️ Buat Mading Digital</h3><p class="muted">Unggah poster, gambar, atau rekaman cerita. Simpan karya untuk dikirim saat internet tersedia.</p><div class="upload-zone"><div class="upload-icon">📂</div><strong>Pilih gambar atau audio</strong><p class="tiny muted">Batas ukuran ${Math.round(DATA.config.maxUploadBytes/1000000*10)/10} MB per berkas.</p><input id="projectFile" type="file" accept="image/*,audio/*" class="form-control" style="margin-top:9px"><label for="projectName" style="display:block;text-align:left;font-size:.8rem;font-weight:900;margin:12px 0 5px">Judul karya</label><input id="projectName" class="form-control" maxlength="80" placeholder="Contoh: Pahlawan dari Daerahku" value="${escapeHTML(p.name)}"></div><div id="projectPreview" class="upload-preview">${p.dataUrl?(p.mime.startsWith('image/')?`<img src="${p.dataUrl}" alt="Pratinjau karya tersimpan">`:p.mime.startsWith('audio/')?`<audio controls src="${p.dataUrl}"></audio>`:`<span class="tag">Berkas tersimpan</span>`):''}</div><div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-secondary btn-small" data-action="save-project">Simpan karya</button><button class="btn btn-secondary btn-small" data-action="download-project" ${p.dataUrl?'':'disabled'}>Unduh karya</button><button class="btn btn-primary btn-small" data-action="send-teacher">Kirim ke Guru ↗</button></div><p class="tiny muted" style="margin-top:10px">Catatan: GitHub Pages tidak menyediakan server untuk menerima berkas. Karya tetap berada di browser hingga diunduh atau dikirim melalui layanan eksternal.</p></div><div><h3>💭 Ayo Berpikir</h3><p>Menurutmu, mengapa generasi muda perlu menjaga situs dan cerita sejarah di daerahnya? Berikan alasan dan satu contoh tindakan.</p><textarea id="projectReason" class="reflection-text" style="min-height:125px" placeholder="Tuliskan alasanmu…">${escapeHTML(p.reason||'')}</textarea><button class="btn btn-secondary btn-small" data-action="save-project-reason" style="margin-top:9px">Simpan jawaban</button><div class="callout" style="margin-top:17px"><strong>Tips berkarya</strong><p>Gunakan informasi terverifikasi. Cantumkan sumber dan hormati hak cipta gambar atau audio.</p></div></div></div></section>`;
}
function renderQuiz(){
  const isSubmitted=state.quizSubmitted;
  if(isSubmitted)return renderQuizSummary();
  if(!state.quizOrder.length) prepareQuiz();
  const qid=state.quizOrder[state.quizIndex]||state.quizOrder[0]; const q=DATA.quiz.find(x=>x.id===qid)||DATA.quiz[0];
  const opts=state.quizOptionOrder[q.id]||q.opts.map((_,i)=>i);
  const selected=state.quizAnswers[q.id]; const answered=Object.keys(state.quizAnswers).length;
  return `${screenHeader('UJI PEMAHAMAN','Zona Kuis','Jawab seluruh soal. Nilai akan muncul setelah semua pertanyaan terisi.',`<span class="tag gold">25 SOAL</span>`)}
    <div class="quiz-progress"><strong>Progres Kuis</strong><div class="progress-track"><div class="progress-fill" style="width:${answered/ DATA.quiz.length*100}%"></div></div><span class="muted tiny">${answered}/${DATA.quiz.length} terjawab</span></div>
    <section class="panel quiz-card"><div class="quiz-question"><span class="question-number">PERTANYAAN ${state.quizIndex+1} DARI ${DATA.quiz.length} • ${q.level}</span><h2>${q.q}</h2><div class="quiz-options">${opts.map((optionIndex,i)=>`<button class="quiz-option ${selected===optionIndex?'selected':''}" data-action="answer-quiz" data-qid="${q.id}" data-answer="${optionIndex}"><span class="option-letter">${q.type==='tf'?['✓','×'][i]:['A','B','C','D'][i]}</span><span>${q.opts[optionIndex]}</span></button>`).join('')}</div></div><div class="quiz-footer"><button class="btn btn-secondary" data-action="prev-question" ${state.quizIndex===0?'disabled':''}>← Sebelumnya</button><span>Pilih satu jawaban terbaik.</span>${state.quizIndex===DATA.quiz.length-1?'<button class="btn btn-primary" data-action="submit-quiz">Kumpulkan Jawaban</button>':'<button class="btn btn-primary" data-action="next-question">Berikutnya →</button>'}</div></section>
    <div class="panel" style="margin-top:15px"><div class="progress-head"><strong>Nomor Pertanyaan</strong><span>Hijau = sudah dijawab</span></div><div class="quiz-overview">${state.quizOrder.map((id,i)=>`<button class="question-dot ${state.quizAnswers[id]!==undefined?'answered':''} ${i===state.quizIndex?'current':''}" data-action="goto-question" data-index="${i}" aria-label="Pertanyaan ${i+1}">${i+1}</button>`).join('')}</div><p class="tiny muted" style="margin:12px 0 0">Jawaban tersimpan pada perangkat ini. Nilai belum ditampilkan sebelum semua soal terjawab.</p></div>
    <div class="section-heading"><div><h2>🎮 Mini-game Bonus XP</h2><p>Mini-game menambah XP. Nilainya tidak memengaruhi skor kuis.</p></div></div>${renderMiniGames()}`;
}
function renderQuizSummary(){
  const r=state.quizResult||computeQuizResult(); const review=state.quizReviewOpen;
  return `${screenHeader('KUIS SELESAI','Misi Kuis Dituntaskan!','Lihat hasilmu, pelajari pembahasan, lalu coba lagi untuk berlatih.')}
    <div class="quiz-result-hero"><div class="score-ring"><div><strong>${r.score}</strong><span>dari 100</span></div></div><h2>${r.score>=85?'Hebat Sekali!':r.score>=75?'Bagus!':'Ayo Belajar Lagi!'}</h2><p>${r.score>=85?'Pengetahuan sejarahmu kuat. Terus jaga rasa ingin tahu!':r.score>=75?'Kamu sudah memahami banyak hal. Baca pembahasan untuk memperkuatnya.':'Tidak apa-apa, Detektif. Pelajari kembali materi, lalu coba lagi.'}</p><span class="tag ${r.score>=75?'green':'red'}">${r.score>=75?'Tuntas':'Belum Tuntas'} • ${r.score>=75?'Nilai mencapai 75':'Target nilai minimal 75'}</span></div>
    <div class="result-stat-grid"><div class="result-stat"><strong>${r.correct}</strong><span>Jawaban benar</span></div><div class="result-stat"><strong>${r.wrong}</strong><span>Jawaban salah</span></div><div class="result-stat"><strong>${r.percent}%</strong><span>Persentase</span></div><div class="result-stat"><strong>${state.xp}</strong><span>Total XP</span></div></div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:16px 0"><button class="btn btn-primary" data-action="toggle-review">${review?'Sembunyikan Pembahasan':'Lihat Pembahasan'}</button><button class="btn btn-secondary" data-action="retry-quiz">Ulangi Kuis</button><button class="btn btn-secondary" data-nav="dashboard">Kembali ke Dashboard</button></div>${review?renderQuizReview():''}<div class="section-heading"><div><h2>🎮 Mini-game Bonus XP</h2><p>Terus berlatih tanpa mengubah skor kuis.</p></div></div>${renderMiniGames()}`;
}
function renderQuizReview(){
  const r=state.quizResult||computeQuizResult();
  return `<section class="panel"><h3>📖 Pembahasan Setiap Soal</h3>${r.details.map((d,i)=>`<article class="review-row ${d.correct?'correct':'incorrect'}"><span class="tag ${d.correct?'green':'red'}">Soal ${i+1} • ${d.correct?'Benar':'Perlu dipelajari'}</span><h4>${d.question}</h4><p><strong>Jawabanmu:</strong> ${d.userAnswer===null?'Tidak terjawab':escapeHTML(d.userAnswer)}</p><p><strong>Jawaban benar:</strong> ${escapeHTML(d.correctAnswer)}</p><p><strong>Alasan:</strong> ${escapeHTML(d.why)}</p></article>`).join('')}</section>`;
}
function renderMiniGames(){
  const word=state.wordGame; const letters=(word.letters||'').split('').join(' ');
  return `<div class="grid-two"><section class="panel"><span class="tag gold">GAME 1</span><h3 style="margin-top:10px">🔤 Susun Kata Misteri</h3><p class="muted tiny">Susun huruf acak menjadi nama tokoh perjuangan.</p><div class="callout" style="text-align:center;font-family:'Fredoka';font-size:1.5rem;letter-spacing:.15em;margin:12px 0">${letters||'—'}</div><label for="wordAnswer" class="tiny" style="font-weight:900">Jawabanmu</label><input id="wordAnswer" class="form-control" placeholder="Ketik nama tokoh" value="${escapeHTML(word.answer)}" ${word.solved?'disabled':''}><button class="btn btn-primary btn-small" data-action="check-word-game" style="margin-top:10px" ${word.solved?'disabled':''}>Periksa Kata</button><p id="wordFeedback" class="feedback-line" aria-live="polite">${word.solved?'Benar! Kamu mendapat bonus XP.':''}</p></section><section class="panel"><span class="tag blue">GAME 2</span><h3 style="margin-top:10px">🧭 Jodohkan Pahlawan–Daerah</h3><p class="muted tiny">Pilih wilayah yang cocok dengan setiap tokoh.</p><div class="match-grid">${DATA.miniHeroes.map((item,i)=>`<div class="match-item"><label for="hero-match-${i}">${item.hero}</label><select id="hero-match-${i}" data-mini-match="${i}" ${state.matchGame.checked?'disabled':''}><option value="">Pilih wilayah…</option>${shuffle(['Makassar','Maluku','Sumatra Barat','Jawa','Kalimantan Selatan','Aceh','Tapanuli']).map(place=>`<option value="${place}" ${state.matchGame.answers[i]===place?'selected':''}>${place}</option>`).join('')}</select></div>`).join('')}</div><button class="btn btn-primary btn-small" data-action="check-match-game" style="margin-top:11px" ${state.matchGame.checked?'disabled':''}>Periksa Pasangan</button><p class="feedback-line" id="matchGameFeedback" aria-live="polite">${state.matchGame.checked?'Mini-game sudah diperiksa.':''}</p></section></div>`;
}
function renderResults(){
  const r=state.quizResult; const earned=badgeData();
  return `${screenHeader('RAPOR PETUALANGAN','Hasil Belajar','Pantau pencapaianmu dan ambil pelajaran dari setiap tantangan.')}
    <section class="grid-main-side"><div class="panel"><h2 style="margin-bottom:6px">Paspor Sejarah</h2><p class="muted">${escapeHTML(state.name)} • Kelas VI • ${getLevel().name}</p><div class="result-stat-grid"><div class="result-stat"><strong>${r?r.score:'—'}</strong><span>Nilai terakhir</span></div><div class="result-stat"><strong>${r?r.correct:'—'}</strong><span>Jawaban benar</span></div><div class="result-stat"><strong>${r?r.wrong:'—'}</strong><span>Jawaban salah</span></div><div class="result-stat"><strong>${r?r.percent+'%':'—'}</strong><span>Persentase</span></div></div>${r?`<div class="callout ${r.score>=75?'soft-green':'soft-red'}"><strong>${r.score>=75?'✅ Tuntas':'📚 Belum tuntas'}</strong><p>${r.score>=75?'Nilaimu mencapai batas ketuntasan 75. Pertahankan semangat belajar.':'Nilai masih di bawah 75. Pelajari pembahasan dan coba kembali.'}</p></div>`:`<div class="empty-state"><div class="empty-icon">🎯</div><h3>Kuis belum dikerjakan</h3><p>Kerjakan semua pertanyaan untuk melihat nilai dan status ketuntasan.</p><button class="btn btn-primary" data-nav="kuis">Mulai Kuis</button></div>`}<div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-primary" data-action="certificate">⬇ Unduh Sertifikat</button><button class="btn btn-secondary" data-action="print-results">Cetak halaman hasil</button><button class="btn btn-secondary" data-nav="kuis">${r?'Ulangi kuis':'Masuk kuis'}</button></div><p class="tiny muted" style="margin-top:10px">Sertifikat berupa file HTML yang bisa dibuka dan dicetak dari browser.</p></div><div class="panel"><h3>📚 Kartu Pahlawan Terkumpul</h3><p class="muted tiny">Pilih penanda pada peta untuk mengumpulkan kartu tokoh.</p>${state.collectedHeroes.length?`<div class="stamp-list">${state.collectedHeroes.map(id=>{const h=DATA.heroes.find(x=>x.id===id);return h?`<span class="stamp earned">${h.icon} ${h.name}</span>`:''}).join('')}</div>`:`<div class="empty-state"><div class="empty-icon">🃏</div><p>Belum ada kartu. Jelajahi peta pada Misi 2.</p><button class="btn btn-secondary btn-small" data-nav="aktivitas">Jelajahi peta</button></div>`}<hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><h3>🛂 Stempel Paspor</h3><div class="stamp-list">${['map','timeline','teladan','quiz'].map(id=>{const b=earned.find(x=>x.id===id);return `<span class="stamp ${state.badges.includes(id)?'earned':''}">${state.badges.includes(id)?b.icon:'🔒'} ${b.name}</span>`}).join('')}</div></div></section>
    <div class="section-heading"><div><h2>Lencana Petualangan</h2><p>Setiap lencana menandai usaha dan keterampilan yang kamu kembangkan.</p></div></div><section class="badges-grid">${earned.map(b=>`<div class="badge-card ${state.badges.includes(b.id)?'earned':''}"><div class="badge-icon">${b.icon}</div><strong>${b.name}</strong><p>${b.desc}</p><span class="tag ${state.badges.includes(b.id)?'green':''}" style="margin-top:9px">${state.badges.includes(b.id)?'Didapat':'Belum didapat'}</span></div>`).join('')}</section>
    <div class="section-heading"><div><h2>Jejak Progres</h2><p>Alur belajar: Pelajari → Lakukan Aktivitas → Terima Umpan Balik → Kuis → Hasil.</p></div></div><section class="panel"><div class="progress-head"><strong>Progres keseluruhan</strong><span>${completedPercent()}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${completedPercent()}%"></div></div><div class="stamp-list" style="margin-top:14px"><span class="stamp ${state.readMaterials.length?'earned':''}">📚 Materi ${state.readMaterials.length}/${DATA.materials.length}</span><span class="stamp ${state.missionDone.length?'earned':''}">🧩 Misi ${state.missionDone.length}/4</span><span class="stamp ${state.quizSubmitted?'earned':''}">🎯 Kuis ${state.quizSubmitted?'selesai':'belum'}</span></div></section>`;
}
function renderGuide(){
  const steps=[['Isi nama','Tulis nama detektif di halaman pembuka. Kelas otomatis tercatat sebagai VI.','✍️'],['Buka dashboard','Kenali tujuan belajar, level, XP, dan Paspor Sejarah.','🏕️'],['Pelajari materi','Buka setiap bab. Dengarkan narasi dan jawab cek pemahaman.','📚'],['Kerjakan aktivitas','Selesaikan empat misi secara berurutan. Baca setiap umpan balik.','🧩'],['Ikuti kuis','Jawab semua 25 soal. Nilai muncul setelah seluruh jawaban terisi.','🎯'],['Lihat hasil','Periksa skor, lencana, kartu pahlawan, dan unduh sertifikat.','🏆']];
  return `${screenHeader('PANDUAN DETEKTIF','Petunjuk Penggunaan','Ikuti enam langkah sederhana. Progresmu tersimpan di browser perangkat ini.')}
    <section class="guide-list">${steps.map((s,i)=>`<article class="guide-step"><div class="guide-num">${s[2]}</div><div><h3>${i+1}. ${s[0]}</h3><p>${s[1]}</p></div></article>`).join('')}</section><section class="panel" style="margin-top:18px"><h3>🔎 Catatan Penting</h3><p>Gunakan tombol huruf A− dan A+ untuk mengatur ukuran teks. Tombol Garu mengatur pesan pemandu. Koneksi internet diperlukan untuk peta, font, dan video.</p><p>Data belajar disimpan di localStorage browser. Jangan menghapus data situs sebelum mengunduh karya yang diperlukan.</p><button class="btn btn-primary" data-nav="materi">Mulai dari Buku Materi →</button></section>`;
}
function renderAbout(){
  return `${screenHeader('TENTANG MEDIA','Petualangan Belajar Sejarah','Kenali tujuan, cakupan, dan teman perjalanan belajar kita.')}
    <section class="about-hero"><div class="about-emblem">🧭🦅</div><div><span class="tag red">MEDIA INTERAKTIF IPAS</span><h2>Misi Penjaga Warisan Nusantara</h2><p>Petualangan digital yang mengajak siswa kelas VI mengenali perjuangan pahlawan dan menjaga nilai keteladanan.</p></div></section><section class="panel"><h3>Informasi Media</h3><div class="definition-list"><div>Nama media</div><div>${DATA.config.title}</div><div>Mata pelajaran</div><div>${DATA.config.subject}</div><div>Sasaran</div><div>Siswa kelas VI SD/MI, usia 11–12 tahun</div><div>Capaian</div><div>Peserta didik dapat meninjau sejarah perjuangan para pahlawan di lingkungan sekitar tempat tinggalnya.</div><div>Pengembang</div><div>${escapeHTML(DATA.config.developerName)}</div><div>Teknologi</div><div>HTML, CSS, JavaScript, Leaflet, OpenStreetMap, dan Web Speech API.</div></div></section><section class="panel" style="margin-top:16px"><h3>🎯 Tujuan Pembelajaran</h3><ol>${DATA.objectives.map(o=>`<li style="margin-bottom:9px">${o}</li>`).join('')}</ol></section><section class="panel" style="margin-top:16px"><div class="hero-profile"><div class="hero-portrait">🦅</div><div><h3>Kenalan dengan Garu</h3><p>Garu adalah anak burung Garuda berkacamata dengan selempang merah putih. Ia memberikan petunjuk dan semangat saat kamu belajar.</p><p class="muted tiny">Kiat Garu: bertanya, memeriksa fakta, dan menghormati orang lain adalah kebiasaan Detektif Waktu.</p><button class="btn btn-secondary btn-small" data-action="garu-tip">Dengarkan pesan Garu</button></div></div></section>`;
}
function refreshGlossaryButtons(){/* Tombol istilah ditangani melalui event delegation. */}
function openGlossary(term){
  const text=DATA.glossaries[term]||'Istilah ini belum memiliki penjelasan pada daftar Kata Baru.';
  $('#modalRoot').innerHTML=`<div class="glossary-modal" role="dialog" aria-modal="true" aria-labelledby="glossaryTitle"><div class="modal-card"><button class="modal-close" data-action="close-modal" aria-label="Tutup">×</button><span class="tag gold">KATA BARU</span><h2 id="glossaryTitle" style="margin:12px 0 8px">${escapeHTML(term)}</h2><p>${escapeHTML(text)}</p><button class="btn btn-primary btn-small" data-action="speak-text" data-text="${escapeHTML(term+'. '+text)}">🔊 Dengarkan</button></div></div>`;
}
function speak(text){
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){toast('Fitur suara tidak didukung browser ini.','warn');return;}
  try{window.speechSynthesis.cancel();const utter=new SpeechSynthesisUtterance(text);utter.lang='id-ID';utter.rate=.92;window.speechSynthesis.speak(utter);}catch(err){toast('Narasi suara belum dapat diputar.','warn');}
}
function prepareQuiz(){
  state.quizOrder=shuffle(DATA.quiz.map(q=>q.id));
  state.quizOptionOrder={};
  DATA.quiz.forEach(q=>{state.quizOptionOrder[q.id]=shuffle(q.opts.map((_,i)=>i));});
  state.quizAnswers={};state.quizIndex=0;state.quizSubmitted=false;state.quizResult=null;state.quizReviewOpen=false;persist();
}
function computeQuizResult(){
  let correct=0; const details=[];
  (state.quizOrder.length?state.quizOrder:DATA.quiz.map(q=>q.id)).forEach(id=>{
    const q=DATA.quiz.find(x=>x.id===id);if(!q)return;
    const userIndex=state.quizAnswers[q.id];const ok=userIndex===q.a;if(ok)correct++;
    details.push({question:q.q,correct:ok,userAnswer:userIndex===undefined?null:q.opts[userIndex],correctAnswer:q.opts[q.a],why:q.why});
  });
  const total=details.length; const score=Math.round(correct/total*100);
  return {score,correct,wrong:total-correct,percent:Math.round(correct/total*100),details,completedAt:new Date().toISOString()};
}
function startQuiz(){
  if(state.quizSubmitted){state.quizSubmitted=false;state.quizResult=null;}
  if(!state.quizOrder.length)prepareQuiz();
  navigate('kuis');
}
function initMap(){
  const holder=$('#historyMap'); if(!holder)return;
  if(!window.L){holder.innerHTML='<div class="empty-state"><div class="empty-icon">🗺️</div><h3>Peta belum tersedia</h3><p>Periksa koneksi internet, lalu buka kembali Misi 2.</p></div>';return;}
  try{
    mapInstance=L.map(holder,{scrollWheelZoom:false}).setView([-2.3,118.0],4.2);
    L.tileLayer(DATA.config.mapTiles,{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',maxZoom:18}).addTo(mapInstance);
    DATA.heroes.forEach(h=>{
      const marker=L.marker([h.lat,h.lng]).addTo(mapInstance);
      marker.bindPopup(`<strong>${escapeHTML(h.name)}</strong><br>${escapeHTML(h.region)}<br><button class="map-popup-button" onclick="window.selectMapHero('${h.id}')">Lihat profil</button>`);
      marker.on('click',()=>{state.selectedMapHero=h.id;}); currentMarkers.push(marker);
    });
    setTimeout(()=>mapInstance&&mapInstance.invalidateSize(),150);
  }catch(err){console.error(err);holder.innerHTML='<p class="muted" style="padding:18px">Peta tidak dapat dimuat. Gunakan kartu tokoh pada materi sementara ini.</p>';}
}
window.selectMapHero = function(id){
  const h=DATA.heroes.find(x=>x.id===id);if(!h)return;
  state.selectedMapHero=id;persist();
  const panel=$('#heroDetailPanel');if(panel)panel.innerHTML=heroProfileHTML(h);
};
function closeMobileNav(){ $('#sidebar').classList.remove('open'); const overlay=$('.mobile-side-overlay');if(overlay)overlay.classList.remove('active'); }
function prepareWordGame(){
  const answer='DIPONEGORO';let letters=shuffle(answer.split('')).join('');if(letters===answer)letters=answer.slice(1)+answer[0];
  state.wordGame={...state.wordGame,letters,answer:'',solved:false};persist();
}
function caseFeedbackText(choice){
  if(String(choice)==='0')return 'Tepat! Periksa sumber bersama-sama. Ini menunjukkan kejujuran dan tanggung jawab.';
  if(String(choice)==='1')return 'Pilihan ini menjaga kejujuran. Akan lebih baik jika kamu juga mengajak teman memeriksa sumber.';
  return 'Niatmu baik, tetapi masalah sumber belum diselesaikan. Ajak kelompok memeriksa informasi bersama.';
}
function bindSortDragDrop(){
  const list=$('#sortList');if(!list)return;
  $$('.sort-item',list).forEach(item=>{
    item.addEventListener('dragstart',e=>{draggedSortId=item.dataset.sortYear;item.classList.add('dragging');e.dataTransfer.effectAllowed='move';try{e.dataTransfer.setData('text/plain',draggedSortId)}catch(_){}});
    item.addEventListener('dragend',()=>{item.classList.remove('dragging');draggedSortId=null;});
    item.addEventListener('dragover',e=>{e.preventDefault();});
    item.addEventListener('drop',e=>{e.preventDefault();const source=draggedSortId||e.dataTransfer.getData('text/plain');const target=item.dataset.sortYear;if(!source||source===target)return;const order=[...state.timelineOrder];const from=order.indexOf(Number(source));const to=order.indexOf(Number(target));if(from<0||to<0)return;const [moved]=order.splice(from,1);order.splice(to,0,moved);state.timelineOrder=order;persist();renderScreen();});
  });
}
function bindReflectionCounter(){
  const input=$('#journalText');if(!input)return;
  input.addEventListener('input',()=>{const count=input.value.trim().split(/\s+/).filter(Boolean).length;const target=$('#wordCount');if(target)target.textContent=`${input.value.trim()?count:0} kata`;state.journal=input.value;persist();});
}
function saveProjectFile(file){
  if(!file)return;
  if(file.size>DATA.config.maxUploadBytes){toast(`Berkas terlalu besar. Batasnya ${Math.round(DATA.config.maxUploadBytes/100000)/10} MB.`,'warn');return;}
  if(!(file.type.startsWith('image/')||file.type.startsWith('audio/'))){toast('Pilih berkas gambar atau audio.','warn');return;}
  const reader=new FileReader();reader.onload=()=>{
    state.project={...state.project,name:$('#projectName')?.value||state.project.name,dataUrl:String(reader.result),mime:file.type,fileName:file.name,savedAt:new Date().toISOString()};
    const saved=persist();renderScreen();toast(saved?'Karya tersimpan di browser.':'Karya dipertahankan sementara, tetapi penyimpanan browser penuh.','success');
  };reader.onerror=()=>toast('Berkas belum dapat dibaca.','error');reader.readAsDataURL(file);
}
function downloadDataUrl(dataUrl, filename){const a=document.createElement('a');a.href=dataUrl;a.download=filename;a.rel='noopener';document.body.appendChild(a);a.click();a.remove();}
function downloadCertificate(){
  const r=state.quizResult;const score=r?r.score:'Belum mengikuti kuis';const status=r?(r.score>=75?'TUNTAS':'TERUS BERLATIH'):'BELUM DINILAI';
  const today=new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  const html=`<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Sertifikat ${escapeHTML(state.name)}</title><style>*{box-sizing:border-box}body{font-family:Georgia,serif;background:#f6efe1;padding:28px;color:#263247}.certificate{max-width:900px;margin:20px auto;background:#fffdf7;border:12px double #c62828;outline:2px solid #d6ae40;outline-offset:7px;padding:55px 45px;text-align:center;min-height:570px;position:relative}.seal{font-size:48px}.eyebrow{font: bold 13px Arial;letter-spacing:4px;color:#2e7d32}.title{font-size:38px;color:#c62828;margin:20px 0 8px}.sub{font-size:16px;color:#667085}.student{font-size:34px;font-weight:bold;margin:30px 0 12px;border-bottom:2px solid #d6ae40;display:inline-block;padding:0 30px 10px}.description{font-size:17px;line-height:1.7;max-width:650px;margin:0 auto}.score{font-size:24px;color:#2e7d32;font-weight:bold;margin:20px}.footer{display:flex;justify-content:space-between;margin-top:40px;font:13px Arial;color:#6f7887}.print{font: bold 14px Arial;border:0;border-radius:9px;background:#c62828;color:#fff;padding:12px 18px;display:block;margin:15px auto;cursor:pointer}@media print{body{padding:0;background:white}.certificate{margin:15px auto;break-inside:avoid}.print{display:none}}@media(max-width:620px){.certificate{padding:35px 20px}.title{font-size:28px}.student{font-size:26px}}</style></head><body><button class="print" onclick="window.print()">Cetak Sertifikat / Simpan sebagai PDF</button><main class="certificate"><div class="seal">🏅 🧭 🦅</div><p class="eyebrow">JELAJAH NUSANTARA • IPAS KELAS VI</p><h1 class="title">Sertifikat Penjaga Warisan</h1><p class="sub">Diberikan kepada</p><div class="student">${escapeHTML(state.name)}</div><p class="description">Atas partisipasi dalam media pembelajaran <strong>Misi Penjaga Warisan Nusantara</strong> dan usaha mengenali sejarah perjuangan pahlawan serta nilai keteladanannya.</p><div class="score">Nilai kuis: ${score} ${r?'/ 100':''}</div><p><strong>Status: ${status}</strong></p><div class="footer"><span>Kelas VI • ${today}</span><span>${escapeHTML(DATA.config.developerName)}<br>Pengembang Media</span></div></main></body></html>`;
  const blob=new Blob([html],{type:'text/html;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`Sertifikat-Penjaga-Warisan-${(state.name||'Detektif').replace(/[^a-z0-9-]/gi,'-')}.html`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('Sertifikat diunduh. Buka file lalu pilih Cetak atau Simpan sebagai PDF.','success');
}
function markMissionDone(index){
  if(state.missionDone.includes(index)){toast('Misi ini sudah tercatat selesai.','success');return;}
  state.missionDone.push(index);state.missionDone.sort((a,b)=>a-b);state.stamps.push(`mission-${index+1}`);
  if(index===1)unlockBadge('map');
  if(index===2)unlockBadge('timeline');
  if(index===3)unlockBadge('teladan');
  addXP([10,15,15,20][index]||10,`Misi ${index+1} selesai`);persist();
  if(index<3){state.missionIndex=index+1;persist();sayGaru(`Misi ${index+1} selesai, ${state.name}! Misi berikutnya terbuka.`);}
  else {sayGaru(`Luar biasa, ${state.name}! Semua misi utama selesai. Saatnya uji pemahaman.`);}
  renderScreen();updatePersistentUI();
}

// Event delegation menjaga interaksi tetap berfungsi meski layar dirender ulang.
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-nav]');if(nav){e.preventDefault();navigate(nav.dataset.nav);return;}
  const btn=e.target.closest('[data-action]');if(!btn)return;
  const action=btn.dataset.action;
  switch(action){
    case 'select-material': state.materialIndex=Number(btn.dataset.index);persist();renderScreen();break;
    case 'prev-material': if(state.materialIndex>0){state.materialIndex--;renderScreen();}break;
    case 'next-material': if(state.materialIndex<DATA.materials.length-1){state.materialIndex++;renderScreen();}break;
    case 'check-material': {
      const m=DATA.materials.find(x=>x.id===btn.dataset.id);const selected=$('input[name="materialCheck"]:checked');const feedback=$('#materialFeedback');
      if(!selected){if(feedback)feedback.textContent='Pilih satu jawaban dahulu.';toast('Pilih jawaban sebelum memeriksa.','warn');break;}
      if(Number(selected.value)===m.answer){if(feedback)feedback.textContent='Benar! Jawabanmu tepat. +5 XP';if(!state.readMaterials.includes(m.id)){state.readMaterials.push(m.id);addXP(5,'Materi dipahami');}else toast('Benar! Kamu sudah mendapat XP bab ini.','success');sayGaru(`Hebat, ${state.name}! Kamu memahami bab ${m.title}.`);}
      else {if(feedback)feedback.textContent='Belum tepat. Coba perhatikan lagi penjelasan pada kartu.';sayGaru('Tidak apa-apa! Baca petunjuknya sekali lagi, ya.');}
      persist();updatePersistentUI();break;
    }
    case 'speak-material': {const m=DATA.materials[state.materialIndex];speak(`${m.title}. Pertanyaan pemantik: ${m.prompt}. ${m.explanation}. Tahukah kamu? ${m.fact}. Contoh sehari-hari: ${m.everyday}. Cek pemahaman: ${m.question}`);break;}
    case 'glossary': openGlossary(btn.dataset.term);break;
    case 'close-modal': $('#modalRoot').innerHTML='';break;
    case 'speak-text': speak(btn.dataset.text||'');break;
    case 'select-mission': {const i=Number(btn.dataset.index);if(!isMissionUnlocked(i)){toast('Selesaikan misi sebelumnya agar bagian ini terbuka.','warn');break;}state.missionIndex=i;persist();renderScreen();break;}
    case 'complete-mission': {const i=Number(btn.dataset.index);if(i===2 && !state.timelineValidated){toast('Periksa dan urutkan peristiwa terlebih dahulu.','warn');break;}if(i===3 && !state.reflectionValidated){toast('Selesaikan refleksi dan periksa pasangan nilai terlebih dahulu.','warn');break;}markMissionDone(i);break;}
    case 'collect-hero': {const id=btn.dataset.id;const h=DATA.heroes.find(x=>x.id===id);if(!state.collectedHeroes.includes(id)){state.collectedHeroes.push(id);persist();toast(`Kartu ${h.name} terkumpul!`,'success');sayGaru(`Satu kartu pahlawan bertambah. Terus jelajahi Nusantara, ${state.name}!`);}else toast('Kartu ini sudah ada di paspormu.','success');renderScreen();break;}
    case 'save-local-hero': {const input=$('#localHeroNote');state.localHeroNote=input?.value.trim()||'';persist();toast(state.localHeroNote?'Catatan pahlawan daerah tersimpan.':'Tulis nama tokoh terlebih dahulu.','warn');break;}
    case 'reshuffle-timeline': state.timelineOrder=shuffle(DATA.events.slice(0,5).map(x=>x.year));state.timelineValidated=false;persist();renderScreen();break;
    case 'sort-up': case 'sort-down': {const y=Number(btn.dataset.year);const a=[...state.timelineOrder];const from=a.indexOf(y);const to=from+(action==='sort-up'?-1:1);if(from>=0&&to>=0&&to<a.length){[a[from],a[to]]=[a[to],a[from]];state.timelineOrder=a;state.timelineValidated=false;persist();renderScreen();}break;}
    case 'check-timeline-order': {const feedback=$('#sortFeedback');const expected=state.timelineOrder.slice().sort((a,b)=>a-b);const ok=state.timelineOrder.length===expected.length&&state.timelineOrder.every((n,i)=>n===expected[i]);if(ok){if(feedback)feedback.textContent='Tepat! Kamu sudah menyusun kronologi dari awal. +5 XP';state.timelineValidated=true;unlockBadge('timeline');if(!state.timelineBonusAwarded){state.timelineBonusAwarded=true;addXP(5,'Lini masa benar');}sayGaru(`Kronologimu runtut, ${state.name}! Sejarawan hebat memeriksa urutan peristiwa.`);}else{if(feedback)feedback.textContent='Belum runtut. Perhatikan angka tahun dan coba lagi.';state.timelineValidated=false;}persist();break;}
    case 'case-choice': {state.caseChoice=btn.dataset.choice;persist();$$('.case-option').forEach(x=>x.classList.toggle('selected',x.dataset.choice===state.caseChoice));const fb=$('#caseFeedback');if(fb)fb.textContent=caseFeedbackText(state.caseChoice);sayGaru(state.caseChoice==='0'?'Bagus! Kamu memilih memeriksa kebenaran bersama kelompok.':'Pikirkan apakah pilihanmu sudah menyelesaikan masalah sumber informasi.');break;}
    case 'check-values': {let total=0;DATA.values.slice(0,4).forEach((v,i)=>{const sel=$(`[data-value-match="${v.id}"]`);state.valueMatches[v.id]=sel?.value||'';if(state.valueMatches[v.id]===v.id)total++;});state.valuesChecked=true;state.valueScore=total;persist();const fb=$('#valueFeedback');if(fb)fb.textContent=`${total} dari 4 pasangan tepat. ${total===4?'Hebat! Semua nilai cocok.':'Periksa kembali nilai yang belum cocok.'}`;if(total===4&&!state.valuesBonusAwarded){state.valuesBonusAwarded=true;addXP(5,'Pasangan nilai tepat');}break;}
    case 'insert-word': {const input=$('#journalText');if(input){const word=btn.dataset.word;const before=input.value.trim();input.value=before?before+' '+word:word;input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();}break;}
    case 'save-journal': {const input=$('#journalText');state.journal=input?.value||state.journal;const ok=persist();const fb=$('#journalFeedback');if(fb)fb.textContent=ok?'Jurnal tersimpan di perangkat ini.':'Penyimpanan browser penuh. Salin jurnal ke tempat aman.';toast(ok?'Jurnal tersimpan.':'Jurnal belum dapat disimpan di browser.','warn');break;}
    case 'finish-reflection': {const input=$('#journalText');state.journal=input?.value||state.journal;const words=state.journal.trim().split(/\s+/).filter(Boolean).length;const caseOK=state.caseChoice!=='';const matchOK=state.valuesChecked&&state.valueScore>=3;if(words<5){toast('Tulis refleksi minimal lima kata dahulu.','warn');break;}if(!caseOK){toast('Pilih satu tindakan pada studi kasus terlebih dahulu.','warn');break;}if(!matchOK){toast('Cocokkan nilai dengan contoh, lalu periksa pasangan.','warn');break;}state.reflectionValidated=true;persist();const fb=$('#journalFeedback');if(fb)fb.textContent='Refleksi tersimpan. Kamu siap menjadi teladan di lingkunganmu!';markMissionDone(3);break;}
    case 'save-project': {state.project.name=$('#projectName')?.value.trim()||'Karya Detektif';const file=$('#projectFile')?.files?.[0];if(file){saveProjectFile(file);}else{const ok=persist();toast(ok?'Judul karya tersimpan. Pilih berkas untuk melampirkan karya.':'Penyimpanan browser tidak tersedia.','warn');}break;}
    case 'download-project': {if(!state.project.dataUrl){toast('Pilih dan simpan berkas karya terlebih dahulu.','warn');break;}downloadDataUrl(state.project.dataUrl,state.project.fileName||'karya-sejarah');break;}
    case 'send-teacher': {if(DATA.config.googleFormUrl&&/^https?:\/\//.test(DATA.config.googleFormUrl)){window.open(DATA.config.googleFormUrl,'_blank','noopener,noreferrer');}else{toast('Tautan Google Form belum diatur. Pengembang dapat mengisinya pada DATA.config.googleFormUrl di script.js.','warn');}break;}
    case 'save-project-reason': {state.project.reason=$('#projectReason')?.value||'';persist();toast('Jawaban Ayo Berpikir tersimpan.','success');break;}
    case 'answer-quiz': {state.quizAnswers[btn.dataset.qid]=Number(btn.dataset.answer);persist();renderScreen();break;}
    case 'prev-question': if(state.quizIndex>0){state.quizIndex--;persist();renderScreen();}break;
    case 'next-question': if(state.quizIndex<DATA.quiz.length-1){state.quizIndex++;persist();renderScreen();}break;
    case 'goto-question': state.quizIndex=Number(btn.dataset.index);persist();renderScreen();break;
    case 'submit-quiz': {const missing=DATA.quiz.filter(q=>state.quizAnswers[q.id]===undefined).length;if(missing){toast(`Masih ada ${missing} soal yang kosong. Lengkapi dahulu, ya.`,'warn');const next=state.quizOrder.findIndex(id=>state.quizAnswers[id]===undefined);if(next>=0){state.quizIndex=next;renderScreen();}break;}state.quizResult=computeQuizResult();state.quizSubmitted=true;state.quizReviewOpen=false;if(!state.quizXpAwarded){state.quizXpAwarded=true;addXP(10,'Kuis diselesaikan');}if(state.quizResult.score>=85)unlockBadge('quiz');if(!state.stamps.includes('quiz'))state.stamps.push('quiz');persist();launchConfetti();navigate('kuis');sayGaru(`${state.name}, kuis selesai! Nilaimu ${state.quizResult.score}. Baca pembahasannya agar makin paham.`);break;}
    case 'toggle-review': state.quizReviewOpen=!state.quizReviewOpen;renderScreen();break;
    case 'retry-quiz': {prepareQuiz();state.wordGame={...state.wordGame,answer:''};navigate('kuis');sayGaru('Kuis baru siap. Baca soal pelan-pelan, Detektif!');break;}
    case 'check-word-game': {const input=$('#wordAnswer');const ans=(input?.value||'').trim().toUpperCase().replace(/[^A-Z]/g,'');state.wordGame.answer=input?.value||'';if(ans==='DIPONEGORO'){state.wordGame.solved=true;if(!state.wordGame.awarded){state.wordGame.awarded=true;addXP(5,'Susun kata');}persist();renderScreen();toast('Kata misteri berhasil dipecahkan!','success');}else{persist();const fb=$('#wordFeedback');if(fb)fb.textContent='Belum tepat. Petunjuk: nama pemimpin Perang Jawa.';toast('Coba susun hurufnya lagi.','warn');}break;}
    case 'check-match-game': {let score=0;DATA.miniHeroes.forEach((h,i)=>{const v=$(`[data-mini-match="${i}"]`);state.matchGame.answers[i]=v?.value||'';if(state.matchGame.answers[i]===h.place)score++;});if(DATA.miniHeroes.some((h,i)=>!state.matchGame.answers[i])){toast('Lengkapi semua pasangan dahulu.','warn');break;}state.matchGame.checked=true;state.matchGame.score=score;if(score===DATA.miniHeroes.length&&!state.matchGame.awarded){state.matchGame.awarded=true;addXP(5,'Jodohkan pahlawan');}persist();renderScreen();const fb=$('#matchGameFeedback');if(fb)fb.textContent=`Hasil: ${score}/${DATA.miniHeroes.length} pasangan benar. ${score===DATA.miniHeroes.length?'Semua cocok! Bonus XP didapat.':'Buka materi atau peta untuk mempelajari kembali wilayahnya.'}`;break;}
    case 'certificate': downloadCertificate();break;
    case 'print-results': window.print();break;
    case 'garu-tip': sayGaru(`Ayo, ${state.name}! Pelajari fakta, periksa sumber, dan hubungkan nilai pahlawan dengan tindakan kecilmu hari ini.`);break;
    default: break;
  }
});

document.addEventListener('change',e=>{
  if(e.target.id==='provinceSelect'){
    state.province=e.target.value;state.localHeroNote='';persist();const result=$('#provinceResult');if(result)result.innerHTML=state.province?provinceResultHTML(state.province):'<p class="map-detail" style="margin-top:10px">Pilih provinsi untuk mencari nama tokoh pada materi ini.</p>';return;
  }
  if(e.target.id==='timelineSlider'){state.timelineIndex=Number(e.target.value);persist();renderScreen();return;}
  if(e.target.dataset.valueMatch){state.valueMatches[e.target.dataset.valueMatch]=e.target.value;state.valuesChecked=false;persist();return;}
  if(e.target.dataset.miniMatch){state.matchGame.answers[Number(e.target.dataset.miniMatch)]=e.target.value;persist();return;}
  if(e.target.id==='projectFile'){saveProjectFile(e.target.files?.[0]);return;}
});
document.addEventListener('input',e=>{
  if(e.target.id==='journalText'){state.journal=e.target.value;persist();const count=e.target.value.trim().split(/\s+/).filter(Boolean).length;const el=$('#wordCount');if(el)el.textContent=`${e.target.value.trim()?count:0} kata`;}
  if(e.target.id==='projectName'){state.project.name=e.target.value;persist();}
  if(e.target.id==='projectReason'){state.project.reason=e.target.value;persist();}
  if(e.target.id==='localHeroNote'){state.localHeroNote=e.target.value;persist();}
  if(e.target.id==='wordAnswer'){state.wordGame.answer=e.target.value;persist();}
});
$('#loginForm').addEventListener('submit',e=>{
  e.preventDefault();const name=$('#studentName').value.trim();if(!name){toast('Tulis nama detektif terlebih dahulu.','warn');$('#studentName').focus();return;}
  state.name=name;state.className='VI';persist();showApp();navigate('dashboard');sayGaru(`Selamat datang, ${state.name}! Aku Garu, pemandu petualanganmu. Kita mulai dari dashboard, ya.`);
});
$('#mobileMenuBtn').addEventListener('click',()=>{
  const side=$('#sidebar');side.classList.toggle('open');let overlay=$('.mobile-side-overlay');if(!overlay){overlay=document.createElement('div');overlay.className='mobile-side-overlay';document.body.appendChild(overlay);overlay.addEventListener('click',closeMobileNav);}overlay.classList.toggle('active',side.classList.contains('open'));
});
$('#toggleGaru').addEventListener('click',()=>{state.garuVisible=!state.garuVisible;persist();updatePersistentUI();if(state.garuVisible)sayGaru(`Aku di sini untuk membantu, ${state.name||'Detektif'}!`);});
$('#closeGaruBubble').addEventListener('click',()=>$('#garuBubble').classList.add('hidden-bubble'));
$('#fontUp').addEventListener('click',()=>{state.fontScale=Math.min(1.25,Math.round(((state.fontScale||1)+.05)*100)/100);document.documentElement.style.setProperty('--font-scale',state.fontScale);persist();});
$('#fontDown').addEventListener('click',()=>{state.fontScale=Math.max(.85,Math.round(((state.fontScale||1)-.05)*100)/100);document.documentElement.style.setProperty('--font-scale',state.fontScale);persist();});
$('#resetDataBtn').addEventListener('click',()=>{
  const sure=window.confirm('Hapus seluruh data belajar yang tersimpan di browser ini? Tindakan ini tidak dapat dibatalkan.');if(!sure)return;
  try{localStorage.removeItem(DATA.config.localStorageKey);}catch(err){console.warn(err);}if(window.speechSynthesis)window.speechSynthesis.cancel();state=freshState();destroyMap();showLogin();$('#modalRoot').innerHTML='';toast('Data belajar di perangkat ini telah dihapus.','success');
});
function launchConfetti(){
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const colors=['#c62828','#f2b705','#2e7d32','#315c8a','#f0a04b'];
  for(let i=0;i<65;i++){const piece=document.createElement('span');piece.className='confetti-piece';piece.style.left=Math.random()*100+'vw';piece.style.background=colors[i%colors.length];piece.style.animationDelay=(Math.random()*.8)+'s';piece.style.setProperty('--drift',(Math.random()*220-110)+'px');piece.style.transform=`rotate(${Math.random()*360}deg)`;document.body.appendChild(piece);setTimeout(()=>piece.remove(),3600);}
}

// Inisialisasi dan pemulihan progres.
state=safeReadState();
if(!state.className)state.className='VI';
if(!Array.isArray(state.timelineOrder))state.timelineOrder=[];
if(state.name){showApp();navigate(state.screen||'dashboard');}else{showLogin();}
