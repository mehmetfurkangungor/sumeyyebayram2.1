/**
 * Sümeyye & Bayram - Dijital Nişan Davetiyesi Veri ve Yapılandırma Dosyası
 * 
 * Bu dosyadaki bilgileri değiştirerek davetiyeyi kolayca özelleştirebilirsiniz.
 */

export const invitationData = {
  // Çift Bilgileri
  bride: "Sümeyye",
  groom: "Bayram",
  brideInitials: "S",
  groomInitials: "B",
  eventTitle: "Nişan Töreni",

  // Tarih ve Saat
  // "Tarih & Saat yakında eklenecek" şeklinde placeholder. 
  // Gerçek tarih girildiğinde geri sayım sayacı otomatik olarak çalışacaktır.
  eventDateText: "14 Haziran 2026",
  eventTimeText: "12.00 - 16.00",
  
  // Geri sayım için hedef tarih (Format: YYYY-MM-DDTHH:mm:ss)
  // Örn: "2026-09-15T19:00:00". Eğer boş bırakılırsa, geri sayım alanında şık bir "Yakında Tarih Açıklanacak" mesajı gösterilir.
  countdownTargetDate: "2026-06-14T12:00:00+03:00", 

  // Konum Bilgileri
  location: {
    title: "Malikane Davet Balo",
    address: "İnkılap Mah. Küçüksu Cad., Hamamlıdere Sokağı No:7, Ümraniye / İstanbul",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Malikane%20Davet%20Balo%20%C4%B0nk%C4%B1lap%20Mah.%20K%C3%BC%C3%A7%C3%BCksu%20Cad.%20Hamaml%C4%B1dere%20Soka%C4%9F%C4%B1%20No%3A7%20%C3%9Cmraniye%20%C4%B0stanbul",
  },

  // Romantik Giriş Metinleri
  romanticQuote: {
    title: "İki Kalp, Tek Ritim",
    text: "Hayatımızın en özel, en anlamlı gününe adım atarken, siz değerli dostlarımızı da bu heyecana ortak olmaya davet ediyoruz. Sevgiyle, el ele yeni bir başlangıca..."
  },

  // Aşk Hikayemiz Bölümü (Love Story)
  loveStory: {
    title: "Aşk Hikayemiz",
    subtitle: "Gönülden birbirimize bağlandığımız o güzel yolculuk...",
    timeline: [
      {
        year: "İlk Karşılaşma",
        title: "Kesişen Yollar",
        description: "Hayatımızın en tatlı tesadüfüyle yollarımız birleşti. Bakışlarımızda geleceğin umudunu hissettik."
      },
      {
        year: "Zamanla Büyüyen Sevgi",
        title: "Ortak Hayaller",
        description: "Birlikte geçirilen her an, paylaşılan her gülüş sevgimizi daha da derinleştirdi. Hayallerimizi ortak kıldık."
      },
      {
        year: "Ve Şimdi...",
        title: "Sonsuzluğa Doğru",
        description: "Bir ömür boyu el ele yürümek için ilk resmi adımımızı nişan törenimizle atıyoruz."
      }
    ]
  },

  // Günün Programı / Akış (Timeline)
  program: [
    {
      time: "12.00",
      title: "Misafirlerin Karşılanması",
      description: "Bu tatlı heyecan başlarken kapılarımız sizler için açılıyor."
    },
    {
      time: "12.30",
      title: "Yüzük Töreni",
      description: "Ömürlük sözümüzü verirken, nişan yüzüklerimiz takılıyor."
    },
    {
      time: "14.00",
      title: "Pasta Kesimi & İkramlar",
      description: "Tatlı bir başlangıç ve lezzetli ikramlar eşliğinde kutlama."
    },
    {
      time: "16.00",
      title: "Kapanış",
      description: "Mutluluğumuza ortak olduğunuz bu güzel anı sevgiyle tamamlıyoruz."
    }
  ],

  // Kapanış Mesajı
  closingMessage: {
    text: "Bu mutlu günümüzde yanımızda olmanız dileğiyle...",
    signature: "Sümeyye & Bayram"
  }
};
