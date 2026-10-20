import type { Dua } from '../../types';

export const salavat: Dua = {
  id: 'salavat',
  title: { tr: 'Salavat-ı Şerife' },
  subtitle: { tr: 'Muhammed ve Âl-i Muhammed için salavat' },
  when: 'Her zaman; özellikle duaya başlarken ve duayı bitirirken, cuma günü ve namazlarda okunur.',
  intro: 'Peygamber Efendimiz ve Ehl-i Beyt\'i için rahmet ve selam dileyen kısa duadır. Şii gelenekte "Allahümme salli alâ Muhammedin ve âli Muhammed" ifadesi duaların başı ve sonunda tekrarlanır; Âl-i Muhammed\'in kurtuluşu için "ve accil ferecehüm" eklemesi de yaygındır.',
  parts: [
    {
      heading: 'Salavat',
      ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ آلِ مُحَمَّدٍ',
      okunus: 'Allâhümme salli alâ Muhammedin ve âli Muhammed.',
      meal: 'Allah\'ım, Muhammed\'e ve Muhammed\'in âline rahmet ve salat eyle.',
    },
    {
      heading: 'Ferec dileği eklenmiş hali',
      ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ آلِ مُحَمَّدٍ و عَجِّل فَرَجَهُم',
      okunus: 'Allâhümme salli alâ Muhammedin ve âli Muhammed, ve accil ferecehüm.',
      meal: 'Allah\'ım, Muhammed\'e ve âline rahmet eyle; onların ferahlığını (zuhurunu) çabuklaştır.',
    },
  ],
  source: 'Wikipedia "Salawat" maddesi (Şii yazım biçimleri); metin diğer Şii dua sitelerindeki yaygın biçimle uyumludur',
  url: 'https://en.wikipedia.org/wiki/Salawat',
  status: 'verified',
  note: 'Metin kısa ve yaygın olduğundan alındı; ancak kaynak ansiklopedi sayfasıdır, bir dua kitabından (Mefatih vb.) ayrıca teyit edilmesi önerilir.',
};
