import {
  IconFindings,
  IconResearch,
  IconReview,
  IconSession,
  IconUT,
  PresenceIcon,
} from "@/components/Icons";

interface Timeline {
  value: React.ReactNode;
  title: string;
  timeline: string;
}

export interface ImageType {
  src: string;
  alt: string;
}

export interface ResearchStep {
  icon: React.ReactNode;
  details: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: any;
  heroImgSrc: string;
  company: {
    imgSrc: string;
    name: string;
    description: string;
  };
  objective: any;
  timeline: Timeline[];
  processMethod: any;
  researchSteps: ResearchStep[];
  researchersImage: string[];
  findingImage: string;
  findingDetail: any;
  resultImg: string;
  results: any;
  images: ImageType[];
  lessonLearned: any[];
}

export const projectList: Project[] = [
  {
    slug: "bulkbuyer-website-evaluation",
    title: "Bulkbuyer Website Evaluation",
    category: "Usability Evaluation",
    description: (
      <p>
        Pada Februari 2024, berkesempatan untuk mengevaluasi website CARE Order
        Management Eiger bersama <i>user</i> internal dan eksternal{" "}
        <i>(customer bulkbuyer)</i> dan menyajikan findings dari{" "}
        <i>sesi usability evaluation</i> serta <i>actionable recommendation</i>{" "}
        beserta prioritas pengerjaannya yang didasarkan pada{" "}
        <i>severity level</i> yaitu penilaian seberapa besar dampak yang
        ditimbulkan pada transaksi bagi <i>customer.</i>
      </p>
    ),
    heroImgSrc: "/projects/postwoman-storehouse.jpg",
    company: {
      imgSrc: "/static/brand_eiger.png",
      name: "PT Eigerindo Multi Produk Industri",
      description: "ASA Consulting (January - February 2024)",
    },
    objective: (
      <p>
        <b className="text-gold">Objectives : </b> Riset ini bertujuan untuk
        mengevaluasi sejauh mana CARE Order Management (CARE OM) telah membantu{" "}
        <i>customer bulkbuyer</i> (Wholesale customer) dan tim internal (sales)
        Eiger dalam proses transaksi grosir sejak website CAREOM live sekitar 6
        bulan yang lalu, dari POV external maupun internal.
      </p>
    ),
    timeline: [
      {
        value: <div className="h-6">6</div>,
        title: "Participants",
        timeline: "(Internal & External)",
      },
      {
        value: <div className="h-6">2</div>,
        title: "Months of Project",
        timeline: "(Feb-Mar 2024)",
      },
      {
        value: <PresenceIcon className="h-8" />,
        title: "Hybrid Session",
        timeline: "On/Offline",
      },
    ],
    processMethod: (
      <p>
        <b className="text-gold">Method : </b> Riset ini menerapkan{" "}
        <i>
          <b>usability evaluation methods</b>
        </i>{" "}
        and{" "}
        <i>
          <b>in-depth interviews</b>
        </i>
        dengan melakukan observasi interaksi partisipan dengan website CAREOM
        dan memahami perspektif partisipan tentang pengalaman mereka menggunakan
        CARE Order Management (CARE OM) untuk pesanan dalam jumlah besar, mulai
        dari hal positif maupun negatif (termasuk perbandingan dengan proses
        pembelian manual atau langsung ke sale), serta harapan ideal mereka
        untuk meningkatkan pelayanan pembelian jumlah besar.
      </p>
    ),
    researchSteps: [
      {
        icon: <IconResearch />,
        details: "Research Guideline/ UT Plan Preparation",
      },
      {
        icon: <IconReview />,
        details: "Review and collect Feedback with client",
      },
      {
        icon: <IconUT />,
        details: "UT Tools Preparation & Rehearsal",
      },
      {
        icon: <IconSession />,
        details: "Conduct Session with Participant :))",
      },
      {
        icon: <IconFindings />,
        details: "Gather Findings & Reporting",
      },
    ],
    researchersImage: [
      "/projects/IMG_5309.jpg",
      "/projects/bulkbuyer2.jpg",
      "/projects/bulkbuyer3.jpg",
    ],
    findingImage: "/projects/findings1.png",
    findingDetail: (
      <p>
        <b className="text-gold">Main Issues :</b> <i>Customer bulkbuyer</i>{" "}
        merasa{" "}
        <b>
          tidak cocok dengan pengalaman belanja pada website yang menyerupai
          katalog e-commerce
        </b>
        . Mereka lebih nyaman menggunakan tabel karena mereka sudah memiliki dan
        hafal daftar inventaris barang yang ingin mereka restock di tokonya
        tanpa memerlukan gambar produk yang besar. Halaman katalog hanya
        digunakan ketika mereka mencari inspirasi produk baru atau produk yang
        trend saat ini.
      </p>
    ),
    resultImg: "/projects/result1.png",
    results: (
      <>
        <p>
          <b>Implement a table view in EIGER CARE OM/Bulkbuyer Website UI :</b>{" "}
          Melakukan Implementasi <i>table view</i> saat pembuatan pesanan di UI
          EIGER CARE OM/Situs Web Bulkbuyer: <i>Simplify</i> Proses bagi{" "}
          <i>customer bulkbuyer</i>
          untuk melakukan pemesanan dalam jumlah besar dengan cepat dan efisien.
        </p>
        <ol>
          <li>
            <b className="text-gold">Efficiency :</b> Table view{" "}
            <b>
              memudahkan <i>customer bulkbuyer</i> saat memasukkan SKU dan
              kuantitas
            </b>{" "}
            tanpa perlu melihat gambar produk, yang sangat efisien bagi mereka
            yang sudah familiar dengan produk yang ingin mereka re-stock di
            tokonya.
          </li>
          <li>
            <b className="text-gold">Flexible SKU input (Bulk Upload) :</b>{" "}
            Fitur Bulk Upload pada kiri atas tabel, dapat{" "}
            <b>
              memudahkan <i>customer bulkbuyer</i> yang sudah memiliki file
              excel terpisah dengan rincian data SKU
            </b>{" "}
            yang ingin di re-stock di tokonya. sehingga format input pemesanan
            dalam jumlah besar bisa flexible menyesuaikan dengan kebutuhan user,
          </li>
          <li>
            <b className="text-gold">Real-time Stock Updates:</b> Memastikan{" "}
            <b>informasi stok ditampilkan secara real-time</b> untuk menghindari
            kesalahan integrasi data stok sehingga terjadi pembelian produk yang
            stoknya tidak tersedia.
          </li>
        </ol>
      </>
    ),
    images: [
      {
        src: "/projects/1a.png",
        alt: "",
      },
      {
        src: "/projects/1b.png",
        alt: "",
      },
      {
        src: "/projects/1c.png",
        alt: "",
      },
      {
        src: "/projects/1d.png",
        alt: "",
      },
    ],
    lessonLearned: [
      <>
        <b>Importance of User-Centric Design :</b> Memahami dan memprioritaskan
        kebutuhan dan <i>user’s spesific behaviour</i>, seperti{" "}
        <i>customer bulkbuyer</i> sangat penting untuk menciptakan{" "}
        <i>user interface</i> yang efektif dan efisien sesuai dengan kebutuhan
        user.
      </>,
      <>
        <b>Value of Continuous Feedback :</b> Mengumpulkan dan menganalisis
        feedback user perlu dilakukan secara teratur, Hal ini membantu
        mengidentifikasi pain-points dan area yang perlu diperbaiki, yang
        mengarah pada solusi yang lebih terperinci dan <i>user-friendly</i>.
      </>,
    ],
  },
  {
    slug: "puskesmas-response-management",
    title: "Puskesmas Response Management",
    category: "Concept Testing",
    description: (
      <p>
        Sekitar bulan Maret tahun 2024, berkesempatan untuk mengevaluasi
        <i>feasibility</i> pada pengelolaan alur <i>response management</i> dari
        pertanyaan dan keluhan melalui Grup WhatsApp (WAG) di Puskesmas untuk
        memungkinkan tim puskesmas lebih responsif terhadap keluhan masyarakat
        dan memberikan rekomendasi yang dapat ditindaklanjuti berdasarkan
        tingkat kedaruratan
        <i>(emergency level)</i>.
      </p>
    ),
    heroImgSrc: "/projects/puskesmas-hero.jpg",
    company: {
      imgSrc: "/static/brand_kemkes.png",
      name: "Kementerian Kesehatan RI",
      description: "ASA Consulting (Februari - Maret 2024)",
    },
    objective: (
      <p>
        <b className="text-gold">Objectives : </b> Riset ini bertujuan untuk
        mengevaluasi sejauh mana CARE Order Management (CARE OM) telah membantu{" "}
        <i>customer bulkbuyer</i> (Wholesale customer) dan tim internal (sales)
        Eiger dalam proses transaksi grosir sejak website CAREOM live sekitar 6
        bulan yang lalu, dari POV external maupun internal.
      </p>
    ),
    timeline: [
      {
        value: <div className="h-6">20</div>,
        title: "Participants",
        timeline: "(Internal & External)",
      },
      {
        value: <div className="h-6">3</div>,
        title: "Months of Project",
        timeline: "(Mar-May 2024)",
      },
      {
        value: <PresenceIcon className="h-8" />,
        title: "Offline Session",
        timeline: "Ternate, Maluku",
      },
    ],
    processMethod: (
      <p>
        <b className="text-gold">Method : </b> Kami menggunakan{" "}
        <b>Focus Group Discussions (FGD) dan Mini Workshop</b> untuk
        mengevaluasi dan memperbaiki alur <i>response management</i> dari
        pertanyaan dan keluhan melalui Grup WhatsApp (WAG) di Puskesmas. FGD
        mengumpulkan wawasan kualitatif dari staf kesehatan dan ibu-ibu,{" "}
        <i>identify</i> tantangan dan kondisi ideal menurut partisipan.
        Selanjutnya, dilengkappi dengan Mini Workshop yang memfasilitasi{" "}
        <i>collaboratie brainstorming</i> dan <i>flow mapping</i> yang
        memudahkan partisipan untuk merancang alur pertanyaan dan keluhan yang
        ideal.
      </p>
    ),
    researchSteps: [
      {
        icon: <IconResearch />,
        details: "Research Guideline/ CT Plan Preparation",
      },
      {
        icon: <IconReview />,
        details: "Review and collect Feedback with client",
      },
      {
        icon: <IconUT />,
        details: "UT Stimulus Prep & Rehearsal",
      },
      {
        icon: <IconSession />,
        details: "Conduct Session with Participant :))",
      },
      {
        icon: <IconFindings />,
        details: "Gather Findings & Reporting",
      },
    ],
    researchersImage: [
      "/projects/project2a.jpg",
      "/projects/project2b.jpg",
      "/projects/project2c.jpg",
      "/projects/project2d.jpg",
      "/projects/project2e.jpg",
    ],
    findingImage: "/projects/findings2.png",
    findingDetail: (
      <p>
        <b className="text-gold">Main Issues :</b> Ditemukan bahwa{" "}
        <b>
          sangat penting menetapkan batas waktu SLA untuk setiap kategori
          urgensi (merah, kuning, hijau)
        </b>
        . SLA ini memastikan bantuan darurat atau rujukan ke rumah sakit
        diberikan dengan cepat dan tepat sesuai dengan tingkat urgensi masalah
        yang diajukan. Begitu pula dengan alur eskalasi ke level penanganan yang
        lebih tinggi seperti tingkat provinsi atau pusat, jika diperlukan.
      </p>
    ),
    resultImg: "/projects/result2.png",
    results: (
      <>
        <p>
          <b>Arrange Quick Reply Standardize Content on WhatsApp Admin :</b>{" "}
          Pengembangan konten standar dengan fitur <i>quick reply</i> pada
          WhatsApp dan melakukan pelatihan penggunaannya. Fitur{" "}
          <i>quick reply</i> ini dirancang untuk memfasilitasi admin WAG di
          Puskesmas dalam menangani pertanyaan atau keluhan dari pasien
          berdasarkan kategori urgensi (merah, kuning, hijau). Dengan fitur ini,
          admin dapat memberikan respons yang tepat waktu dan sesuai, sehingga
          meningkatkan efisiensi dan kualitas layanan yang diberikan kepada para
          ibu.
        </p>
        <ol>
          <li>
            <b className="text-gold">SLA Red (High Urgency) :</b> Kejadian yang
            mengancam nyawa, rumor/hoax, penipuan, krisis massal/KLB (Covid,
            antrax, rabies, pencemaran reputasi puskesmas/kemenkes/dinkes)
            adalah kategori ‘MERAH’ atau ‘HIGH URGENCY’
          </li>
          <li>
            <b className="text-gold">SLA Yellow (Middle Urgency) :</b> Kesalahan
            informasi, komplain (Kurang puas dengan pelayanan), pertanyaan dari
            orang - orang berpengaruh, wartawan, topik yang tidak berhubungan
            adalah kategori ‘KUNING’ atau ‘MIDDLE URGENCY”
          </li>
          <li>
            <b className="text-gold">SLA Green (Low Urgency) :</b> Pertanyaan
            informasi layanan atau edukasi kesehatan, Komentar, Masukan/Saran,
            dan Pujian adalah kategori ‘HIJAU’ atau ‘LOW URGENCY”
          </li>
        </ol>
      </>
    ),
    images: [
      {
        src: "/projects/2a.jpg",
        alt: "",
      },
      {
        src: "/projects/2b.jpg",
        alt: "",
      },
      {
        src: "/projects/2c.jpg",
        alt: "",
      },
      {
        src: "/projects/2d.jpg",
        alt: "",
      },
    ],
    lessonLearned: [
      <>
        <b>Resource Constraints:</b> Semua Puskesmas menghadapi tantangan yang
        sama terkait tenaga kerja. Staf yang ada sangat sibuk memberikan layanan
        kepada pasien yang <i>traffic</i>-nya cukup tinggi, sehingga hanya
        sebagian yang dapat fokus menanggapi pertanyaan atau keluhan dari
        ibu-ibu di WAG.
      </>,
      <>
        <b>Context-Specific Protocols:</b> Beberapa Puskesmas, terutama yang
        berada di daerah pedalaman, memiliki kondisi khusus yang memerlukan
        prosedur respons yang disesuaikan. Misalnya, Puskesmas Ome di Maluku
        harus menggunakan kapal untuk merujuk pasien ke rumah sakit yang lebih
        besar di kota. Ini menekankan pentingnya pengembangan SOP{" "}
        <i>response management</i> WAG yang sesuai dengan konteks lokal, dengan
        pertimbangan tantangan logistik dan operasional spesifik di setiap
        wilayah.
      </>,
    ],
  },
];
