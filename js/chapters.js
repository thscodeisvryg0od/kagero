/* ============================================
   KAGERŌ — Bölüm Verileri
   幽霊花: Hayalet Çiçekler
   Arc 1: İlk Fısıltı (1-8)
   Arc 2: Karanlık Bahçe (9-18)
   Arc 3: Altın Çiçek (19-30)
   ============================================ */

const ALL_CHAPTERS = {

  // ============================================
  // ARC 1: İLK FISILTI (1-8)
  // ============================================

  1: {
    jp: "第1話", title: "İlk Fısıltı",
    pages: [
      { type: "splash", scene: "Yağmurlu Tokyo Gecesi — Shinjuku Silüeti — Kan İçinde Açan Kırmızı Çiçek", dialogue: [{ type: "inner", text: '"Her ölüm bir iz bırakır. Ama bazıları... bazıları çiçek açar."' }] },
      { type: "normal", scene: "Yuki, Dizlerinin Üstünde, Kan Birikintisindeki Çiçeğe Bakıyor — Yağmur", dialogue: [{ type: "say", speaker: "Yuki", text: "Yine mi...?" }, { type: "inner", text: '"Bu his... her seferinde aynı. Mide bulantısı. Kalp çarpıntısı. Ve o sesler..."' }] },
      { type: "closeup", scene: "Geriye Dönüş — 7 Yaşındaki Yuki, Yanan Evin Önünde", dialogue: [{ type: "say", speaker: "Annesi (ses)", text: "Yuki! Kaç! Sakın arkanı dönme!" }] },
      { type: "normal", scene: "Yuki'nin Parmağı Çiçeğe Değiyor — Temas Anı", dialogue: [] },
      { type: "splash", scene: "Yuki'nin Gözleri Beyaz Işıkla Doluyor — Fısıltılar", dialogue: [{ type: "whisper", text: '"Bıçak... çok soğuk..."' }, { type: "whisper", text: '"Lütfen... dur..."' }, { type: "whisper", text: '"ANNEM... ANNEM NEREDE..."' }] },
      { type: "closeup", scene: "Kadın Karanlık Sokakta Koşuyor — Peşinde Gölgeli Figür", dialogue: [] },
      { type: "normal", scene: "Ren, Sokak Lambasının Altında — Elinde Tantō — Alaycı İfade", dialogue: [{ type: "say", speaker: "Ren", text: "Ona dokunmamalıydın." }, { type: "say", speaker: "Ren", text: "Yoksa sen de mi 'Kan'nōsha'sın?" }, { type: "say", speaker: "Yuki", text: "Sen... kimsin?" }, { type: "say", speaker: "Ren", text: "Bu soruyu ben sana soracaktım. Ama önce... o çiçekten kaç tane daha var, biliyor musun? Ve sen onlardan biriydin." }] },
      { type: "splash", scene: "Ren, Elini Yuki'ye Uzatıyor — Yüzlerce Hayalet Çiçek Silüeti — 'Hoş geldin, karanlık bahçeye.'", dialogue: [] }
    ]
  },

  2: {
    jp: "第2話", title: "İlk Temas",
    pages: [
      { type: "splash", scene: "Şafak Söküyor — Yuki ve Ren Dar Sokaktan Ana Caddeye Çıkıyor", dialogue: [{ type: "inner", text: '"Bir gece. Sadece bir gece. Ve hayatım... geri dönüşü olmayan bir yola girdi."' }] },
      { type: "normal", scene: "Yuki ve Ren Yan Yana Yürüyor — Islak Saçlar, Sessizlik", dialogue: [{ type: "say", speaker: "Yuki", text: "Bana ne olduğunu açıklamadın." }, { type: "say", speaker: "Ren", text: "Açıklayacağım. Ama önce duş, temiz kıyafet ve... kahve." }] },
      { type: "closeup", scene: "Ren'in Yüzü — Ciddi Ama Yorgun İfade", dialogue: [{ type: "say", speaker: "Ren", text: "Cinayet mahallinden çıkmış bir lise öğrencisi gibi görünüyorsun. Ve emin ol, polis birazdan o sokakta olacak." }] },
      { type: "closeup", scene: "Yuki'nin Şaşkın Yüzü", dialogue: [{ type: "say", speaker: "Yuki", text: "Polis mi?! Ben... ben bir şey yapmadım!" }, { type: "say", speaker: "Ren (off-screen)", text: "Biliyorum. Ama 'Kan'nōsha' olduğunu polise nasıl açıklayacaksın?" }] },
      { type: "normal", scene: "Ren'in Dairesi İçi — Cam Kavanozlar, Kurutulmuş Çiçekler, Haritalar, Kendo Kılıcı", dialogue: [{ type: "say", speaker: "Yuki", text: "Bunlar... hepsi Hayalet Çiçek mi?" }, { type: "say", speaker: "Ren (off-screen)", text: "Evet. Her biri birinin son anısı. Bazıları... benim bulduğum. Bazıları... benim avladığım." }] },
      { type: "normal", scene: "Ren Mutfakta Kahve Yapıyor — Sırtı Yuki'ye Dönük", dialogue: [{ type: "say", speaker: "Yuki", text: "Neden bana yardım ediyorsun? Beni tanımıyorsun bile." }, { type: "say", speaker: "Ren", text: "Çünkü bir zamanlar ben de senin gibiydim. Karanlıkta yalnız." }, { type: "inner", text: '"Ve yalnız olanlar... en kolay avlananlardır."' }] },
      { type: "normal", scene: "Masa Başı — Aralarında Harita, Defter ve Tantō", dialogue: [{ type: "say", speaker: "Ren", text: "Bir: Hayalet Çiçekler, şiddetli ölümlerin olduğu yerlerde açar. İki: Her çiçek, ölünün son anısını taşır. Üç: Sadece 'Kan'nōsha'lar bu anıları okuyabilir." }, { type: "say", speaker: "Ren", text: "Dört: Sen bir Kan'nōsha'sın. Beş: Bu, senin için hem bir armağan... hem de bir lanet." }, { type: "say", speaker: "Yuki", text: "Neden lanet?" }, { type: "say", speaker: "Ren", text: "Çünkü duyduğun her fısıltı, seni biraz daha içine çeker. Bir gün... geri dönemeyebilirsin." }, { type: "say", speaker: "Yuki", text: "Ben zaten... çoktan kayboldum." }] },
      { type: "closeup", scene: "Geriye Dönüş — Genç Ren, Hastane Koridorunda, Elinde Çiçek", dialogue: [{ type: "say", speaker: "Doktor (ses)", text: "Tachibana-san... kız kardeşiniz... kurtaramadık." }] },
      { type: "normal", scene: "Harita — Kırmızı İğnelerle İşaretlenmiş Noktalar — Ortada Siyah İğne", dialogue: [{ type: "say", speaker: "Ren", text: "Bu harita... son 6 ayda bulduğum tüm Hayalet Çiçeklerin yerleri. Ve hepsi aynı desende." }, { type: "say", speaker: "Ren", text: "Her çiçek, bir cinayet kurbanına ait. Ve hepsi... aynı kişi tarafından öldürülmüş." }, { type: "say", speaker: "Yuki", text: "Aynı kişi mi? Bir seri katil mi?" }, { type: "say", speaker: "Ren", text: "Hayır. Daha kötüsü." }] },
      { type: "splash", scene: "Ren Yuki'ye Dönüyor — Karanlık İfade — Arka Planda Harita ve Kavanozlar", dialogue: [{ type: "say", speaker: "Ren", text: "Bir 'Toplayıcı'. Ve o toplayıcı... senin annenin ölümünden de sorumlu olabilir." }] }
    ]
  },

  3: {
    jp: "第3話", title: "Karanlık Pazar",
    pages: [
      { type: "splash", scene: "Tokyo'nun Altında Terk Edilmiş Metro İstasyonu — Onlarca Tezgah — Parlayan Çiçekler", dialogue: [{ type: "inner", text: '"Tokyo\'nun altında... başka bir Tokyo var. Ve buranın ışıkları... ölülerden geliyor."' }] },
      { type: "normal", scene: "Ren Paslı Bir Demir Kapıyı Açıyor — Tabela: '闇市 — Yamīchi'", dialogue: [{ type: "say", speaker: "Ren", text: "Hoş geldin. Burası Karanlık Pazar. Tokyo'nun en eski yeraltı piyasası." }, { type: "say", speaker: "Yuki", text: "Bunlar... hepsi mi Kan'nōsha?" }, { type: "say", speaker: "Ren", text: "Hayır. Çoğu sadece alıcı. Anıları toplayanlar, satanlar, koleksiyon yapanlar. Ve tabii... avcılar." }] },
      { type: "closeup", scene: "Tezgahlar — Kavanozlar — Etiketler: 'Boğulma', 'Cinayet', 'İntihar' — Fiyatlar", dialogue: [{ type: "say", speaker: "Yuki", text: "15 milyon yen... bir anı için mi?" }, { type: "say", speaker: "Ren", text: "Bir hayatın son 3 saniyesi. Bence ucuz bile." }] },
      { type: "closeup", scene: "Yuki Bir Tezgahın Önünde Duruyor — Beyaz Çiçek — Etiket: '綾小路 百合子 — Ayanokōji Yuriko'", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu annemin adı..." }] },
      { type: "normal", scene: "Tezgahın Arkasında Yaşlı Kör Kadın — Gin — Beyaz Gözler, Huzurlu Gülümseme", dialogue: [{ type: "say", speaker: "Gin", text: "Demek sonunda geldin. Seni bekliyordum, küçük Ayanokōji." }, { type: "say", speaker: "Yuki", text: "Beni... beni nasıl tanıyorsun?" }, { type: "say", speaker: "Gin", text: "Gözlerim görmüyor. Ama annenin çiçeğini tanırım. O çiçek, 12 yıldır bu tezgahta. Ve sadece senin elinde açacak." }] },
      { type: "normal", scene: "Ren Tezgahın Yanında — Endişeli İfade", dialogue: [{ type: "say", speaker: "Ren", text: "Gin-san... onu bulmanız gerektiğini biliyordunuz. Neden şimdiye kadar beklediniz?" }, { type: "say", speaker: "Gin", text: "Çünkü çiçek, sahibini bekler. Tıpkı anılar gibi. Zorla açtırırsan... solar." }] },
      { type: "closeup", scene: "Gin'in Elleri — Beyaz Çiçeği Yuki'ye Uzatıyor — Çiçek Hafifçe Parlıyor", dialogue: [{ type: "say", speaker: "Gin", text: "Al. Bu, annenin son anısı. Ama açmadan önce... iyi düşün." }, { type: "say", speaker: "Yuki", text: "Neden?" }, { type: "say", speaker: "Gin", text: "Çünkü bazı anılar... insanı kurtarmaz. Sadece acıtır." }, { type: "say", speaker: "Yuki", text: "Ben zaten her gün acı çekiyorum. En azından... nedenini bilmek istiyorum." }] },
      { type: "splash", scene: "Beyaz Çiçek Açılıyor — Işık Patlaması — Annenin Silüeti", dialogue: [] },
      { type: "closeup", scene: "Geriye Dönüş — Yanan Evin İçi — Yuriko Alevlerin Ortasında — Karşısında Gölgeli Figür", dialogue: [{ type: "say", speaker: "Yuriko", text: "Onu al. Ama kızıma dokunma. Anlaşma bu." }, { type: "say", speaker: "Gölgeli Figür", text: "Anlaşma... kabul edildi." }] },
      { type: "closeup", scene: "Yuriko Gölgeli Figüre Bakıyor — Kararlılık — Elinde Beyaz Çiçek", dialogue: [{ type: "say", speaker: "Yuriko", text: "Yuki... büyüdüğünde... bu çiçeği ona ver. Ve söyle ona..." }, { type: "say", speaker: "Yuriko", text: "Beni affetsin." }] },
      { type: "normal", scene: "Şimdiki Zaman — Yuki Dizlerinin Üstüne Çöküyor — Beyaz Çiçek Elinde Parçalanıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Anne... sen... sen beni kurtarmak için mi..." }] },
      { type: "normal", scene: "Ren Yuki'nin Yanına Çöküyor — Elini Omzuna Koyuyor", dialogue: [{ type: "say", speaker: "Ren", text: "Ağla. İstediğin kadar. Sonra... devam ederiz." }] },
      { type: "splash", scene: "Bahçıvan Pazarın Girişinde — Uzun Siyah Haori — Elinde Budama Makası — Etrafında Uçuşan Çiçekler", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Merhaba, küçük Ayanokōji. Beni hatırladın mı?" }] },
      { type: "closeup", scene: "Yuki'nin Gözleri — Korku, Öfke, Tanıdık Acı", dialogue: [{ type: "say", speaker: "Yuki", text: "Sen... sen o gün oradaydın." }] },
      { type: "splash", scene: "Bahçıvan Makasını Yuki'ye Doğrultuyor — Ren Tantō'sunu Çekiyor — Yuki Yerde", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Hoş geldin, kızım. Bahçemize." }] }
    ]
  },

  4: {
    jp: "第4話", title: "Beyaz Çiçek",
    pages: [
      { type: "splash", scene: "Bahçıvan ve Yuki Karşı Karşıya — Karanlık Pazar — Ren Arada — Gerginlik", dialogue: [{ type: "inner", text: '"Babam... o adam... babam mı? Hayır. O bir canavar. Ve ben... ben onun kızıyım."' }] },
      { type: "normal", scene: "Ren Tantō'sunu Çekiyor — Bahçıvan'ın Karşısına Geçiyor", dialogue: [{ type: "say", speaker: "Ren", text: "Bir adım daha atarsan... seni keserim." }, { type: "say", speaker: "Bahçıvan", text: "Ah, Tachibana. Hala Hana'nın intikamını almaya çalışıyorsun." }] },
      { type: "closeup", scene: "Ren'in Yüzü — Şok, Öfke, Yıkım", dialogue: [{ type: "say", speaker: "Ren", text: "Ne... ne dedin sen?" }] },
      { type: "normal", scene: "Yuki Ayağa Kalkıyor — Beyaz Çiçeğin Parçaları Elinde — Kararlı İfade", dialogue: [{ type: "say", speaker: "Yuki", text: "Yeter!" }, { type: "say", speaker: "Yuki", text: "Sana bir sorum var. Annem... seninle mi anlaşma yaptı?" }] },
      { type: "closeup", scene: "Bahçıvan'ın Yüzü Hala Gölgede — Ama Hafif Bir Duraksama", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Evet." }, { type: "say", speaker: "Bahçıvan", text: "Annen, seni korumak için kendi hayatını feda etti. Ben de... onun anısını korumak için buradayım." }] },
      { type: "closeup", scene: "Yuki'nin Gözleri — Gözyaşı Ama Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Yalan söylüyorsun." }, { type: "say", speaker: "Yuki", text: "Annem benim için öldü. Ama sen... sen onun ölümünü kullandın." }] },
      { type: "splash", scene: "Yuki Ellerini Kaldırıyor — Beyaz Çiçeğin Parçaları Havada Dönüyor — Işık Patlaması", dialogue: [{ type: "say", speaker: "Yuki", text: "Ve ben... senin kızın olmayı reddediyorum." }] },
      { type: "normal", scene: "Bahçıvan Geri Adım Atıyor — İlk Kez Tereddüt — Makasını İndiriyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Yuki..." }, { type: "say", speaker: "Yuki", text: "Git. Şimdi. Yoksa... annemin anısını kullanarak seni durdururum." }] },
      { type: "normal", scene: "Bahçıvan Arka Planda Kayboluyor — Sis — Çiçekler Soluyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Peki. Ama bir gün... sen de anlayacaksın. Ben... senin babanım." }] },
      { type: "normal", scene: "Karanlık Pazar — Herkes Kaçtı — Sadece Yuki, Ren ve Gin Kaldı", dialogue: [{ type: "say", speaker: "Gin", text: "Aferin, küçük Ayanokōji. Annenin kızı olduğunu kanıtladın." }] },
      { type: "closeup", scene: "Yuki ve Ren Yan Yana — Ren'in Eli Yuki'nin Omzunda", dialogue: [{ type: "say", speaker: "Ren", text: "İyi misin?" }, { type: "say", speaker: "Yuki", text: "Hayır. Ama... sanırım bir gün olacağım." }] },
      { type: "normal", scene: "Gin Onlara Yaklaşıyor — Elinde Küçük Bir Not", dialogue: [{ type: "say", speaker: "Gin", text: "Bu adresi al. Dr. Kenji Kurosawa. O... size yardım edecek." }, { type: "say", speaker: "Yuki", text: "Kim o?" }, { type: "say", speaker: "Gin", text: "Annenin kardeşi. Senin dayın." }] },
      { type: "splash", scene: "Yuki Şaşkın Yüzü — Beyaz Çiçeğin Son Yaprağı Havada Süzülüyor", dialogue: [{ type: "inner", text: '"Bir dayım var. Bir ailem var. Ve belki... belki hala bir umut var."' }] }
    ]
  },

  5: {
    jp: "第5話", title: "Toplayıcı",
    pages: [
      { type: "splash", scene: "Terk Edilmiş Bir Depo — Beton Duvarlar — Ren ve Yuki Karşı Koyuyor — Karşılarında Üç Figür", dialogue: [{ type: "inner", text: '"İlk görevimiz. İlk gerçek tehlikemiz. Ve ilk... ölümüm."' }] },
      { type: "normal", scene: "Dr. Kurosawa'nın Muayenehanesi — Yuki ve Ren Hazırlanıyor — Tantō ve Fener", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Shinjuku'da bir Hayalet Çiçek tespit edildi. Kırmızı. Yani cinayet." }, { type: "say", speaker: "Ren", text: "Toplayıcılar da peşinde mi?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Evet. Ve bu sefer... liderlerinden biri geliyor." }] },
      { type: "closeup", scene: "Ren'in Yüzü — Ciddi İfade", dialogue: [{ type: "say", speaker: "Ren", text: "Kuroi." }, { type: "say", speaker: "Yuki", text: "Kuroi kim?" }, { type: "say", speaker: "Ren", text: "Eski bir polis memuru. Kızı öldürülünce Toplayıcılara katıldı. Şimdi... onların en tehlikeli avcısı." }] },
      { type: "normal", scene: "Terk Edilmiş Depo — Gece — Ren ve Yuki İçeri Giriyor", dialogue: [{ type: "say", speaker: "Ren", text: "Ben içeri gireceğim. Sen arkada kal. Çiçeği gördüğünde... bana haber ver." }, { type: "say", speaker: "Yuki", text: "Ama ben..." }, { type: "say", speaker: "Ren", text: "Yuki. Dinle. Bu sefer... emirlerime uy." }] },
      { type: "splash", scene: "Depo İçi — Ortada Kan İzleri — Kırmızı Çiçek Açıyor — Etrafı Çiçeklerle Sarılı", dialogue: [] },
      { type: "closeup", scene: "Yuki Çiçeğe Yaklaşıyor — Elini Uzatıyor — Titriyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Sadece... sadece bir anı. Sonra bırakacağım." }] },
      { type: "splash", scene: "Yuki Çiçeğe Dokunuyor — Anı Patlıyor — Genç Bir Adam Ölü Yatıyor", dialogue: [{ type: "whisper", text: '"Neden... neden ben..."' }, { type: "whisper", text: '"Sadece yardım etmek istedim..."' }, { type: "whisper", text: '"Kuroi... o beni öldürdü..."' }] },
      { type: "normal", scene: "Aniden Bir Ses — Kuroi Gölgelerden Çıkıyor — Elinde Çiçeklerden Yapılmış Kamçı", dialogue: [{ type: "say", speaker: "Kuroi", text: "Doğru tahmin, küçük Kan'nōsha." }, { type: "say", speaker: "Kuroi", text: "Ama sen... annene çok benziyorsun. Ve bu... beni rahatsız ediyor." }] },
      { type: "splash", scene: "Ren İçeri Dalıyor — Tantō Hazır — Kuroi'ye Saldırıyor", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki! Kaç!" }] },
      { type: "normal", scene: "Ren vs Kuroi — Tantō vs Çiçek Kamçısı — Hızlı Dövüş Sahnesi", dialogue: [{ type: "say", speaker: "Kuroi", text: "Hala aynı Tachibana. Hala kız kardeşinin intikamını arıyorsun." }, { type: "say", speaker: "Ren", text: "Sus!" }, { type: "say", speaker: "Kuroi", text: "Hana... senin yüzünden öldü. Biliyorsun, değil mi?" }] },
      { type: "closeup", scene: "Ren'in Yüzü — Şok, Öfke Karışımı — Kuroi Fırsatı Kullanıp Kaçıyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "Bahçıvan seni arıyor, küçük Kan'nōsha. Ve o... asla pes etmez." }] },
      { type: "normal", scene: "Depo Boş — Ren Yerde Dizlerinin Üstünde — Yuki Yanına Geliyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Ren! Yaralı mısın?" }, { type: "say", speaker: "Ren", text: "Hayır. Ama... o haklı. Hana... benim yüzümden öldü." }] },
      { type: "closeup", scene: "Yuki Ren'in Yanına Çöküyor — Elini Omzuna Koyuyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Hayır. Sen değil. Bahçıvan. Ve biz... onu durduracağız." }] },
      { type: "splash", scene: "Ren ve Yuki Dışarı Çıkıyor — Şafak — Arka Planda Dr. Kurosawa'nın Arabası", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Eve dönelim. Konuşmamız gereken çok şey var." }] }
    ]
  },

  6: {
    jp: "第6話", title: "Koruyucular",
    pages: [
      { type: "splash", scene: "Yanaka Mezarlığı — Gece — Dr. Kurosawa Mezarın Önünde Duruyor — Elinde Mum", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Bu mezarlığın altında... yüzyıllardır saklanan bir tapınak var." }] },
      { type: "normal", scene: "Dr. Kurosawa Bir Taşı İtiyor — Gizli Geçit Açılıyor — Merdiven Aşağı İniyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Burası... burası hep burada mıydı?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Tokyo'nun kuruluşundan beri. Koruyucular... şehrin altında yaşar." }] },
      { type: "normal", scene: "Merdiven Aşağı — Mumlarla Aydınlatılmış Koridor — Duvarlarda Çiçek Sembolleri", dialogue: [{ type: "say", speaker: "Ren", text: "Buraya daha önce geldin mi?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Ben... bir zamanlar burada yaşadım. Ama artık sadece bir misafirim." }] },
      { type: "splash", scene: "Büyük Bir Tapınak Odası — Yüzlerce Çiçek — Ortada Bir Taht — Üzerinde Bir Figür — Kitsune Maskeli", dialogue: [{ type: "inner", text: '"Bu... bu bir insan mı? Yoksa... bir şey mi?"' }] },
      { type: "closeup", scene: "Ne — Kitsune Maskesi — Sesi Hem Kadın Hem Erkek Gibi — Ağırbaşlı", dialogue: [{ type: "say", speaker: "Ne", text: "Hoş geldin, Yuki Ayanokōji. Sonunda yüzünü gördüm." }, { type: "say", speaker: "Yuki", text: "Sen... beni tanıyor musun?" }, { type: "say", speaker: "Ne", text: "Ben seni doğmadan önce tanıyordum. Annen... benim öğrencimdi." }] },
      { type: "normal", scene: "Yuki Şaşkın — Ren Sessiz — Dr. Kurosawa Başını Öne Eğiyor", dialogue: [{ type: "say", speaker: "Ne", text: "Ayanokōji Yuriko... en güçlü Kan'nōsha'ydı. Ve en büyük hatayı o yaptı. Bahçıvan'ı durdurmaya çalışırken... ona aşık oldu." }] },
      { type: "splash", scene: "Geriye Dönüş — Genç Yuriko ve Genç Sōren — Birlikte Çiçek Topluyorlar — Gülümsüyorlar", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Sōren... bu çiçek çok güzel." }, { type: "say", speaker: "Genç Sōren", text: "Senin kadar değil." }] },
      { type: "closeup", scene: "Geriye Dönüş — Laboratuvar — Genç Sōren Çiçeklerle Dolu — Notlar Alıyor", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Ölüm bir hastalık. Ve ben... tedavisini bulacağım." }, { type: "say", speaker: "Genç Yuriko", text: "Bazı şeyler iyileştirilmemeli, Sōren. Bazı yaralar... hatırlatılmalı." }] },
      { type: "normal", scene: "Geriye Dönüş — Koruyucular Tapınağı — Sōren ve Yuriko Tartışıyor", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Sōren... eğer bu yolda devam edersen... seni durdurmak zorunda kalacağım." }, { type: "say", speaker: "Genç Sōren", text: "O zaman durdur. Ama bil ki... seni asla bırakmayacağım." }] },
      { type: "normal", scene: "Şimdiki Zaman — Ne Ayağa Kalkıyor — Yuki'ye Yaklaşıyor", dialogue: [{ type: "say", speaker: "Ne", text: "Annen, seni korumak için öldü. Ve sen... sen onun mirasını taşıyorsun." }, { type: "say", speaker: "Ne", text: "Ama bir seçim yapmalısın. Ya eğitimini kabul et... ya da her şeyi unut." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Kararlı İfade", dialogue: [{ type: "say", speaker: "Yuki", text: "Eğitimi kabul ediyorum." }, { type: "say", speaker: "Ne", text: "Neden?" }, { type: "say", speaker: "Yuki", text: "Çünkü... annemi affetmek istiyorum. Ve babamı... durdurmak istiyorum." }] },
      { type: "splash", scene: "Ne Başını Sallıyor — Elini Kaldırıyor — Bir Kapı Açılıyor — İçeride Eğitim Alanı", dialogue: [{ type: "say", speaker: "Ne", text: "Öyleyse... hoş geldin, Koruyucu adayı. Eğitimin... şimdi başlıyor." }] }
    ]
  },

  7: {
    jp: "第7話", title: "Eğitim",
    pages: [
      { type: "splash", scene: "Tapınak Eğitim Alanı — Ahşap Zemin — Yuki ve Ren Karşı Karşıya — Dr. Kurosawa İzliyor", dialogue: [{ type: "inner", text: '"Bir ay geçti. Her gün. Her gece. Fısıltıları kontrol etmeyi öğrendim. Ama hala... hala yeterince güçlü değilim."' }] },
      { type: "normal", scene: "Yuki Meditasyon Yapıyor — Etrafında Fısıltılar — Ama Yüzü Sakin", dialogue: [{ type: "whisper", text: '"Beni duy... beni duy..."' }, { type: "whisper", text: '"Nerede... nerede..."' }, { type: "say", speaker: "Yuki (fısıltıyla)", text: "Sizi duyuyorum. Ama... sizi dinlemek zorunda değilim." }] },
      { type: "closeup", scene: "Yuki'nin Gözleri Açılıyor — Sakin — Etrafındaki Fısıltılar Dağılıyor", dialogue: [{ type: "say", speaker: "Ne (off-screen)", text: "İyi. Anı Filtreleme'yi öğrendin. Şimdi... sıra dövüşte." }] },
      { type: "normal", scene: "Ren Tantō'sunu Çekiyor — Yuki Elinde Küçük Bir Bıçak — Karşı Karşıya", dialogue: [{ type: "say", speaker: "Ren", text: "Beni durdurmaya çalış." }, { type: "say", speaker: "Yuki", text: "Ama sen... çok hızlısın." }, { type: "say", speaker: "Ren", text: "Hayat da hızlıdır. Ölüm ise... daha hızlı." }] },
      { type: "splash", scene: "Dövüş Sahnesi — Ren Hızlı Hareket Ediyor — Yuki Kaçınıyor — Ama Bir Hamlede Yere Düşüyor", dialogue: [{ type: "say", speaker: "Ren", text: "Yetersizsin. Bir daha." }, { type: "say", speaker: "Yuki", text: "Bir daha." }] },
      { type: "normal", scene: "Günler Geçiyor — Yuki Sürekli Çalışıyor — Ellerinde Yara İzleri", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yuki... çok fazla çalışıyorsun." }, { type: "say", speaker: "Yuki", text: "Yeterince iyi değilim. Ve zaman yok." }] },
      { type: "closeup", scene: "Ren'in Yüzü — Sessizce İzliyor — Bir Şey Söylemek İstiyor Ama Söyleyemiyor", dialogue: [{ type: "inner", text: '"O... çok çalışıyor. Tıpkı Hana gibi. Ve ben... onu da kaybetmekten korkuyorum."' }] },
      { type: "normal", scene: "Bir Gece — Yuki ve Ren Tapınak Çatısında — Gökyüzü Yıldızlı", dialogue: [{ type: "say", speaker: "Ren", text: "Neden bu kadar çok çalışıyorsun?" }, { type: "say", speaker: "Yuki", text: "Çünkü... anneme cevap vermek istiyorum. Ve babama... hayır demek istiyorum." }, { type: "say", speaker: "Ren", text: "Peki... sana bir şey göstereceğim." }] },
      { type: "normal", scene: "Ren Bir Defter Çıkarıyor — Hana'nın Çizim Defteri — Yuki'ye Uzatıyor", dialogue: [{ type: "say", speaker: "Ren", text: "Bu, Hana'nın çizim defteri. Onun son çizimi... sana yardımcı olabilir." }] },
      { type: "closeup", scene: "Yuki Defteri Açıyor — Son Sayfa — Bahçıvan'ın Yüzü Çizili", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu..." }, { type: "say", speaker: "Ren", text: "Evet. Hana... Bahçıvan'ın yüzünü görmüş. Ve bu çizim... onun son mesajı." }] },
      { type: "splash", scene: "Yuki Çizime Bakıyor — Şok — Çünkü Çizimde Yüz Net — Ve O Yüz... Sōren Ayanokōji", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu babam." }, { type: "say", speaker: "Ren", text: "Evet. Ve Hana bunu bilerek öldü. Çünkü... seni korumak istedi." }] },
      { type: "closeup", scene: "Yuki'nin Gözleri — Gözyaşı — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "O zaman... ben de onun için savaşacağım. Hana için. Annem için. Ve... senin için." }] }
    ]
  },

  8: {
    jp: "第8話", title: "Babanın Gölgesi",
    pages: [
      { type: "splash", scene: "Tokyo Kulesi — Gece — Yuki ve Ren Tepede — Bahçıvan Bekliyor — Aralarında Tek Bir Çiçek", dialogue: [{ type: "inner", text: '"Bu gece... her şey bitecek. Ya ben... ya o."' }] },
      { type: "normal", scene: "Bahçıvan Sırtı Dönük — Elinde Budama Makası — Arka Planda Şehir Işıkları", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Geldin. Sonunda." }, { type: "say", speaker: "Yuki", text: "Babanı tanıdım. Ve o... sen değilsin. Sen... sen onun gölgesisin." }] },
      { type: "closeup", scene: "Bahçıvan Yavaşça Dönüyor — Yüzü Hala Gölgede — Ama Sesi Titriyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Belki. Ama gölge de olsa... senin babam. Ve sen... benim kızımsın." }] },
      { type: "normal", scene: "Yuki İleri Adım Atıyor — Elinde Beyaz Çiçek — Kararlı", dialogue: [{ type: "say", speaker: "Yuki", text: "Bana bir soru sordun. Şimdi ben soruyorum. Annem... ona ne yaptın?" }] },
      { type: "closeup", scene: "Bahçıvan'ın Elleri Titriyor — Makası Yere Düşüyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Ben... ben ona zarar vermedim. O... o kendini feda etti. Seni benden korumak için." }, { type: "say", speaker: "Bahçıvan", text: "Ama ben... ben onu geri getirecektim. Her şeyi yaptım. Ve... ve başaramadım." }] },
      { type: "splash", scene: "Yuki Beyaz Çiçeği Bahçıvan'a Uzatıyor — Bahçıvan Şok — Çiçek Kendiliğinden Açılıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "O zaman... annemin son anısını gör. Onun son sözünü duy." }] },
      { type: "closeup", scene: "Bahçıvan Çiçeğe Dokunuyor — Anı Patlıyor — Yanan Ev — Yuriko Alevlerin İçinde", dialogue: [{ type: "say", speaker: "Yuriko", text: "Sōren... duyabiliyor musun? Seni affediyorum. Ama... kızımıza iyi bak. Yoksa... seni asla affetmem." }] },
      { type: "closeup", scene: "Bahçıvan'ın Yüzü — İlk Kez Görünüyor — Gözyaşları — Yıkım — Ama Aynı Zamanda Huzur", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Yuriko... affediyorsun... beni..." }] },
      { type: "splash", scene: "Bahçıvan Yere Dizlerinin Üstüne Çöküyor — Maskesi Düşüyor — Gerçek Yüzü Ortaya Çıkıyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Yuki... ben... ben çok özür dilerim. Ben... ben bir canavardım." }] },
      { type: "closeup", scene: "Yuki Bahçıvan'ın Karşısında Duruyor — Elini Uzatıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Kalk, baba. Seni affetmiyorum. Ama... sana bir şans veriyorum." }] },
      { type: "closeup", scene: "Bahçıvan Yuki'nin Elini Tutuyor — Ayağa Kalkıyor — Kararlı İfade", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Bir şans. Sadece bir şans. Ve ben... onu hak etmek için her şeyi yapacağım." }] },
      { type: "splash", scene: "Üçü Yan Yana — Tokyo Kulesi — Şafak Söküyor — Beyaz Çiçek Açıyor", dialogue: [{ type: "inner", text: '"Arc 1... sona erdi. Ve ben... ben hala ayaktayım."' }] }
    ]
  },

  // ============================================
  // ARC 2: KARANLIK BAHÇE (9-18)
  // ============================================

  9: {
    jp: "第9話", title: "Kaçış",
    pages: [
      { type: "splash", scene: "Terk Edilmiş Bir Otoyol — Şafak Öncesi — Yuki, Ren ve Bahçıvan Arabada — Arka Planda Tokyo Işıkları", dialogue: [{ type: "inner", text: '"Babamı affetmedim. Ama ona bir şans verdim. Ve şimdi... şimdi Tokyo\'dan kaçıyoruz."' }] },
      { type: "normal", scene: "Araba İçi — Sessizlik — Bahçıvan Direksiyonda — Yuki Arka Koltukta", dialogue: [{ type: "say", speaker: "Yuki", text: "Nereye gidiyoruz?" }, { type: "say", speaker: "Bahçıvan", text: "Tokyo'dan uzaklaşmalıyız. Kuroi... seni bulmak için her yeri arayacak." }, { type: "say", speaker: "Ren", text: "Kuroi'nin bir hedefi var mı?" }, { type: "say", speaker: "Bahçıvan", text: "Var. Ben." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Şaşkın", dialogue: [{ type: "say", speaker: "Yuki", text: "Neden sen?" }, { type: "say", speaker: "Bahçıvan", text: "Çünkü Kuroi, karımı öldürmeye çalışan adamlardan biriydi. Ama karım... annen... onu durdurdu." }] },
      { type: "normal", scene: "Araba Bir Dağ Yoluna Sapıyor — Sis — Uzakta Eski Bir Ryokan (Japon Hanı)", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Burası güvenli. Ben... 12 yıl önce burada saklandım." }, { type: "say", speaker: "Ren", text: "Neden burada?" }, { type: "say", speaker: "Bahçıvan", text: "Çünkü burada... çiçekler yok. Hiç yok." }] },
      { type: "splash", scene: "Ryokan İçi — Ahşap — Sıcak Su Kaynağı (Onsen) — Boş Odalar — Sessizlik", dialogue: [{ type: "inner", text: '"Çiçeklerin olmadığı bir yer. İlk kez... gerçekten yalnızım."' }] },
      { type: "normal", scene: "Yuki ve Ren Odalarına Yerleşiyor — Sessizlik", dialogue: [{ type: "say", speaker: "Ren", text: "İyi misin?" }, { type: "say", speaker: "Yuki", text: "Bilmiyorum. Babam... şimdi karşımda oturuyor. Ve ben... ne hissettiğimi bilmiyorum." }, { type: "say", speaker: "Ren", text: "Bu normal." }] },
      { type: "closeup", scene: "Bahçıvan Tek Başına Onsen'de — Sırtı Yuki'ye Dönük — Düşünceli", dialogue: [{ type: "inner", text: '"Yuriko... kızımız büyümüş. Ve ben... ona sadece acı verdim."' }] },
      { type: "normal", scene: "Yuki Bahçıvan'ın Yanına Geliyor — Sessizce Oturuyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bana... bana annemi anlat." }, { type: "say", speaker: "Bahçıvan", text: "Nereden başlayayım?" }, { type: "say", speaker: "Yuki", text: "Baştan. Nasıl tanıştınız?" }] },
      { type: "splash", scene: "Geriye Dönüş Başlıyor — Genç Yuriko ve Genç Sōren — Koruyucular Tapınağı — 20 Yıl Önce", dialogue: [{ type: "say", speaker: "Bahçıvan (ses)", text: "O gün... tapınağa yeni bir öğrenci geldi. Ve o öğrenci... benden nefret ediyordu." }] }
    ]
  },

  10: {
    jp: "第10話", title: "Dayının Sırrı",
    pages: [
      { type: "splash", scene: "Ryokan — Sabah — Dr. Kurosawa Arabadan İniyor — Yuki ve Ren Onu Karşılıyor", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Geldim. Ve... konuşmamız gereken çok şey var." }] },
      { type: "normal", scene: "Ryokan İçi — Oturma Odası — Dr. Kurosawa ve Yuki Karşı Karşıya", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yuki... ben senin dayınım. Yuriko'nun kardeşiyim." }, { type: "say", speaker: "Yuki", text: "Bunu biliyorum. Gin söyledi." }, { type: "say", speaker: "Dr. Kurosawa", text: "Ama bilmediğin bir şey var. Ben... annenin ölümüne tanık oldum." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Şok", dialogue: [{ type: "say", speaker: "Yuki", text: "Ne?!" }, { type: "say", speaker: "Dr. Kurosawa", text: "O gece... ben de oradaydım. Ama hiçbir şey yapamadım. Korktum." }] },
      { type: "splash", scene: "Geriye Dönüş — 12 Yıl Önce — Yanan Ev — Genç Dr. Kurosawa Dışarıda — Yuriko İçeride", dialogue: [{ type: "say", speaker: "Genç Kurosawa", text: "Yuriko! Çık dışarı!" }, { type: "say", speaker: "Yuriko (ses)", text: "Kenji! Yuki'yi al ve kaç! Onu koru!" }] },
      { type: "closeup", scene: "Genç Kurosawa Küçük Yuki'yi Kucaklıyor — Ama Geri Dönüyor — Alevler", dialogue: [{ type: "say", speaker: "Genç Kurosawa", text: "Hayır... hayır, seni bırakmayacağım!" }] },
      { type: "closeup", scene: "Yuriko'nun Yüzü Alevler İçinde — Huzurlu Gülümseme", dialogue: [{ type: "say", speaker: "Yuriko", text: "Kenji... bu benim seçimim. Yuki'ye iyi bak. Ve... Sōren'i affet." }] },
      { type: "normal", scene: "Şimdiki Zaman — Dr. Kurosawa Başını Öne Eğiyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "O gün... onu kurtaramadım. Ve o günden beri... kendimi affetmedim." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Yumuşama — Ellerini Uzatıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Dayı... sen elinden geleni yaptın." }, { type: "say", speaker: "Dr. Kurosawa", text: "Hayır. Yapmadım. Ama şimdi... seni koruyacağım." }] },
      { type: "normal", scene: "Ren İçeri Giriyor — Elinde Bir Mektup — Dr. Kurosawa'ya Uzatıyor", dialogue: [{ type: "say", speaker: "Ren", text: "Gin'den geldi. Sabah kargoyla." }, { type: "say", speaker: "Dr. Kurosawa", text: "Gin mi? Ama o..." }, { type: "say", speaker: "Ren", text: "Öldü. Ama bu mektup... ölümünden önce gönderilmiş." }] },
      { type: "splash", scene: "Mektup Açılıyor — El Yazısı — Yuriko'nun Yazısı — 'Kızıma'", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu annemin el yazısı." }, { type: "say", speaker: "Dr. Kurosawa", text: "Gin... 12 yıldır bu mektubu saklıyordu. Ve şimdi... sana veriyor." }] },
      { type: "closeup", scene: "Yuki Mektubu Okuyor — Gözyaşları — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Yuriko (mektuptan)", text: "Sevgili Yuki'm... Eğer bu mektubu okuyorsan, ben artık yanında değilim. Ama bil ki... seni her zaman sevdim. Ve bir gün... babanı affedeceksin. Çünkü o... o da bir kurban. - Annen" }] }
    ]
  },

  11: {
    jp: "第11話", title: "Yasak Aşk",
    pages: [
      { type: "splash", scene: "Geriye Dönüş — 20 Yıl Önce — Koruyucular Tapınağı — Genç Yuriko Meditasyon Yapıyor", dialogue: [{ type: "say", speaker: "Ne (ses, genç)", text: "Yuriko. Yeni bir öğrenci geliyor. Adı Sōren." }, { type: "say", speaker: "Genç Yuriko", text: "Sōren mi? Kim o?" }, { type: "say", speaker: "Ne (ses, genç)", text: "Bir dahi. Ama... bir uyarı. Ona fazla yaklaşma." }] },
      { type: "normal", scene: "Genç Sōren Tapınağa Giriyor — Gözlüklü — Kitap Dolu Çanta — Sessiz", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Ben Sōren Ayanokōji. Botanik öğrencisiyim." }, { type: "say", speaker: "Genç Yuriko", text: "Botanik mi? Kan'nōsha olmak için mi?" }, { type: "say", speaker: "Genç Sōren", text: "Hayır. Ölümü anlamak için." }] },
      { type: "closeup", scene: "Genç Yuriko'nun Yüzü — Şaşkın Ama Meraklı", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Ölümü mü?" }, { type: "say", speaker: "Genç Sōren", text: "Ölüm bir hastalık. Ve ben... onu iyileştireceğim." }] },
      { type: "splash", scene: "Montaj — Aylar Geçiyor — Yuriko ve Sōren Birlikte Eğitim Yapıyor — Çiçek Topluyor — Kitap Okuyor", dialogue: [{ type: "inner", text: '"Başta ondan nefret ettim. Ama zamanla... zamanla kalbim onu seçti."' }] },
      { type: "normal", scene: "Tapınağın Bahçesi — Gece — Yuriko ve Sōren Yan Yana — Yıldızlar", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Yuriko... sana bir şey söylemem lazım." }, { type: "say", speaker: "Genç Yuriko", text: "Söyle." }, { type: "say", speaker: "Genç Sōren", text: "Ben... seni seviyorum." }] },
      { type: "closeup", scene: "Genç Yuriko'nun Yüzü — Gözyaşı — Mutluluk", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Ben de. Ama... bu yasak." }, { type: "say", speaker: "Genç Sōren", text: "Yasak olan ne? Aşk mı?" }, { type: "say", speaker: "Genç Yuriko", text: "Hayır. Senin araştırman. Ve ben... sana yardım edemem." }] },
      { type: "splash", scene: "İlk Öpücük — Tapınağın Çatısında — Ay Işığında — İkisi Sarılıyor", dialogue: [] },
      { type: "normal", scene: "Ne'nin Odası — Genç Ne — Yuriko'ya Bakıyor — Ciddi", dialogue: [{ type: "say", speaker: "Genç Ne", text: "Yuriko. Sōren ile aranda bir şey var mı?" }, { type: "say", speaker: "Genç Yuriko", text: "Hayır. Sadece... arkadaşız." }, { type: "say", speaker: "Genç Ne", text: "Yalan söylüyorsun. Ve bu... seni mahvedecek." }] },
      { type: "closeup", scene: "Genç Sōren'in Laboratuvarı — Yasak Kitaplar — Deneyler — Karanlık", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Yuriko... annemi geri getirmek istiyorum. Bunu anlıyor musun?" }, { type: "say", speaker: "Genç Yuriko", text: "Sōren... annen öleli 10 yıl oldu." }, { type: "say", speaker: "Genç Sōren", text: "Ama onu geri getirebilirim. Yasak metinleri buldum." }] },
      { type: "normal", scene: "Yuriko ve Sōren Tartışıyor — Tapınak Koridoru — Gerginlik", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Yapma. Bu... bu doğaüstü. Bu yanlış." }, { type: "say", speaker: "Genç Sōren", text: "Yanlış olan ne? Bir annenin oğlunu sevmesi mi?" }, { type: "say", speaker: "Genç Yuriko", text: "Hayır. Ölümü reddetmek. Bu... seni mahveder." }] },
      { type: "splash", scene: "Genç Sōren Tapınaktan Ayrılıyor — Gece — Sırt Çantası — Yasak Kitaplar — Yuriko Arkada", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Üzgünüm, Yuriko. Ama bu yolda... yalnız yürüyeceğim." }, { type: "say", speaker: "Genç Yuriko", text: "Sōren! Dur!" }] }
    ]
  },

  12: {
    jp: "第12話", title: "Kırık Yemin",
    pages: [
      { type: "splash", scene: "Geriye Dönüş — 18 Yıl Önce — Sōren Yalnız Laboratuvarında — Yasak Deneyler — Çiçeklerle", dialogue: [{ type: "inner", text: '"Yuriko\'yu kaybettim. Ama annemi geri getireceğim. Ve... herkes görecek."' }] },
      { type: "normal", scene: "Yuriko Kapıyı Kırıyor — İçeri Giriyor — Sōren'i Görüyor — Çiçekler Her Yerde", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Sōren... ne yaptın sen?!" }, { type: "say", speaker: "Genç Sōren", text: "Annemi geri getirdim. Bak!" }] },
      { type: "closeup", scene: "Yuriko Etrafına Bakıyor — Kavanozlarda Anılar — Ölü Çiçekler — Kan", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Bu... bu annen değil. Bu... bu bir anı." }, { type: "say", speaker: "Genç Sōren", text: "Hayır! O o! Sadece... sadece biraz farklı." }] },
      { type: "splash", scene: "Kavanozdan Bir Silüet Çıkıyor — Anne Figürü — Ama Boş Gözler — Yuriko'ya Bakıyor", dialogue: [{ type: "say", speaker: "Anne Figürü", text: "Sōren... oğlum..." }, { type: "say", speaker: "Genç Yuriko", text: "Sōren! Bu yanlış! Bunu durdur!" }] },
      { type: "normal", scene: "Sōren Anneyi Kucaklıyor — Ama Figür Dağılıyor — Sōren Yıkılıyor", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Hayır... hayır geri gel!" }, { type: "say", speaker: "Genç Yuriko", text: "Bu senin hatan. Ölüler geri gelmez." }] },
      { type: "closeup", scene: "Genç Sōren Yuriko'ya Bakıyor — Gözlerinde Delilik", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Sen... sen beni durdurdun." }, { type: "say", speaker: "Genç Yuriko", text: "Seni kurtardım." }, { type: "say", speaker: "Genç Sōren", text: "Hayır. Beni... mahvettin." }] },
      { type: "splash", scene: "Sōren Tapınaktan Kovuluyor — Koruyucular Yemin Bozuyor — Yuriko Ağlıyor", dialogue: [{ type: "say", speaker: "Genç Ne", text: "Ayanokōji Sōren. Yasak araştırma yaptın. Koruyuculuk yeminin bozuldu." }, { type: "say", speaker: "Genç Sōren", text: "Umurumda değil. Ben... kendi yolumda yürüyeceğim." }] },
      { type: "normal", scene: "Yuriko Sōren'in Peşinden Gidiyor — Kapıda — Son Konuşma", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "Sōren... gitme." }, { type: "say", speaker: "Genç Sōren", text: "Gitmeliyim. Ama... seni asla unutmayacağım." }, { type: "say", speaker: "Genç Yuriko", text: "Ben de. Ve... ben... hamileyim." }] },
      { type: "closeup", scene: "Sōren'in Yüzü — Şok — Ama Sonra Sırtını Dönüyor", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "O zaman... ona iyi bak. Ben... ben ona layık değilim." }] },
      { type: "splash", scene: "Sōren Karanlığa Kayboluyor — Yuriko Yalnız — Gözyaşları — Ama Kararlı", dialogue: [{ type: "say", speaker: "Genç Yuriko", text: "O zaman... ben de onu kendim büyüteceğim. Ve... onu koruyacağım." }] },
      { type: "normal", scene: "Şimdiki Zaman — Yuki Ryokan'da — Mektubu Kapatıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "Yani... babam annemi bıraktı. Ve ben... ben olmadan büyüdüm." }, { type: "say", speaker: "Bahçıvan (kapıda)", text: "Hayır, Yuki. Annen... seni benden korudu." }] },
      { type: "closeup", scene: "Bahçıvan Kapının Eşiğinde — Yorgun — Pişman", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Ben... ben seni hak etmedim. Ama şimdi... seni korumak istiyorum. İzin verir misin?" }, { type: "say", speaker: "Yuki", text: "Bilmiyorum. Ama... belki bir gün." }] }
    ]
  },

  13: {
    jp: "第13話", title: "İlk Kurban",
    pages: [
      { type: "splash", scene: "Geriye Dönüş — 3 Yıl Önce — Üniversite Kampüsü — Hana Tachibana Kitap Okuyor", dialogue: [{ type: "inner", text: '"Hana... Ren\'in kız kardeşi. Neşeli, hayat dolu, resim yapmayı severdi. Ve o... benim için öldü."' }] },
      { type: "normal", scene: "Hana Kütüphanede — Yaşlı Bir Adam Ona Yaklaşıyor — Gözlüklü — Kibar", dialogue: [{ type: "say", speaker: "Yaşlı Adam", text: "Tachibana-san? Botanik bölümünden misiniz?" }, { type: "say", speaker: "Hana", text: "Evet. Siz?" }, { type: "say", speaker: "Yaşlı Adam", text: "Profesör Ayanokōji. Araştırma asistanı arıyorum." }] },
      { type: "closeup", scene: "Hana'nın Yüzü — Heyecanlı", dialogue: [{ type: "say", speaker: "Hana", text: "Profesör Ayanokōji! Sizin çalışmalarınızı okuyorum! Hayalet Çiçekler üzerine, değil mi?" }, { type: "say", speaker: "Profesör (Bahçıvan)", text: "Evet. Ama bu... gizli bir çalışma." }] },
      { type: "splash", scene: "Montaj — Hana ve Profesör Çalışıyor — Laboratuvar — Çiçekler — Notlar — Gülümsemeler", dialogue: [{ type: "say", speaker: "Hana", text: "Profesör... neden Altın Çiçeği arıyorsunuz?" }, { type: "say", speaker: "Bahçıvan", text: "Çünkü... birini geri getirmek istiyorum." }] },
      { type: "normal", scene: "Hana Bir Gece Laboratuvara Gizlice Giriyor — Notları Karıştırıyor — Bir Fotoğraf Buluyor", dialogue: [{ type: "say", speaker: "Hana", text: "Bu... bu fotoğraf. Yuriko Ayanokōji. Ve yanında... bebek Yuki." }, { type: "say", speaker: "Hana", text: "Yani... profesör... Yuki'nin babası mı?" }] },
      { type: "closeup", scene: "Hana'nın Yüzü — Şok — Korku — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Hana", text: "Ren'e söylemeliyim. Bu... bu tehlikeli." }] },
      { type: "splash", scene: "Hana Telefonu Çıkarıyor — Ama Bahçıvan Kapıda — Gölge", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Hana. Ne yapıyorsun?" }, { type: "say", speaker: "Hana", text: "Profesör... ben... ben sadece..." }, { type: "say", speaker: "Bahçıvan", text: "Gördün, değil mi? Fotoğrafı." }] },
      { type: "normal", scene: "Hana Geri Adım Atıyor — Bahçıvan Yaklaşıyor — Sakin Ama Soğuk", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Hana... sen iyi bir asistansın. Ama... sırlarımı bilmemeliydin." }, { type: "say", speaker: "Hana", text: "Profesör... yapmayın." }] },
      { type: "closeup", scene: "Hana'nın Gözleri — Korku — Gözyaşı — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Hana", text: "Yuki'yi koruyacağım. Sizi durduracağım." }] },
      { type: "splash", scene: "Karanlık Bir Laboratuvar — Hana Yerde — Kan — Bahçıvan Uzaklaşıyor — Sırtı Dönük", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Üzgünüm, Hana. Ama Yuki'yi korumak için... seni feda etmem gerekiyordu." }] },
      { type: "closeup", scene: "Hana'nın Son Anı — Elini Uzatıyor — Kırmızı Değil... Beyaz Çiçek Açıyor", dialogue: [{ type: "inner", text: '"Ren... affet beni. Ama... Yuki\'yi koru."' }] },
      { type: "normal", scene: "Birkaç Saat Sonra — Ren Laboratuvara Geliyor — Hana'nın Bedeni — Beyaz Çiçek", dialogue: [{ type: "say", speaker: "Ren", text: "Hana?! HANA!" }] },
      { type: "closeup", scene: "Ren Beyaz Çiçeğe Dokunuyor — Hana'nın Son Anısı — Bahçıvan'ın Yüzü", dialogue: [{ type: "say", speaker: "Hana (anıdan)", text: "Ağabey... o... o Bahçıvan. Yuki'nin babası." }] },
      { type: "splash", scene: "Ren Yerde — Beyaz Çiçek Elinde — Gözyaşları — Öfke", dialogue: [{ type: "say", speaker: "Ren", text: "Bahçıvan... seni bulacağım. Ve seni... öldüreceğim." }] }
    ]
  },

  14: {
    jp: "第14話", title: "Yüzleşme",
    pages: [
      { type: "splash", scene: "Ryokan — Gece — Yuki ve Ren Karşı Karşıya — Ren'in Eli Yumruk", dialogue: [{ type: "say", speaker: "Ren", text: "Bunu bilmeliydin. Hana... Hana senin için öldü." }, { type: "say", speaker: "Yuki", text: "Ne... ne diyorsun?" }, { type: "say", speaker: "Ren", text: "Bahçıvan... baban. Hana'yı öldürdü. Çünkü Hana seni korumak istedi." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Şok — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "Hayır... hayır, yalan söylüyorsun." }, { type: "say", speaker: "Ren", text: "Keşke yalan söyleseydim." }] },
      { type: "normal", scene: "Bahçıvan İçeri Giriyor — Üçlü Karşı Karşıya — Gerginlik", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Ren... söyle ona. Doğruyu." }, { type: "say", speaker: "Ren", text: "Sen... sen söyle. Neden Hana'yı öldürdün?" }] },
      { type: "closeup", scene: "Bahçıvan'ın Yüzü — Suçluluk — Ama Aynı Zamanda Zorunluluk", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Çünkü Hana... Yuki'nin kim olduğunu öğrenmişti. Ve eğer söyleseydi... Kuroi onu bulurdu." }, { type: "say", speaker: "Bahçıvan", text: "Onu öldürmek... onu korumaktı." }] },
      { type: "splash", scene: "Ren Bahçıvan'a Saldırıyor — Yumruk — Bahçıvan Karşılık Vermiyor", dialogue: [{ type: "say", speaker: "Ren", text: "KORUMAK MI?! HANA ÖLDÜ!" }, { type: "say", speaker: "Bahçıvan", text: "Biliyorum. Ve her gün... her gün kendimi affetmiyorum." }] },
      { type: "normal", scene: "Yuki Araya Giriyor — İkisini Ayırıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "DURUN!" }, { type: "say", speaker: "Yuki", text: "İkiniz de... ikiniz de durun." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Yıkım — Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Hana... benim için öldü. Ve ben... ben onun fedakarlığını hak etmiyorum." }, { type: "say", speaker: "Ren", text: "Yuki..." }, { type: "say", speaker: "Yuki", text: "Ama senin intikamın... onu geri getirmeyecek. Bunu biliyorsun." }] },
      { type: "normal", scene: "Ren Yerde — Gözyaşları — Yıkım", dialogue: [{ type: "say", speaker: "Ren", text: "Ne yapacağımı bilmiyorum." }, { type: "say", speaker: "Yuki", text: "Bilmiyorum. Ama... birlikte bulacağız." }] },
      { type: "closeup", scene: "Bahçıvan Onlara Bakıyor — Karar Veriyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Yuki. Ren. Ben... ben teslim olacağım." }, { type: "say", speaker: "Yuki", text: "Ne?" }, { type: "say", speaker: "Bahçıvan", text: "Kuroi'yi bulacağım. Ve... onunla yüzleşeceğim. Bu... benim son görevim." }] },
      { type: "splash", scene: "Bahçıvan Ayağa Kalkıyor — Ryokan Kapısına Yürüyor — Yuki ve Ren Arkada", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Yuki... seni koruyamadım. Ama şimdi... en azından Kuroi'yi durdurabilirim." }] },
      { type: "closeup", scene: "Yuki Bahçıvan'a Bakıyor — Gözyaşı — Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Bekle. Ben de geliyorum." }, { type: "say", speaker: "Bahçıvan", text: "Hayır." }, { type: "say", speaker: "Yuki", text: "Bu bir istek değil. Bu... bir tehdit." }] }
    ]
  },

  15: {
    jp: "第15話", title: "Yeni Eğitim",
    pages: [
      { type: "splash", scene: "Ryokan Bahçesi — Sabah — Yuki ve Bahçıvan Karşı Karşıya — Antrenman", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Sana öğreteceğim şey... annenin tekniği. Yuriko'nun Yolu." }, { type: "say", speaker: "Yuki", text: "Neyi öğretecek?" }, { type: "say", speaker: "Bahçıvan", text: "Çiçekleri silaha dönüştürmeyi." }] },
      { type: "normal", scene: "Bahçıvan Elini Kaldırıyor — Bir Çiçek Beliriyor — Sonra Şekil Değiştiriyor — Kılıç", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Hayalet Çiçekler... sadece anı değil. Aynı zamanda güç. Ölünün son duygusu... bir silaha dönüşür." }, { type: "say", speaker: "Yuki", text: "Nasıl?" }, { type: "say", speaker: "Bahçıvan", text: "Öfkeyle. Ama kontrol ederek." }] },
      { type: "closeup", scene: "Yuki'nin Eli — Bir Çiçek Beliriyor — Ama Titriyor — Dağılıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Yapamıyorum." }, { type: "say", speaker: "Bahçıvan", text: "Duygularını bastırıyorsun. Bırak... akmasına izin ver." }] },
      { type: "splash", scene: "Yuki Gözlerini Kapatıyor — Anılar Akıyor — Annesinin Yüzü — Hana'nın Yüzü — Ama Sonra Yuki Gözlerini Açıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu annemin gücü." }, { type: "say", speaker: "Bahçıvan", text: "Evet. Ve sen... onun varisi." }] },
      { type: "normal", scene: "Montaj — Günler Geçiyor — Yuki Sürekli Çalışıyor — Ellerinde Işıklar — Çiçek Kılıçları", dialogue: [{ type: "inner", text: '"Her gün... her gece. Ellerim kanıyor ama... artık yapabiliyorum."' }] },
      { type: "closeup", scene: "Yuki'nin Eli — Bir Beyaz Çiçek — Kılıca Dönüşüyor — Işık", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Aferin. Şimdi... sıra dövüşte." }] },
      { type: "splash", scene: "Yuki vs Bahçıvan — Çiçek Kılıç vs Makas — Hızlı Dövüş — Ağaçlar Sallanıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... yeterli mi?" }, { type: "say", speaker: "Bahçıvan", text: "Hayır. Daha güçlü olmalısın." }] },
      { type: "normal", scene: "Yuki Yere Düşüyor — Nefes Nefese — Bahçıvan Elini Uzatıyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Kalk. Bir daha." }, { type: "say", speaker: "Yuki", text: "Neden... neden bu kadar zorluyorsun?" }, { type: "say", speaker: "Bahçıvan", text: "Çünkü Kuroi... asla durmayacak." }] },
      { type: "closeup", scene: "Ren İzliyor — Ellerinde Tantō — Sessiz", dialogue: [{ type: "inner", text: '"O... gerçekten güçleniyor. Ve ben... onu izlemekten başka bir şey yapamıyorum."' }] },
      { type: "normal", scene: "Gece — Yuki ve Ren Odada — Sessizlik", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki." }, { type: "say", speaker: "Yuki", text: "Hm?" }, { type: "say", speaker: "Ren", text: "Seni... seni kaybetmek istemiyorum." }, { type: "say", speaker: "Yuki", text: "Kaybetmeyeceksin. Çünkü ben... ben güçlüyüm. Ve senin yanındayım." }] },
      { type: "splash", scene: "Ren Yuki'ye Sarılıyor — Sessizlik — Ama Anlamlı", dialogue: [] }
    ]
  },

  16: {
    jp: "第16話", title: "Kuroi'nin Peşinde",
    pages: [
      { type: "splash", scene: "Tokyo Dışı — Terk Edilmiş Fabrika — Gece — Yuki, Ren, Bahçıvan — Kuroi'nin Saklandığı Yer", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Kuroi burada. Bu onun üssü." }, { type: "say", speaker: "Yuki", text: "Nasıl eminsin?" }, { type: "say", speaker: "Bahçıvan", text: "Çünkü... onu ben yarattım." }] },
      { type: "normal", scene: "Fabrika İçi — Kavanozlar Her Yerde — Yüzlerce Hayalet Çiçek", dialogue: [{ type: "say", speaker: "Yuki", text: "Bunlar... bunlar kaç tane?" }, { type: "say", speaker: "Ren", text: "Yüzlerce. Bu... bu bir koleksiyon." }, { type: "say", speaker: "Bahçıvan", text: "Kuroi... anıları topluyor. Ama sadece toplamıyor. Onları... kullanıyor." }] },
      { type: "closeup", scene: "Bir Kavanozda Bir Çocuk Anı — Yuki Bakıyor — Tanıdık", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu Hana'nın anısı." }, { type: "say", speaker: "Ren", text: "Ne?!" }] },
      { type: "splash", scene: "Ren Kavanozu Kırıyor — Anı Patlıyor — Hana'nın Son Anı — Bahçıvan Görünüyor", dialogue: [{ type: "say", speaker: "Hana (anıdan)", text: "Ağabey... affet beni. Ama... Yuki'yi koru." }, { type: "say", speaker: "Ren", text: "Hana..." }] },
      { type: "normal", scene: "Kuroi Gölgelerden Çıkıyor — Elinde Çiçek Kamçısı — Alaycı", dialogue: [{ type: "say", speaker: "Kuroi", text: "Hoş geldiniz. Bahçıvan. Yuki. Ve... Tachibana." }, { type: "say", speaker: "Kuroi", text: "Buraya gelmeniz... aptallık. Ama ben... misafirperver bir ev sahibiyim." }] },
      { type: "closeup", scene: "Kuroi'nin Yüzü — Sırıtış — Gözlerinde Delilik", dialogue: [{ type: "say", speaker: "Kuroi", text: "Yuki... annen gibi görünüyorsun. Ve bu... beni rahatsız ediyor. Çünkü annen... kızımı öldürdü." }, { type: "say", speaker: "Yuki", text: "Ne?!" }, { type: "say", speaker: "Kuroi", text: "Evet. Kızım... bir Hayalet Çiçek tarafından öldürüldü. Ve annen... onu kurtaramadı." }] },
      { type: "normal", scene: "Bahçıvan İleri Adım Atıyor — Elinde Makas", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Kuroi... kızın ölmedi. Sen... sen onu öldürdün." }, { type: "say", speaker: "Kuroi", text: "YALAN SÖYLÜYORSUN!" }] },
      { type: "splash", scene: "Bahçıvan vs Kuroi — Makas vs Kamçı — Hızlı Dövüş — Çiçekler Uçuşuyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Sen... kendi kızını öldürdün. Ve o anıyı... bana sattın." }, { type: "say", speaker: "Kuroi", text: "HAYIR!" }] },
      { type: "normal", scene: "Yuki İleri Atılıyor — Beyaz Çiçek Kılıcı — Kuroi'ye Saldırıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "YETER!" }, { type: "say", speaker: "Kuroi", text: "Ah... küçük Kan'nōsha. Sen de mi annen gibi... beni durdurmaya çalışacaksın?" }] },
      { type: "splash", scene: "Yuki vs Kuroi — Kısa Dövüş — Yuki Kuroi'nin Elini Kesiyor — Kuroi Geri Çekiliyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "İyi. Ama... yeterince iyi değil." }, { type: "say", speaker: "Kuroi", text: "Bir gün... seni bulacağım. Ve o gün... sen de annen gibi öleceksin." }] },
      { type: "closeup", scene: "Kuroi Kaçıyor — Sis İçinde Kayboluyor — Yuki ve Ren Arkasında", dialogue: [{ type: "say", speaker: "Ren", text: "Peşinden gidelim!" }, { type: "say", speaker: "Bahçıvan", text: "Hayır. Bu bir tuzak." }, { type: "say", speaker: "Yuki", text: "Ama..." }, { type: "say", speaker: "Bahçıvan", text: "Bekle. Kuroi... bir gün geri dönecek. Ve o gün... hazır olmalıyız." }] }
    ]
  },

  17: {
    jp: "第17話", title: "Kan ve Çiçek",
    pages: [
      { type: "splash", scene: "Ryokan — Gece — Ren Ağır Yaralı — Yatakta — Yuki Başında", dialogue: [{ type: "say", speaker: "Yuki", text: "Ren! Ren, uyan!" }, { type: "say", speaker: "Dr. Kurosawa", text: "Yuki... yarası çok derin. Bir doktor lazım." }, { type: "say", speaker: "Yuki", text: "Ben... ben yapabilirim." }] },
      { type: "normal", scene: "Yuki Bir Hayalet Çiçek Çıkarıyor — Beyaz — Bir Doktorun Anısı", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bir doktorun anısı. Onu okuyacağım. Ve... onun bilgisini kullanacağım." }, { type: "say", speaker: "Dr. Kurosawa", text: "Bu tehlikeli. Anı... seni ele geçirebilir." }, { type: "say", speaker: "Yuki", text: "Risk alacağım." }] },
      { type: "closeup", scene: "Yuki Çiçeğe Dokunuyor — Anı Patlıyor — Bir Cerrahın Elleri — Kan — Ameliyat", dialogue: [{ type: "say", speaker: "Yuki", text: "Ben... ben bir cerrahım. Bu adamı kurtaracağım." }] },
      { type: "splash", scene: "Yuki Ren'i Ameliyat Ediyor — Ellerinde Işık — Cerrah Bilgisi Aktarılıyor", dialogue: [{ type: "inner", text: '"Kalbini bul. Nefesini kontrol et. Kanı durdur. Yaşa, Ren. Yaşa!"' }] },
      { type: "normal", scene: "Saatler Geçiyor — Yuki Kanlar İçinde — Ama Başarılı — Ren Nefes Alıyor", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yuki... başardın." }, { type: "say", speaker: "Yuki", text: "Hayır. O başardı. Ben sadece... yardım ettim." }] },
      { type: "closeup", scene: "Ren Gözlerini Açıyor — Yuki'yi Görüyor — Zayıf Gülümseme", dialogue: [{ type: "say", speaker: "Ren", text: "Sen... sen beni kurtardın." }, { type: "say", speaker: "Yuki", text: "Sen de beni kurtardın. Eşitlendi." }, { type: "say", speaker: "Ren", text: "Hiçbir şey eşitlenmez. Ama... teşekkür ederim." }] },
      { type: "splash", scene: "Ren Yatakta — Yuki Yanında — El Ele — Sessizlik — Ama Anlamlı", dialogue: [] },
      { type: "normal", scene: "Sabah — Ren Ayağa Kalkıyor — Yara Sarılı — Bahçıvan Kapıda", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "İyi misin?" }, { type: "say", speaker: "Ren", text: "İyiyim. Ama... Kuroi... hala dışarıda." }, { type: "say", speaker: "Bahçıvan", text: "Biliyorum. Ve... bir plan yapmalıyız." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Kararlı", dialogue: [{ type: "say", speaker: "Yuki", text: "Bir plan yapmayacağız. Onu... kendim bulacağım." }, { type: "say", speaker: "Ren", text: "Yuki..." }, { type: "say", speaker: "Yuki", text: "Hayır. Bu sefer... ben karar veriyorum." }] },
      { type: "splash", scene: "Yuki Dışarı Çıkıyor — Şafak — Ryokan Önü — Kararlı Adımlar", dialogue: [{ type: "inner", text: '"Bu savaş... benim. Annemin. Babamın. Ve... Hana\'nın. Ve ben... bu savaşı kazanacağım."' }] }
    ]
  },

  18: {
    jp: "第18話", title: "Karanlık Bahçe",
    pages: [
      { type: "splash", scene: "Koruyucular Tapınağı — Yanaka Mezarlığı Altı — Saldırıya Uğramış — Alevler İçinde", dialogue: [{ type: "inner", text: '"Tapınak... yıkıldı. Koruyucular... öldü. Ve biz... biz çok geç kaldık."' }] },
      { type: "normal", scene: "Yuki, Ren ve Bahçıvan Tapınağa Giriyor — Cesetler — Yıkım", dialogue: [{ type: "say", speaker: "Yuki", text: "Ne... Ne nerede?" }, { type: "say", speaker: "Bahçıvan", text: "Ne... o hala yaşıyor olabilir." }, { type: "say", speaker: "Ren", text: "Kuroi... bunu yaptı." }] },
      { type: "closeup", scene: "Ne — Kitsune Maskesi Kırık — Yerde — Nefes Alıyor", dialogue: [{ type: "say", speaker: "Ne", text: "Yuki... geldin." }, { type: "say", speaker: "Yuki", text: "Ne! Seni kurtaracağım!" }, { type: "say", speaker: "Ne", text: "Hayır. Ben... ben gidiyorum. Ama... sana bir şey söylemeliyim." }] },
      { type: "normal", scene: "Ne Yuki'nin Elini Tutuyor — Zayıf — Ama Kararlı", dialogue: [{ type: "say", speaker: "Ne", text: "Yuki... Kuroi... o senin peşinde. Ama... gerçek düşman... o değil." }, { type: "say", speaker: "Yuki", text: "Ne demek istiyorsun?" }, { type: "say", speaker: "Ne", text: "Toplayıcılar... bir lider tarafından yönetiliyor. Ve o lider... Altın Çiçeği arıyor." }] },
      { type: "splash", scene: "Tapınak Girişinde Kuroi Beliriyor — Yanında Onlarca Toplayıcı — Bahçıvan Görünüyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "Ne kadar dokunaklı. Ama... bu son." }, { type: "say", speaker: "Bahçıvan", text: "Kuroi... sen ve ben... bir kez olsun yüzleşelim." }] },
      { type: "normal", scene: "Bahçıvan vs Kuroi — Birebir Dövüş — Bahçıvan Kazanıyor Ama Yaralanıyor", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Sen... sen zayıfsın. Çünkü... sen kızını kaybettin. Ve ben... ben kızımı kazanıyorum." }, { type: "say", speaker: "Kuroi", text: "YALAN!" }] },
      { type: "closeup", scene: "Kuroi Bahçıvan'ı Bıçaklıyor — Bahçıvan Yere Düşüyor — Yuki Çığlık Atıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "BABA!" }, { type: "say", speaker: "Bahçıvan", text: "Yuki... kaç." }] },
      { type: "splash", scene: "Yuki Beyaz Çiçeği Elinde Tutuyor — Işık Patlaması — Kuroi'ye Saldırıyor — Tüm Gücüyle", dialogue: [{ type: "say", speaker: "Yuki", text: "SANA... DOKUNMA DEDİM!" }] },
      { type: "normal", scene: "Yuki Kuroi'yi Yeniyor — Kuroi Yerde — Yuki Üstünde — Kılıç Boynunda", dialogue: [{ type: "say", speaker: "Yuki", text: "Seni... öldürmeyeceğim. Çünkü... annem öldürmezdi." }, { type: "say", speaker: "Kuroi", text: "O zaman... sen de zayıfsın." }, { type: "say", speaker: "Yuki", text: "Hayır. Ben... güçlüyüm. Ama merhametliyim." }] },
      { type: "closeup", scene: "Yuki Bahçıvan'ın Yanına Koşuyor — Bahçıvan Nefes Alıyor Ama Zayıf", dialogue: [{ type: "say", speaker: "Bahçıvan", text: "Yuki... sen... sen güçlüsün. Annen gibi." }, { type: "say", speaker: "Yuki", text: "Sus. Seni kurtaracağım." }, { type: "say", speaker: "Bahçıvan", text: "Hayır. Ben... ben gidiyorum. Ama... sen yaşa. Benim için. Ve annen için." }] },
      { type: "splash", scene: "Bahçıvan Son Nefesini Veriyor — Yuki Onu Kucaklıyor — Gözyaşları — Tapınak Alevler İçinde", dialogue: [{ type: "say", speaker: "Yuki", text: "BABA! BABA KALK! LÜTFEN KALK!" }, { type: "say", speaker: "Bahçıvan (son söz)", text: "Seni seviyorum... kızım." }] },
      { type: "closeup", scene: "Yuki Bahçıvan'ın Bedeni Yanında — Gözyaşları — Ren Yanına Geliyor", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... gel. Buradan gitmeliyiz." }, { type: "say", speaker: "Yuki", text: "O... o benim babamdı. Ve ben... ben onu kurtaramadım." }, { type: "say", speaker: "Ren", text: "Hayır. Sen onu kurtardın. Karanlıktan kurtardın." }] },
      { type: "splash", scene: "Yuki Ayağa Kalkıyor — Gözyaşları Ama Kararlılık — Yanında Ren — Tapınaktan Çıkıyorlar — Şafak Söküyor", dialogue: [{ type: "inner", text: '"Arc 2... sona erdi. Babam öldü. Ama ben... ben hala ayaktayım. Ve şimdi... şimdi gerçek savaş başlıyor."' }] }
    ]
  },

  // ============================================
  // ARC 3: ALTIN ÇİÇEK (19-30)
  // ============================================

  19: {
    jp: "第19話", title: "Altın Çiçeğin Efsanesi",
    pages: [
      { type: "splash", scene: "Dr. Kurosawa'nın Muayenehanesi — Gece — Yuki, Ren ve Dr. Kurosawa Masada — Mum Işığı", dialogue: [{ type: "inner", text: '"Babamın ölümünden bir hafta sonra... Dr. Kurosawa bizi çağırdı. Ve bize bir efsane anlattı."' }] },
      { type: "normal", scene: "Dr. Kurosawa Eski Bir Kitap Açıyor — Sayfalarda Altın Çiçek Çizimi", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Altın Çiçek... efsaneye göre, ölümü tersine çevirebilen tek çiçek. Ama bedeli var." }, { type: "say", speaker: "Yuki", text: "Ne bedeli?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Kullanan kişinin hayatı." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Şaşkın Ama Meraklı", dialogue: [{ type: "say", speaker: "Yuki", text: "Yani... birini geri getirmek için... kendi hayatını mı veriyorsun?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Evet. Ama asıl tehlike bu değil." }] },
      { type: "normal", scene: "Dr. Kurosawa Sayfayı Çeviriyor — Karanlık Bir Sembol — Kitsune Maskesi", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Altın Çiçek... aynı zamanda bir kapıyı açar. Ölüler ile yaşayanlar arasında. Ve o kapı... bir kez açıldığında... kapanmaz." }, { type: "say", speaker: "Ren", text: "Yani... Kuroi onu açmak mı istiyor?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Hayır. Kuroi sadece bir piyon. Gerçek lider... Ne'nin bize söylediği kişi." }] },
      { type: "splash", scene: "Geriye Dönüş — Ne'nin Son Anı — Yuki'nin Elini Tutuyor — Tapınak Alevler İçinde", dialogue: [{ type: "say", speaker: "Ne (anıdan)", text: "Toplayıcılar... bir lider tarafından yönetiliyor. Ve o lider... Altın Çiçeği arıyor." }] },
      { type: "normal", scene: "Dr. Kurosawa Ayağa Kalkıyor — Pencereden Dışarı Bakıyor", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Bu lideri bulmalıyız. Yoksa... her şey kaybolur." }, { type: "say", speaker: "Yuki", text: "Nereden başlayalım?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Aokigahara. İntihar Ormanı. Orada... bir ipucu var." }] },
      { type: "closeup", scene: "Yuki ve Ren Birbirine Bakıyor — Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "O zaman... oraya gidiyoruz." }, { type: "say", speaker: "Ren", text: "Ben de geliyorum." }, { type: "say", speaker: "Yuki", text: "Biliyorum. Sen... her zaman yanımdasın." }] },
      { type: "splash", scene: "Harita Açılıyor — Aokigahara Ormanı İşaretli — Fuji Dağı Uzakta", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Aokigahara... aynı zamanda Fuji Dağı'nın eteklerinde. Ve efsaneye göre... Altın Çiçek, Fuji'nin altındaki bir mağarada." }] },
      { type: "normal", scene: "Gece — Yuki ve Ren Odada — Hazırlık", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... korkuyor musun?" }, { type: "say", speaker: "Yuki", text: "Evet. Ama... artık korkumu yenmeyi öğrendim." }, { type: "say", speaker: "Ren", text: "Ben de. Ama... seninle olmak... beni güçlü kılıyor." }] },
      { type: "closeup", scene: "Yuki ve Ren — Eller Birleşiyor — Gözler Buluşuyor", dialogue: [{ type: "say", speaker: "Yuki", text: "O zaman... birlikte. Her zaman." }, { type: "say", speaker: "Ren", text: "Her zaman." }] }
    ]
  },

  20: {
    jp: "第20話", title: "Aokigahara",
    pages: [
      { type: "splash", scene: "Aokigahara Ormanı — Sis — Karanlık Ağaçlar — Yuki ve Ren İçeri Giriyor", dialogue: [{ type: "inner", text: '"Aokigahara... İntihar Ormanı. Buranın çiçekleri... çok güçlü. Çok tehlikeli."' }] },
      { type: "normal", scene: "Orman İçi — Etrafta Mavi ve Siyah Çiçekler — Fısıltılar", dialogue: [{ type: "whisper", text: '"Neden... neden yaşıyorum..."' }, { type: "whisper", text: '"Yalnızım... çok yalnızım..."' }, { type: "whisper", text: '"Kimse... kimse beni sevmedi..."' }] },
      { type: "closeup", scene: "Yuki Kulaklarını Kapatıyor — Ama Fısıltılar Yükseliyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Çok... çok fazla." }, { type: "say", speaker: "Ren", text: "Beni dinle! Gerçek olan benim. Sadece sesimi duy. Sadece... beni." }] },
      { type: "splash", scene: "Yuki Ren'in Sesine Odaklanıyor — Fısıltılar Dağılıyor — Ama Gözlerinden Yaşlar Akıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Ren... korkuyorum." }, { type: "say", speaker: "Ren", text: "Ben de. Ama birlikte korkarız." }] },
      { type: "normal", scene: "İlerliyorlar — Bir Ağacın Altında Bir Çiçek — Altın Renginde Ama Soluk", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu Altın Çiçek değil." }, { type: "say", speaker: "Ren", text: "Ama ona benziyor. Bir kopya olabilir." }, { type: "say", speaker: "Yuki", text: "Hayır. Bu... bir anı." }] },
      { type: "closeup", scene: "Yuki Çiçeğe Dokunuyor — Anı Patlıyor — Yaşlı Bir Adam — Yalnız Ölüyor", dialogue: [{ type: "whisper", text: '"Altın Çiçeği... buldum... ama... yalnızım..."' }, { type: "whisper", text: '"Kimse... kimse bilmeyecek..."' }] },
      { type: "normal", scene: "Yuki Geri Çekiliyor — Şok — Ama Anlıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu adam... Altın Çiçeği bulmuş. Ama... onu kullanmamış." }, { type: "say", speaker: "Ren", text: "Neden?" }, { type: "say", speaker: "Yuki", text: "Çünkü... çok yalnızmış. Ve... kimseyi geri getirmek istememiş." }] },
      { type: "splash", scene: "Aniden Bir Ses — Kuroi — Yanında Onlarca Toplayıcı — Ormanı Sarıyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "Ne kadar dokunaklı. Ama... bu hikaye burada bitiyor." }, { type: "say", speaker: "Yuki", text: "Kuroi... sen... sen hala pes etmedin mi?" }, { type: "say", speaker: "Kuroi", text: "Pes etmek mi? Ben... kızım için savaşıyorum." }] },
      { type: "closeup", scene: "Kuroi'nin Yüzü — Delilik — Ama Aynı Zamanda Acı", dialogue: [{ type: "say", speaker: "Kuroi", text: "Sen... sen annen gibisin. O da beni durdurmaya çalıştı. Ama başaramadı." }, { type: "say", speaker: "Yuki", text: "Ben... ben annem değilim. Ben... daha güçlüyüm." }] },
      { type: "splash", scene: "Yuki vs Kuroi — Beyaz Çiçek Kılıcı — Kamçı — Hızlı Dövüş — Ağaçlar Devriliyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu sefer... seni durduracağım!" }, { type: "say", speaker: "Kuroi", text: "Denemekten zarar gelmez!" }] },
      { type: "normal", scene: "Yuki Kuroi'yi Yere Seriyor — Ama Kuroi Kaçıyor — Sis İçinde Kayboluyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "Bu sefer... kazandın. Ama bir sonraki... ben kazanacağım." }, { type: "say", speaker: "Ren", text: "Yuki! Peşinden gidelim!" }, { type: "say", speaker: "Yuki", text: "Hayır. Bu... bir tuzak. Ve biz... daha önemli bir şey bulduk." }] },
      { type: "splash", scene: "Yuki Elinde Küçük Bir Parça — Altın Renkli — Kırık Bir Çiçek Parçası", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... Altın Çiçeğin bir parçası. Ve... bu parça... beni bir yere götürecek." }] }
    ]
  },

  21: {
    jp: "第21話", title: "Toplayıcılar Savaşı I",
    pages: [
      { type: "splash", scene: "Tokyo — Gece — Toplayıcılar Şehre Saldırıyor — Hayalet Çiçekler Sokaklarda", dialogue: [{ type: "inner", text: '"Savaş... şehre geldi. Toplayıcılar... her yerdeler. Ve biz... hazırlıksız yakalandık."' }] },
      { type: "normal", scene: "Dr. Kurosawa'nın Muayenehanesi — Harita — Saldırı Noktaları", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Toplayıcılar üç noktada saldırıyor. Shinjuku, Shibuya ve Yanaka." }, { type: "say", speaker: "Ren", text: "Yanaka... tapınak nerede." }, { type: "say", speaker: "Yuki", text: "O zaman... oraya gidiyorum." }] },
      { type: "closeup", scene: "Yuki ve Ren Ayrılıyor — Kararlılık", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... dikkatli ol." }, { type: "say", speaker: "Yuki", text: "Sen de. Ve... Ren." }, { type: "say", speaker: "Ren", text: "Hm?" }, { type: "say", speaker: "Yuki", text: "Dön. Bana dön." }] },
      { type: "splash", scene: "Yuki Yanaka'ya Gidiyor — Mezarlık Altı Tapınak — Kuroi Bekliyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "Hoş geldin. Seni bekliyordum." }, { type: "say", speaker: "Yuki", text: "Kuroi. Bu sefer... kaçmayacaksın." }, { type: "say", speaker: "Kuroi", text: "Kaçmak mı? Ben... kazanacağım." }] },
      { type: "normal", scene: "Tapınak İçi — İki Taraf Karşı Karşıya — Toplayıcılar vs Koruyucular", dialogue: [{ type: "say", speaker: "Kuroi", text: "Koruyucular... çok zayıf. Ve sen... onların lideri mi oldun?" }, { type: "say", speaker: "Yuki", text: "Hayır. Ben... onların umuduyum." }] },
      { type: "splash", scene: "Büyük Dövüş Başlıyor — Yuki Merkezde — Çiçek Kılıç vs Kamçı", dialogue: [{ type: "say", speaker: "Yuki", text: "SANA... DOKUNMA DEDİM!" }, { type: "say", speaker: "Kuroi", text: "O zaman... beni durdur!" }] },
      { type: "normal", scene: "Yuki Kuroi'yi İtiyor — Kuroi Dengesini Kaybediyor — Ama Yeni Bir Silah Çıkarıyor", dialogue: [{ type: "say", speaker: "Kuroi", text: "Bu... Altın Çiçek'ten yapılmış bir silah. Ve sen... onu yenemezsin." }, { type: "say", speaker: "Yuki", text: "Ama deneyeceğim." }] },
      { type: "splash", scene: "Yuki ve Kuroi Son Güçleriyle Çarpışıyor — Işık Patlaması — Tapınak Sallanıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "BEN... SENİ... DURDURACAĞIM!" }, { type: "say", speaker: "Kuroi", text: "YAPAMAZSIN!" }] },
      { type: "closeup", scene: "Yuki Kuroi'nin Silahını Kırıyor — Kuroi Şok — Yuki Kılıcını İndiriyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Seni... öldürmeyeceğim. Ama... seni durduracağım." }, { type: "say", speaker: "Kuroi", text: "Neden... neden beni öldürmüyorsun?" }, { type: "say", speaker: "Yuki", text: "Çünkü... sen de bir kurban. Tıpkı babam gibi." }] },
      { type: "splash", scene: "Kuroi Yere Çöküyor — Gözyaşları — Yuki Ona Bakıyor — Merhamet", dialogue: [{ type: "say", speaker: "Kuroi", text: "Kızım... kızım beni affetmez." }, { type: "say", speaker: "Yuki", text: "Belki. Ama... sen kendini affetmelisin." }] }
    ]
  },

  22: {
    jp: "第22話", title: "İlk Kan",
    pages: [
      { type: "splash", scene: "Shibuya — Gece — Ren Toplayıcılarla Savaşıyor — Yalnız — Kanlar İçinde", dialogue: [{ type: "inner", text: '"Yuki Yanaka\'da. Ben Shibuya\'da. Ve... yalnızım. Ama... onun için savaşıyorum."' }] },
      { type: "normal", scene: "Ren Bir Toplayıcıyı Alt Ediyor — Ama Arkasından Saldırı — Bıçak", dialogue: [{ type: "say", speaker: "Toplayıcı", text: "Sen... Tachibana'sın. Bahçıvan'ın sağ kolu." }, { type: "say", speaker: "Ren", text: "Ben... kimsenin sağ kolu değilim." }] },
      { type: "closeup", scene: "Ren Bıçakla Yaralanıyor — Ama Karşılık Veriyor — Toplayıcıyı Yere Seriyor", dialogue: [{ type: "say", speaker: "Ren", text: "Ben... kendi yolumu seçtim." }, { type: "say", speaker: "Toplayıcı", text: "O zaman... öl." }] },
      { type: "splash", scene: "Ren ve Toplayıcı Çarpışıyor — Ren Kazanıyor Ama Ağır Yaralı — Yerde Nefes Nefese", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... seni... görmem lazım." }] },
      { type: "normal", scene: "Yuki Yanaka'dan Dönüyor — Ren'i Buluyor — Kanlar İçinde", dialogue: [{ type: "say", speaker: "Yuki", text: "REN! REN, UYAN!" }, { type: "say", speaker: "Ren", text: "Yuki... sen... sen iyi misin?" }, { type: "say", speaker: "Yuki", text: "Ben iyiyim. Ama sen... sen yaralısın." }] },
      { type: "closeup", scene: "Yuki Ren'in Yarasını Sarıyor — Gözyaşları — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... ben... ben seni koruyamadım." }, { type: "say", speaker: "Yuki", text: "Hayır. Sen... sen benim için savaştın. Ve ben... senin için savaşacağım." }] },
      { type: "splash", scene: "Yuki Ren'i Sırtına Alıyor — Şafak — Tokyo Sokakları — Yürüyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Sana söylemiştim. Dön. Bana dön." }, { type: "say", speaker: "Ren", text: "Döndüm. Ama... senin sayende." }] },
      { type: "normal", scene: "Dr. Kurosawa'nın Muayenehanesi — Ren Yatakta — Yuki Başında", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yaraları ciddi ama... yaşayacak." }, { type: "say", speaker: "Yuki", text: "Teşekkür ederim." }, { type: "say", speaker: "Dr. Kurosawa", text: "Yuki... sen... sen birini öldürdün mü?" }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Ciddi — Ama Sakin", dialogue: [{ type: "say", speaker: "Yuki", text: "Hayır. Ama... öldürmek zorunda kalabilirdim. Ve... bunu yapardım." }, { type: "say", speaker: "Dr. Kurosawa", text: "O zaman... sen artık bir çocuk değilsin." }, { type: "say", speaker: "Yuki", text: "Hayır. Ben... bir Koruyucuyum." }] },
      { type: "splash", scene: "Yuki Pencereden Dışarı Bakıyor — Şafak — Tokyo — Kararlılık", dialogue: [{ type: "inner", text: '"Bu savaş... daha yeni başlıyor. Ve ben... hazırım."' }] }
    ]
  },

  23: {
    jp: "第23話", title: "Mio'nun Sırrı",
    pages: [
      { type: "splash", scene: "Mio Sakuraba — Yuki'nin Evi — Kapıda — Elinde Notlar ve Fotoğraflar", dialogue: [{ type: "say", speaker: "Mio", text: "Yuki! Sen... sen nerelerdeydin?! Haftalardır yoksun!" }, { type: "say", speaker: "Yuki", text: "Mio... ben... ben açıklayamam." }, { type: "say", speaker: "Mio", text: "Hayır. Bu sefer... seni dinleyeceğim. Ve... her şeyi anlatacaksın." }] },
      { type: "normal", scene: "Yuki'nin Evi — Oturma Odası — Mio ve Yuki Karşı Karşıya", dialogue: [{ type: "say", speaker: "Mio", text: "Bak. Ben... seni takip ettim. Ve... gördüklerim..." }, { type: "say", speaker: "Yuki", text: "Ne gördün?" }, { type: "say", speaker: "Mio", text: "Hayalet Çiçekler. Fısıltılar. Ve... senin onlarla konuştuğunu." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Şok — Ama Sonra Rahatlama", dialogue: [{ type: "say", speaker: "Yuki", text: "Yani... biliyorsun." }, { type: "say", speaker: "Mio", text: "Biliyorum. Ve... seni anlamak istiyorum." }, { type: "say", speaker: "Yuki", text: "Bu... çok uzun bir hikaye." }, { type: "say", speaker: "Mio", text: "Anlat. Tüm gece dinleyeceğim." }] },
      { type: "splash", scene: "Yuki Anlatmaya Başlıyor — Mio Dinliyor — Gözyaşları — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Ben... bir Kan'nōsha'yım. Hayalet Çiçekleri okuyabilirim. Ve... babam... bir canavardı." }, { type: "say", speaker: "Mio", text: "Yuki..." }] },
      { type: "normal", scene: "Mio Yuki'ye Sarılıyor — Gözyaşları — Sessizlik", dialogue: [{ type: "say", speaker: "Mio", text: "Sen... sen yalnız değilsin. Ben... ben buradayım." }, { type: "say", speaker: "Yuki", text: "Ama... bu tehlikeli. Sen... sen zarar görebilirsin." }, { type: "say", speaker: "Mio", text: "Umurumda değil. Sen... benim en iyi arkadaşımsın." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Gözyaşı — Ama Mutluluk", dialogue: [{ type: "say", speaker: "Yuki", text: "Teşekkür ederim, Mio. Bu... bu çok şey ifade ediyor." }, { type: "say", speaker: "Mio", text: "O zaman bana da öğret. Bu dünyada ben de varım." }] },
      { type: "splash", scene: "Mio ve Yuki — Yan Yana — Şafak — Yeni Bir Başlangıç", dialogue: [{ type: "say", speaker: "Mio", text: "Bir gazeteci olarak... gerçeği yazmak zorundayım. Ama önce... senin yanında olmak istiyorum." }, { type: "say", speaker: "Yuki", text: "O zaman... hoş geldin. Karanlık bahçeye." }] },
      { type: "normal", scene: "Ren Kapıda — Yeni Uyanmış — Mio ve Yuki'yi Görüyor", dialogue: [{ type: "say", speaker: "Ren", text: "Mio... sen... burada mısın?" }, { type: "say", speaker: "Mio", text: "Evet. Ve... artık bir parçayım." }, { type: "say", speaker: "Yuki", text: "Ren... Mio her şeyi biliyor." }] },
      { type: "closeup", scene: "Ren'in Yüzü — Şaşkın — Ama Sonra Rahatlama", dialogue: [{ type: "say", speaker: "Ren", text: "O zaman... üçümüz. Daha güçlüyüz." }, { type: "say", speaker: "Yuki", text: "Evet. Üçümüz." }] }
    ]
  },

  24: {
    jp: "第24話", title: "Dayı",
    pages: [
      { type: "splash", scene: "Dr. Kurosawa'nın Muayenehanesi — Gece — Dr. Kurosawa ve Yuki — Yalnız", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yuki... sana bir şey söylemem lazım. Gerçek kimliğim hakkında." }, { type: "say", speaker: "Yuki", text: "Sen... sen benim dayımsın. Bunu biliyorum." }, { type: "say", speaker: "Dr. Kurosawa", text: "Evet. Ama... daha fazlası var." }] },
      { type: "normal", scene: "Dr. Kurosawa Bir Fotoğraf Çıkarıyor — Genç Yuriko ve Genç Kendisi — Koruyucular Tapınağı", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Ben... bir zamanlar Koruyucuydum. Yuriko'nun kardeşi. Ve... onunla birlikte eğitim aldım." }, { type: "say", speaker: "Yuki", text: "Neden bıraktın?" }, { type: "say", speaker: "Dr. Kurosawa", text: "Çünkü... korktum. Ve... annen öldüğünde... kaçtım." }] },
      { type: "closeup", scene: "Dr. Kurosawa'nın Gözleri — Gözyaşları — Suçluluk", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "O gece... ben de oradaydım. Ama... hiçbir şey yapamadım. Korktum." }, { type: "say", speaker: "Yuki", text: "Dayı..." }, { type: "say", speaker: "Dr. Kurosawa", text: "Ve o günden beri... kendimi affetmedim." }] },
      { type: "splash", scene: "Geriye Dönüş — Yanan Ev — Genç Dr. Kurosawa Dışarıda — Yuriko İçeride", dialogue: [{ type: "say", speaker: "Genç Kurosawa", text: "Yuriko! Çık dışarı!" }, { type: "say", speaker: "Yuriko (ses)", text: "Kenji! Yuki'yi al ve kaç! Onu koru!" }] },
      { type: "normal", scene: "Genç Kurosawa Küçük Yuki'yi Kucaklıyor — Ama Geri Dönemiyor — Alevler", dialogue: [{ type: "say", speaker: "Genç Kurosawa", text: "Hayır... hayır, seni bırakmayacağım!" }, { type: "say", speaker: "Yuriko (ses)", text: "Kenji... kaç. Yuki'yi koru. Bu... benim son isteğim." }] },
      { type: "splash", scene: "Şimdiki Zaman — Yuki ve Dr. Kurosawa — Sarılıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "Dayı... sen elinden geleni yaptın." }, { type: "say", speaker: "Dr. Kurosawa", text: "Hayır. Yapmadım. Ama şimdi... seni koruyacağım." }, { type: "say", speaker: "Yuki", text: "O zaman... birlikte savaşalım. Annem için. Babam için. Ve... kendimiz için." }] },
      { type: "normal", scene: "Ren ve Mio İçeri Giriyor — Aile Tamamlanıyor", dialogue: [{ type: "say", speaker: "Ren", text: "Biz... bir şey mi kaçırdık?" }, { type: "say", speaker: "Mio", text: "Sanırım... bir aile anı." }, { type: "say", speaker: "Yuki", text: "Evet. Ve... artık yalnız değilim." }] },
      { type: "splash", scene: "Dörtlü — Yuki, Ren, Mio ve Dr. Kurosawa — Yan Yana — Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Toplayıcılar... Kuroi... ve o gizli lider. Hepsi... bizi bekliyor." }, { type: "say", speaker: "Ren", text: "O zaman... onları bulalım." }, { type: "say", speaker: "Mio", text: "Ve... gerçeği ortaya çıkaralım." }] }
    ]
  },

  25: {
    jp: "第25話", title: "Gin'in Vedası",
    pages: [
      { type: "splash", scene: "Karanlık Pazar — Yanmış — Yıkılmış — Yuki ve Ren Geliyor", dialogue: [{ type: "inner", text: '"Karanlık Pazar... yok oldu. Gin... Gin nerede?"' }] },
      { type: "normal", scene: "Yuki ve Ren Enkaz Arasında — Gin'i Arıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Gin! GIN!" }, { type: "say", speaker: "Ren", text: "Yuki... burada bir şey var." }] },
      { type: "closeup", scene: "Gin — Enkaz Altında — Zayıf — Ama Gülümsüyor", dialogue: [{ type: "say", speaker: "Gin", text: "Yuki... geldin." }, { type: "say", speaker: "Yuki", text: "Gin! Seni kurtaracağım!" }, { type: "say", speaker: "Gin", text: "Hayır. Ben... ben gidiyorum. Ama... sana bir şey söylemeliyim." }] },
      { type: "splash", scene: "Gin Yuki'nin Elini Tutuyor — Gözleri Kapalı — Ama Huzurlu", dialogue: [{ type: "say", speaker: "Gin", text: "Yuki... annen... benim öğrencimdi. Ve... sen... sen onun kızısın. Sen... sen her şeyi başarabilirsin." }, { type: "say", speaker: "Yuki", text: "Gin... gitme." }, { type: "say", speaker: "Gin", text: "Gitmeliyim. Ama... sen... sen yaşa. Benim için. Annen için." }] },
      { type: "normal", scene: "Gin Son Nefesini Veriyor — Yuki Onu Kucaklıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "GIN! GIN, KALK!" }, { type: "say", speaker: "Ren", text: "Yuki... o gitti." }, { type: "say", speaker: "Yuki", text: "Hayır... hayır o gidemez. O... o benim ailemdi." }] },
      { type: "closeup", scene: "Gin'in Elinde Bir Anahtar — Yuki'ye Uzatıyor — Son Hareket", dialogue: [{ type: "say", speaker: "Gin (son söz)", text: "Bu... bu anahtar. Altın Çiçeğin bulunduğu mağaranın anahtarı. Fuji Dağı'nın altında." }, { type: "say", speaker: "Yuki", text: "Gin..." }, { type: "say", speaker: "Gin (son söz)", text: "Yuriko... kızına iyi bak." }] },
      { type: "splash", scene: "Gin Ölüyor — Yuki Anahtarı Tutuyor — Gözyaşları — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Gin... söz veriyorum. Bu savaşı kazanacağım." }, { type: "say", speaker: "Ren", text: "Yuki... gel. Buradan gitmeliyiz." }] },
      { type: "normal", scene: "Yuki ve Ren Karanlık Pazar'dan Ayrılıyor — Gin'in Bedeni Arkada", dialogue: [{ type: "say", speaker: "Yuki", text: "Ren... Gin... o benim ailemdi. Tıpkı senin gibi. Tıpkı annem gibi." }, { type: "say", speaker: "Ren", text: "Biliyorum. Ve... onun için savaşacağız." }] },
      { type: "splash", scene: "Yuki ve Ren — Şafak — Tokyo — Yeni Bir Yol — Fuji Dağı Uzakta", dialogue: [{ type: "inner", text: '"Gin... son sözünü unutmayacağım. Ve... Altın Çiçeği bulacağım. Senin için."' }] }
    ]
  },

  26: {
    jp: "第26話", title: "Babanın Kalbi",
    pages: [
      { type: "splash", scene: "Yuki ve Ren — Yolculuk — Fuji Dağı'na Doğru — Tren İçi", dialogue: [{ type: "inner", text: '"Fuji Dağı\'na gidiyoruz. Altın Çiçeği bulacağız. Ama önce... babamın geçmişini anlamam lazım."' }] },
      { type: "normal", scene: "Yuki Bir Hayalet Çiçek Çıkarıyor — Bahçıvan'ın Anısı — Onu Okumaya Karar Veriyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... babamın anısı. Ölümünden önce... ona dokunduğumda... bu çiçek oluştu." }, { type: "say", speaker: "Ren", text: "Onu okumak... tehlikeli olabilir." }, { type: "say", speaker: "Yuki", text: "Biliyorum. Ama... babamı anlamam lazım." }] },
      { type: "closeup", scene: "Yuki Çiçeğe Dokunuyor — Anı Patlıyor — Genç Sōren — Yuriko'nun Mezarında", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Seni geri getireceğim. Ne olursa olsun. Bu dünyayı yakacağım... ama seni geri getireceğim." }] },
      { type: "splash", scene: "Genç Sōren Laboratuvarda — Yasak Deneyler — Çiçekler — Kan — Delilik", dialogue: [{ type: "say", speaker: "Genç Sōren", text: "Yuriko... seni bulacağım. Altın Çiçek... seni bana getirecek." }, { type: "say", speaker: "Genç Sōren (ses)", text: "Ve o gün... Yuki'yi de kurtaracağım." }] },
      { type: "normal", scene: "Geriye Dönüş — Sōren ve Küçük Yuki — Bahçede — Çiçekler", dialogue: [{ type: "say", speaker: "Küçük Yuki", text: "Baba... bu çiçek ne?" }, { type: "say", speaker: "Sōren", text: "Bu... bir anı çiçeği. Ama... sen onu görmemelisin." }, { type: "say", speaker: "Küçük Yuki", text: "Neden?" }, { type: "say", speaker: "Sōren", text: "Çünkü... bazı anılar... çok acıtır." }] },
      { type: "closeup", scene: "Şimdiki Zaman — Yuki Gözlerini Açıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "Babam... o... o beni korumaya çalışıyordu. Ama... yöntemi yanlıştı." }, { type: "say", speaker: "Ren", text: "Yuki..." }, { type: "say", speaker: "Yuki", text: "Ama... onu affediyorum. Çünkü... o da bir kurban." }] },
      { type: "splash", scene: "Yuki Ayağa Kalkıyor — Kararlılık — Fuji Dağı Yaklaşıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Artık... babamın intikamını almayacağım. Onun yerine... onun adına savaşacağım." }, { type: "say", speaker: "Ren", text: "Ne için?" }, { type: "say", speaker: "Yuki", text: "Barış için. Ve... ailem için." }] },
      { type: "normal", scene: "Tren Duruyor — Fuji İstasyonu — Yuki ve Ren İniyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Fuji Dağı. Altın Çiçek... burada." }, { type: "say", speaker: "Ren", text: "Ve... Toplayıcılar da burada." }, { type: "say", speaker: "Yuki", text: "Biliyorum. Ama... hazırım." }] },
      { type: "splash", scene: "Fuji Dağı — Sis — Mağara Girişi — Yuki ve Ren — Kararlılık", dialogue: [{ type: "inner", text: '"Bu... son savaş. Ve ben... kazanacağım."' }] }
    ]
  },

  27: {
    jp: "第27話", title: "Altın Çiçeğin Peşinde I",
    pages: [
      { type: "splash", scene: "Fuji Dağı — Mağara Girişi — Karanlık — Yuki ve Ren — Fenerler", dialogue: [{ type: "inner", text: '"Mağara... çok karanlık. Ve... çok soğuk. Ama... burada bir şey var. Bir şey... beni çağırıyor."' }] },
      { type: "normal", scene: "Mağara İçi — Duvarlarda Eski Çizimler — Altın Çiçek Sembolleri", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu çizimler... çok eski. Belki... yüzyıllar önce." }, { type: "say", speaker: "Ren", text: "Bunlar... Altın Çiçeği anlatıyor." }, { type: "say", speaker: "Yuki", text: "Evet. Ve... bir uyarı." }] },
      { type: "closeup", scene: "Duvardaki Yazı — Eski Japonca — Yuki Okuyor", dialogue: [{ type: "say", speaker: "Yuki", text: "'Altın Çiçek... sadece bir kez açar. Ve onu kullanan... asla geri dönemez.'" }, { type: "say", speaker: "Ren", text: "Yani... onu kullanmak... seni öldürür." }, { type: "say", speaker: "Yuki", text: "Evet. Ama... belki başka bir yol vardır." }] },
      { type: "splash", scene: "Mağara Derinleşiyor — Büyük Bir Oda — Ortada Altın Çiçek — Işık Saçıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu o. Altın Çiçek." }, { type: "say", speaker: "Ren", text: "Çok güzel... ama... çok tehlikeli." }] },
      { type: "normal", scene: "Yuki Altın Çiçeğe Yaklaşıyor — Ama Bir Ses Onu Durduruyor", dialogue: [{ type: "say", speaker: "Gizli Ses", text: "Hoş geldin, Yuki Ayanokōji. Sonunda... buluştuk." }, { type: "say", speaker: "Yuki", text: "Sen... kimsin?" }, { type: "say", speaker: "Gizli Ses", text: "Ben... Toplayıcıların lideriyim. Ve... senin kaderin." }] },
      { type: "closeup", scene: "Gölgelerden Bir Figür Çıkıyor — Yüzü Görünmüyor — Ama Sesi Tanıdık", dialogue: [{ type: "say", speaker: "Gizli Ses", text: "Ben... Ne'nin kardeşiyim. Ve... senin annenin ölümünden sorumlu olan kişi." }, { type: "say", speaker: "Yuki", text: "Ne?!" }, { type: "say", speaker: "Gizli Ses", text: "Evet. Ben... Yuriko'yu öldürdüm. Ve şimdi... seni de öldüreceğim." }] },
      { type: "splash", scene: "Gizli Figür Saldırıyor — Yuki Karşılık Veriyor — Mağara Sallanıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "SEN... SEN ANNEMİ ÖLDÜRDÜN!" }, { type: "say", speaker: "Gizli Figür", text: "Evet. Ve... şimdi seni de öldüreceğim." }] },
      { type: "normal", scene: "Yuki ve Gizli Figür Çarpışıyor — Yuki Güçlü — Ama Figür Daha Güçlü", dialogue: [{ type: "say", speaker: "Yuki", text: "Sen... sen kimsin?!" }, { type: "say", speaker: "Gizli Figür", text: "Ben... Ayanokōji Sōren'in kardeşiyim. Senin... amcan." }, { type: "say", speaker: "Yuki", text: "Ne?!" }] },
      { type: "splash", scene: "Amca Yüzünü Gösteriyor — Bahçıvan'a Benziyor — Ama Daha Karanlık — Yuki Şok", dialogue: [{ type: "say", speaker: "Amca", text: "Evet. Ben... Sōren'in kardeşiyim. Ve... ben de Altın Çiçeği istiyorum. Ama... farklı bir amaçla." }, { type: "say", speaker: "Yuki", text: "Ne... ne istiyorsun?" }, { type: "say", speaker: "Amca", text: "Dünyayı... ölülerden temizlemek. Tüm Hayalet Çiçekleri yok etmek. Ve... senin gibi Kan'nōsha'ları da." }] }
    ]
  },

  28: {
    jp: "第28話", title: "Altın Çiçeğin Peşinde II",
    pages: [
      { type: "splash", scene: "Mağara — Yuki ve Amca — Karşı Karşıya — Ren Arada", dialogue: [{ type: "say", speaker: "Amca", text: "Sen... sen annen gibi zayıfsın. O da beni durdurmaya çalıştı. Ama başaramadı." }, { type: "say", speaker: "Yuki", text: "Ben... ben annem değilim. Ben... daha güçlüyüm." }, { type: "say", speaker: "Amca", text: "O zaman... kanıtla." }] },
      { type: "normal", scene: "Büyük Dövüş — Yuki vs Amca — Çiçek Kılıç vs Karanlık Güç", dialogue: [{ type: "say", speaker: "Yuki", text: "SANA... DOKUNMA DEDİM!" }, { type: "say", speaker: "Amca", text: "Bu... çok zayıf." }] },
      { type: "closeup", scene: "Amca Yuki'yi Yere Seriyor — Yuki Nefes Nefese — Ama Ayağa Kalkıyor", dialogue: [{ type: "say", speaker: "Amca", text: "Gördün mü? Zayıfsın." }, { type: "say", speaker: "Yuki", text: "Hayır. Ben... daha yeni başlıyorum." }] },
      { type: "splash", scene: "Yuki Beyaz Çiçeği Kullanıyor — Tüm Anıları Okuyor — Güç Patlaması", dialogue: [{ type: "inner", text: '"Anne... baba... Hana... Gin... Ne... Hepiniz... benimle."' }] },
      { type: "normal", scene: "Yuki Amca'yı Yere Seriyor — Amca Şok — Yuki Kılıcını İndiriyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Seni... öldürmeyeceğim. Çünkü... ben annemim kızıyım. Ve o... asla öldürmezdi." }, { type: "say", speaker: "Amca", text: "O zaman... sen de zayıfsın." }, { type: "say", speaker: "Yuki", text: "Hayır. Ben... merhametliyim." }] },
      { type: "splash", scene: "Altın Çiçek — Yuki ve Amca — Aralarında — Işık Patlaması", dialogue: [{ type: "say", speaker: "Altın Çiçek (ses)", text: "Yuki... beni kullanmak istiyor musun?" }, { type: "say", speaker: "Yuki", text: "Hayır. Ben... seni korumak istiyorum." }, { type: "say", speaker: "Altın Çiçek (ses)", text: "O zaman... beni yok et. Yoksa... herkes ölecek." }] },
      { type: "normal", scene: "Yuki Altın Çiçeği Tutuyor — Ama Kullanmıyor — Amca Şok", dialogue: [{ type: "say", speaker: "Amca", text: "Ne... ne yapıyorsun?!" }, { type: "say", speaker: "Yuki", text: "Ben... bu çiçeği yok etmeyeceğim. Ama... kullanmayacağım da." }, { type: "say", speaker: "Amca", text: "O zaman... ne yapacaksın?" }] },
      { type: "splash", scene: "Yuki Altın Çiçeği Yere Bırakıyor — Ve Ona Dokunuyor — Anı Patlaması", dialogue: [{ type: "say", speaker: "Yuki", text: "Onun anısını okuyacağım. Ve... onun gerçek amacını öğreneceğim." }] },
      { type: "closeup", scene: "Yuki Anıyı Okuyor — Altın Çiçeğin Geçmişi — İlk Kan'nōsha — İlk Koruyucu", dialogue: [{ type: "say", speaker: "Altın Çiçek (anıdan)", text: "Ben... ilk Kan'nōsha tarafından yaratıldım. Amaç... ölüleri geri getirmek değil. Amaç... onları korumak." }, { type: "say", speaker: "Yuki", text: "Yani... sen bir koruyucusun." }, { type: "say", speaker: "Altın Çiçek (anıdan)", text: "Evet. Ve... sen... benim yeni koruyucum olacaksın." }] }
    ]
  },

  29: {
    jp: "第29話", title: "Fuji Dağı",
    pages: [
      { type: "splash", scene: "Mağara — Yuki Altın Çiçeği Tutuyor — Amca Şok — Işık Patlaması", dialogue: [{ type: "say", speaker: "Yuki", text: "Altın Çiçek... beni seçti. Ben... onun yeni koruyucusuyum." }, { type: "say", speaker: "Amca", text: "Hayır... hayır bu imkansız!" }, { type: "say", speaker: "Yuki", text: "Sen... sen annemi öldürdün. Ve şimdi... seni durduracağım." }] },
      { type: "normal", scene: "Yuki vs Amca — Son Dövüş — Yuki Güçlü — Amca Zayıflıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... annem için. Babam için. Hana için. Ve... Gin için." }, { type: "say", speaker: "Amca", text: "Sen... sen gerçekten... güçlüsün." }] },
      { type: "closeup", scene: "Amca Yere Düşüyor — Yuki Kılıcını İndiriyor — Ama Öldürmüyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Seni... öldürmeyeceğim. Ama... seni durduracağım." }, { type: "say", speaker: "Amca", text: "Neden... neden beni öldürmüyorsun?" }, { type: "say", speaker: "Yuki", text: "Çünkü... sen de bir kurban. Tıpkı babam gibi." }] },
      { type: "splash", scene: "Yuki Altın Çiçeği Kullanıyor — Işık Patlaması — Amca'nın Karanlığı Dağılıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Altın Çiçek... onun karanlığını temizle." }, { type: "say", speaker: "Altın Çiçek (ses)", text: "Emredersin, Koruyucu." }] },
      { type: "normal", scene: "Amca — Gözleri Açılıyor — Karanlık Gidiyor — Ağlıyor", dialogue: [{ type: "say", speaker: "Amca", text: "Yuki... ben... ben ne yaptım?" }, { type: "say", speaker: "Yuki", text: "Şimdi... kendini affetmelisin. Tıpkı babam gibi." }, { type: "say", speaker: "Amca", text: "Affedebilir miyim?" }, { type: "say", speaker: "Yuki", text: "Belki. Ama... önce... yaşamalısın." }] },
      { type: "splash", scene: "Yuki ve Ren Mağaradan Çıkıyor — Fuji Dağı — Şafak — Altın Çiçek Parlıyor", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... başardın." }, { type: "say", speaker: "Yuki", text: "Hayır. Biz... başardık." }, { type: "say", speaker: "Ren", text: "Ve... şimdi ne olacak?" }] },
      { type: "normal", scene: "Yuki Altın Çiçeği Gökyüzüne Kaldırıyor — Işık — Dünya — Barış", dialogue: [{ type: "say", speaker: "Yuki", text: "Şimdi... yeni bir başlangıç. Hayalet Çiçekler... artık korunacak. Ve... Kan'nōsha'lar... artık yalnız olmayacak." }] },
      { type: "splash", scene: "Yuki ve Ren — Fuji Dağı'ndan Aşağı İniyor — Tokyo — Yeni Bir Yol", dialogue: [{ type: "inner", text: '"Arc 3... sona erdi. Altın Çiçek... artık bende. Ve... artık... yalnız değilim."' }] }
    ]
  },

    30: {
    jp: "第30話", title: "Seçim",
    pages: [
      { type: "splash", scene: "Tokyo — Dr. Kurosawa'nın Muayenehanesi — Yuki ve Ren — Altın Çiçek Masada", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yuki... Altın Çiçek... seni seçti. Ve... bu büyük bir sorumluluk." }, { type: "say", speaker: "Yuki", text: "Biliyorum. Ama... hazırım." }, { type: "say", speaker: "Dr. Kurosawa", text: "Peki... şimdi ne yapacaksın?" }] },
      { type: "normal", scene: "Yuki Altın Çiçeği Tutuyor — Kararlılık — Gözlerinde Işık", dialogue: [{ type: "say", speaker: "Yuki", text: "Ben... Altın Çiçeği kullanmayacağım. Ama... onu koruyacağım." }, { type: "say", speaker: "Ren", text: "Neden kullanmıyorsun?" }, { type: "say", speaker: "Yuki", text: "Çünkü... ölüler geri gelmez. Ve... onları geri getirmeye çalışmak... her şeyi mahveder." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Gözyaşı — Ama Kararlılık", dialogue: [{ type: "say", speaker: "Yuki", text: "Annem... babam... Hana... Gin... Onlar... artık yok. Ama... kalbimde yaşıyorlar." }, { type: "say", speaker: "Ren", text: "Yuki..." }, { type: "say", speaker: "Yuki", text: "Ve ben... onların anılarını onurlandıracağım. Ama... onları geri getirmeyeceğim." }] },
      { type: "splash", scene: "Yuki Altın Çiçeği Bir Kutuya Koyuyor — Kilitliyor — Ve Anahtarı Saklıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... artık bir koruma. Bir silah değil." }, { type: "say", speaker: "Dr. Kurosawa", text: "Ama... bir gün... birileri onu bulabilir." }, { type: "say", speaker: "Yuki", text: "O zaman... onu koruyacağım. Tıpkı annemin beni koruduğu gibi." }] },
      { type: "normal", scene: "Ren ve Mio İçeri Giriyor — Hep Birlikte — Aile", dialogue: [{ type: "say", speaker: "Mio", text: "Peki... şimdi ne olacak?" }, { type: "say", speaker: "Yuki", text: "Şimdi... yeni bir başlangıç. Koruyucular... yeniden inşa edilecek. Ve... Kan'nōsha'lar eğitilecek." }, { type: "say", speaker: "Ren", text: "Ve biz?" }, { type: "say", speaker: "Yuki", text: "Biz... birlikte olacağız. Her zaman." }] },
      { type: "splash", scene: "Dörtlü — Yuki, Ren, Mio ve Dr. Kurosawa — Yan Yana — Şafak — Tokyo", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... sadece bir başlangıç. Ve... daha çok savaş var. Ama... artık hazırım." }, { type: "say", speaker: "Ren", text: "Ben de." }, { type: "say", speaker: "Mio", text: "Ben de." }, { type: "say", speaker: "Dr. Kurosawa", text: "Ben de." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Gülümseme — Umut", dialogue: [{ type: "inner", text: '"Arc 3... sona erdi. Ve... ben... hala ayaktayım. Ama... hikaye... daha bitmedi."' }] },
      { type: "splash", scene: "幽霊花 — Arc 3: Altın Çiçek — SON — Arc 4: Kırık Anılar Yakında", dialogue: [] }
    ]
  },

  // ============================================
  // ARC 4: KIRIK ANILAR (31-40)
  // ============================================

  31: {
    jp: "第31話", title: "Baba ve Kız",
    pages: [
      { type: "splash", scene: "Yeni Koruyucu Tapınağı — Yanaka Mezarlığı Altı — Yuki ve Sōren Karşı Karşıya — İlk Kez Barış İçinde", dialogue: [{ type: "inner", text: '"Altın Çiçek\'ten bir hafta sonra... babam ve ben... ilk kez aynı çatı altında yaşıyoruz."' }] },
      { type: "normal", scene: "Tapınak İçi — Yuki ve Sōren Oturuyor — Aralarında Çay — Sessizlik", dialogue: [{ type: "say", speaker: "Sōren", text: "Yuki... seni rahatsız ediyor muyum?" }, { type: "say", speaker: "Yuki", text: "Bilmiyorum. Ama... alışmaya çalışıyorum." }, { type: "say", speaker: "Sōren", text: "Biliyorum. Bana zaman ver." }] },
      { type: "closeup", scene: "Sōren'in Elleri — Titriyor — Çay Fincanını Tutuyor", dialogue: [{ type: "say", speaker: "Sōren", text: "12 yıl... 12 yıl seni kaybettim. Ve şimdi... şimdi seni buldum." }, { type: "say", speaker: "Yuki", text: "Sen beni kaybetmedin. Sen beni bıraktın." }] },
      { type: "normal", scene: "Sōren Başını Öne Eğiyor — Suçluluk", dialogue: [{ type: "say", speaker: "Sōren", text: "Haklısın. Ben... ben çok kötü bir babaydım." }, { type: "say", speaker: "Yuki", text: "Evet. Ama... belki hala bir baba olabilirsin. Eğer denersen." }] },
      { type: "splash", scene: "Sabah — Tapınak Bahçesi — Yuki ve Sōren Yan Yana — Antrenman Yapıyorlar", dialogue: [{ type: "say", speaker: "Sōren", text: "Bu hareketi düzelt. Annen de böyle yapardı." }, { type: "say", speaker: "Yuki", text: "Annen mi öğretti?" }, { type: "say", speaker: "Sōren", text: "Evet. O... o herkesten güçlüydü." }] },
      { type: "closeup", scene: "Sōren'in Yüzü — Gözyaşı — Gülümseme", dialogue: [{ type: "say", speaker: "Sōren", text: "Sen de onun gibisin. Ama daha iyisin." }, { type: "say", speaker: "Yuki", text: "Nasıl bu kadar emin olabiliyorsun?" }, { type: "say", speaker: "Sōren", text: "Çünkü... beni affettin. O... o affedemezdi." }] },
      { type: "normal", scene: "Tapınak — Ren ve Mio İçeri Giriyor — Yuki ve Sōren'i Görüyorlar", dialogue: [{ type: "say", speaker: "Mio", text: "Vay. Baba-kız antrenmanı mı?" }, { type: "say", speaker: "Ren", text: "İyi görünüyorsunuz." }, { type: "say", speaker: "Yuki", text: "Teşekkürler. Ama... hala garip." }] },
      { type: "splash", scene: "Akşam — Tapınak Sofrası — Dört Kişi Yemek Yiyor — İlk Kez Aile Gibi", dialogue: [{ type: "say", speaker: "Sōren", text: "Bu yemeği... Yuriko yapardı." }, { type: "say", speaker: "Yuki", text: "Biliyorum. Tarifini Mio buldu." }, { type: "say", speaker: "Mio", text: "İnternetten. Kolay oldu." }, { type: "say", speaker: "Ren", text: "Yalan söylüyor. 3 gün arşiv taradı." }] },
      { type: "closeup", scene: "Yuki Gülümsüyor — İlk Kez Mutlu", dialogue: [{ type: "inner", text: '"Belki... belki bir aile olabiliriz. Belki... belki her şey düzelebilir."' }] },
      { type: "splash", scene: "Gece — Yuki Pencereden Dışarı Bakıyor — Ay Işığı — Ama Bir Gölge Uzakta", dialogue: [{ type: "inner", text: '"Ama... içimde bir his var. Bir şey... kötü bir şey... yaklaşıyor."' }] }
    ]
  },

  32: {
    jp: "第32話", title: "Sessiz Akşam Yemeği",
    pages: [
      { type: "splash", scene: "Tapınak — Akşam — Yuki, Ren, Sōren ve Mio Sofrada — Sessizlik — Ama Huzurlu", dialogue: [{ type: "say", speaker: "Mio", text: "Bugün bir şey buldum. Gazete arşivinde." }, { type: "say", speaker: "Yuki", text: "Ne buldun?" }, { type: "say", speaker: "Mio", text: "12 yıl önceki yangın haberi. Ama... detaylar eksik." }] },
      { type: "normal", scene: "Mio Gazete Kupürünü Çıkarıyor — 'Ayanokōji Evi Yangını — Anne Öldü, Baba Kayıp'", dialogue: [{ type: "say", speaker: "Mio", text: "Burada 'baba kayıp' yazıyor. Ama... sen 12 yıldır neredeydin, Sōren?" }, { type: "say", speaker: "Sōren", text: "Ben... ben dağlarda saklandım. Kuroi beni arıyordu." }, { type: "say", speaker: "Yuki", text: "Neden Kuroi seni arıyordu?" }] },
      { type: "closeup", scene: "Sōren'in Yüzü — Suçluluk — Gözlerini Kaçırıyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Çünkü... ben Kuroi'nin kızını öldürdüm." }, { type: "say", speaker: "Yuki", text: "NE?!" }, { type: "say", speaker: "Ren", text: "Bekle. Bu... bu doğru mu?" }] },
      { type: "splash", scene: "Geriye Dönüş — 15 Yıl Önce — Genç Sōren ve Kuroi — Bir Kız Çocuğu — Hastane", dialogue: [{ type: "say", speaker: "Genç Kuroi", text: "Kızım ölüyor! Onu kurtarmalısın!" }, { type: "say", speaker: "Genç Sōren", text: "Yapamam. Yasak." }, { type: "say", speaker: "Genç Kuroi", text: "SEN... SEN ONU ÖLDÜRDÜN!" }] },
      { type: "normal", scene: "Şimdiki Zaman — Sōren Gözlerinden Yaşlar Akıyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Kuroi'nin kızı... bir Hayalet Çiçek hastalığına yakalanmıştı. Kızını kurtarmak için beni buldu. Ama ben... ben ona yardım etmedim." }, { type: "say", speaker: "Yuki", text: "Neden?" }, { type: "say", speaker: "Sōren", text: "Çünkü... o zamanlar Altın Çiçeği arıyordum. Ve kural vardı: Yasak." }] },
      { type: "closeup", scene: "Sōren Ellerini Yüzüne Kapatıyor — Yıkım", dialogue: [{ type: "say", speaker: "Sōren", text: "O günden sonra... Kuroi karanlığa düştü. Benim yüzümden. Ve ben... ben de onu durduramadım." }, { type: "say", speaker: "Yuki", text: "Yani... Kuroi'nin intikamı... senin yüzünden mi?" }, { type: "say", speaker: "Sōren", text: "Evet. Her şey... benim yüzümden." }] },
      { type: "splash", scene: "Yuki Ayağa Kalkıyor — Öfke ve Anlayış Karışımı", dialogue: [{ type: "say", speaker: "Yuki", text: "Sen... sen her şeyi mahvettin. Annemi. Hana'yı. Kuroi'yi. Herkesi." }, { type: "say", speaker: "Sōren", text: "Biliyorum." }, { type: "say", speaker: "Yuki", text: "Ama... ama sen benim babamsın. Ve... ve seni affetmek zorundayım. Çünkü... çünkü annem öyle isterdi." }] },
      { type: "closeup", scene: "Sōren ve Yuki — Sarılıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Sōren", text: "Yuki... ben... ben seni hak etmiyorum." }, { type: "say", speaker: "Yuki", text: "Hayır. Hak etmiyorsun. Ama... sana bir şans veriyorum. Tıpkı annemin verdiği gibi." }] },
      { type: "splash", scene: "Mio ve Ren İzliyor — Duygusal Bir An", dialogue: [{ type: "say", speaker: "Mio (fısıltıyla)", text: "Bu... bu çok ağır." }, { type: "say", speaker: "Ren (fısıltıyla)", text: "Evet. Ama... iyileşme başlıyor." }] }
    ]
  },

  33: {
    jp: "第33話", title: "Geçmişin Hayaletleri",
    pages: [
      { type: "splash", scene: "Tapınak Kütüphanesi — Yuki Eski Belgeleri İnceliyor — Tozlu Raflar", dialogue: [{ type: "inner", text: '"Babamın itirafından sonra... gerçeği öğrenmem lazım. Kuroi\'nin kızı... onun adı... Hana değildi ama... başka bir Hana daha var mıydı?"' }] },
      { type: "normal", scene: "Yuki Bir Belge Buluyor — 'Kuroi Ailesi Kayıtları'", dialogue: [{ type: "say", speaker: "Yuki", text: "Kuroi... Kuroi Sakura. Kızı... Kuroi Yumi. 15 yıl önce öldü. Yaş: 12." }, { type: "say", speaker: "Ren", text: "Yumi mi? Bu isim... bir yerde duydum." }] },
      { type: "closeup", scene: "Ren'in Yüzü — Şok — Tanıma", dialogue: [{ type: "say", speaker: "Ren", text: "Hana'nın çizim defterinde... bir kız çizimi vardı. Adı Yumi yazıyordu. Ama ben onu tanımıyordum." }, { type: "say", speaker: "Yuki", text: "Hana... Kuroi'nin kızını tanıyor muydu?" }, { type: "say", speaker: "Ren", text: "Bilmiyorum. Ama... belki." }] },
      { type: "splash", scene: "Geriye Dönüş — 3 Yıl Önce — Hana ve Yumi — Hastane Odası — İki Kız", dialogue: [{ type: "say", speaker: "Hana", text: "Yumi... iyileşeceksin. Söz veriyorum." }, { type: "say", speaker: "Yumi", text: "Hayır... hayır iyileşmeyeceğim. Ama... sen benim için yaşayacaksın, değil mi?" }, { type: "say", speaker: "Hana", text: "Yaşayacağım. Senin için. Ve... Yuki için." }] },
      { type: "normal", scene: "Şimdiki Zaman — Ren Yıkılıyor", dialogue: [{ type: "say", speaker: "Ren", text: "Hana... Yumi'yi tanıyordu. Ve... ve bana söylemedi." }, { type: "say", speaker: "Yuki", text: "Söyleyemezdi. Çünkü... sırrı koruyordu." }, { type: "say", speaker: "Ren", text: "Ama... ama ben onun ağabeyiyim!" }] },
      { type: "closeup", scene: "Yuki Ren'in Elini Tutuyor — Sessiz Destek", dialogue: [{ type: "say", speaker: "Yuki", text: "Bazen... bazen sevdiklerimiz bizi korumak için yalan söyler. Hana... seni koruyordu." }, { type: "say", speaker: "Ren", text: "Nasıl?" }, { type: "say", speaker: "Yuki", text: "Eğer gerçeği bilseydin... Kuroi'nin peşine düşerdin. Ve ölürdün. Hana bunu biliyordu." }] },
      { type: "splash", scene: "Gece — Tapınak Çatısı — Ren ve Yuki — Yıldızlar", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... ben... ben artık ne hissettiğimi bilmiyorum." }, { type: "say", speaker: "Yuki", text: "Ben de. Ama... birlikte keşfedeceğiz." }, { type: "say", speaker: "Ren", text: "Söz mü?" }, { type: "say", speaker: "Yuki", text: "Söz." }] },
      { type: "closeup", scene: "Ren Yuki'ye Sarılıyor — Uzun — Sessizlik", dialogue: [{ type: "inner", text: '"O an... o an anladım ki... bazı sırlar acıtır. Ama... gerçek her zaman iyileştirir."' }] },
      { type: "splash", scene: "Sabah — Tapınak — Yuki Uyanıyor — Yanında Bir Mektup", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu... bu kimden?" }, { type: "say", speaker: "Mio", text: "Kapının altından atılmış. Kimse görmedi." }, { type: "say", speaker: "Yuki", text: "Zarf... zarf kırmızı. Ve üzerinde... 'Ayanokōji'ye' yazıyor." }] }
    ]
  },

  34: {
    jp: "第34話", title: "Hana'nın Gerçeği",
    pages: [
      { type: "splash", scene: "Tapınak — Yuki Mektubu Açıyor — Yüzü Soluyor", dialogue: [{ type: "say", speaker: "Mektup", text: "'Yuki Ayanokōji. Seni tanıyorum. Ve sen de beni tanıyacaksın. Yanaka Mezarlığı. Yarın gece. Yalnız gel.'" }, { type: "say", speaker: "Yuki", text: "Kim bu?" }, { type: "say", speaker: "Sōren", text: "Bu... bu Amca'nın el yazısı." }] },
      { type: "normal", scene: "Yuki, Sōren'e Bakıyor — Şok", dialogue: [{ type: "say", speaker: "Yuki", text: "Amca mı? Ama... o Arc 3'te yenildi!" }, { type: "say", speaker: "Sōren", text: "Hayır. O kaçtı. Ve şimdi... şimdi seni arıyor." }, { type: "say", speaker: "Ren", text: "Tuzak olabilir." }] },
      { type: "closeup", scene: "Yuki'nin Yüzü — Kararlı", dialogue: [{ type: "say", speaker: "Yuki", text: "Gideceğim." }, { type: "say", speaker: "Sōren", text: "Hayır. Ben gideceğim." }, { type: "say", speaker: "Yuki", text: "Baba... bu benim savaşım." }] },
      { type: "splash", scene: "Yanaka Mezarlığı — Gece — Yuki Yalnız — Amca Bekliyor — Karanlık", dialogue: [{ type: "say", speaker: "Amca", text: "Geldin. Cesursun. Tıpkı annen gibi." }, { type: "say", speaker: "Yuki", text: "Ne istiyorsun?" }, { type: "say", speaker: "Amca", text: "Gerçeği. Hana'nın gerçeğini." }] },
      { type: "normal", scene: "Amca Bir Çiçek Çıkarıyor — Beyaz — Yuki'ye Uzatıyor", dialogue: [{ type: "say", speaker: "Amca", text: "Bu... Hana'nın son anısı. Bunu oku. Ve... kardeşinin gerçeğini öğren." }, { type: "say", speaker: "Yuki", text: "Neden bana veriyorsun?" }, { type: "say", speaker: "Amca", text: "Çünkü... sen hak ediyorsun. Ve... ben pişmanım." }] },
      { type: "closeup", scene: "Yuki Çiçeğe Dokunuyor — Anı Patlıyor — Hana ve Yumi — Hastane", dialogue: [{ type: "say", speaker: "Hana", text: "Yumi... ben... ben senin yerine öleceğim." }, { type: "say", speaker: "Yumi", text: "Hayır! Yapma!" }, { type: "say", speaker: "Hana", text: "Sen... sen yaşamalısın. Ve... Yuki'yi korumalısın." }] },
      { type: "splash", scene: "Anı Devam — Hana Bir Kavanoz Çiçek Alıyor — Kendini Feda Ediyor", dialogue: [{ type: "say", speaker: "Hana", text: "Bu çiçek... benim hayatımı Yumi'ye verecek. O yaşayacak. Ben... ben gideceğim." }, { type: "say", speaker: "Yumi", text: "HANA!" }, { type: "say", speaker: "Hana", text: "Ağabeyime söyle... onu sevdiğimi. Ve... Yuki'yi koru." }] },
      { type: "closeup", scene: "Şimdiki Zaman — Yuki Gözlerini Açıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "Hana... Hana kendini feda etmiş. Yumi için." }, { type: "say", speaker: "Amca", text: "Evet. Ve... Yumi hala yaşıyor. Bilmiyor. Hana'nın onun için öldüğünü bilmiyor." }] },
      { type: "splash", scene: "Amca ve Yuki — Karşı Karşıya — Ama Artık Düşman Değiller", dialogue: [{ type: "say", speaker: "Amca", text: "Yuki... ben... ben özür dilerim. Kardeşimden. Kuroi'den. Herkesten." }, { type: "say", speaker: "Yuki", text: "Sana bir şans veriyorum. Tıpkı babama verdiğim gibi." }, { type: "say", speaker: "Amca", text: "Neden?" }, { type: "say", speaker: "Yuki", text: "Çünkü... herkes ikinci bir şansı hak eder." }] },
      { type: "splash", scene: "Yuki Tapınağa Dönüyor — Ren Onu Karşılıyor — Ama Yuki Yıkılmış", dialogue: [{ type: "say", speaker: "Ren", text: "Ne oldu?" }, { type: "say", speaker: "Yuki", text: "Hana... Hana kendini feda etti. Yumi için. Ve... Yumi hala yaşıyor." }, { type: "say", speaker: "Ren", text: "Ne?!" }, { type: "say", speaker: "Yuki", text: "Ve Ren... ben... ben artık ne hissettiğimi bilmiyorum." }] }
    ]
  },

  35: {
    jp: "第35話", title: "Ren'in Yıkımı",
    pages: [
      { type: "splash", scene: "Tapınak — Ren'in Odası — Ren Yerde Dizlerinin Üstünde — Yıkım", dialogue: [{ type: "inner", text: '"Hana... kendini feda etti. Yumi için. Ve ben... ben bunu bilmiyordum. Ben... ben ne yaptım?"' }] },
      { type: "normal", scene: "Ren Ağlıyor — Yuki Kapıda — Sessiz İzliyor", dialogue: [{ type: "say", speaker: "Ren", text: "Ben... ben intikam peşinde koşarken... Hana zaten kendini feda etmişti. Ben... ben boşuna savaştım." }, { type: "say", speaker: "Yuki", text: "Hayır. Boşuna değil." }, { type: "say", speaker: "Ren", text: "Nasıl değil?!" }] },
      { type: "closeup", scene: "Yuki Ren'in Yanına Oturuyor — Elini Omzuna Koyuyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Sen Hana'yı hatırladın. Onun anısını onurlandırdın. Ve... beni korudun. Hana senin için ne istediyse... sen onu yaptın." }, { type: "say", speaker: "Ren", text: "Ama... ama ben onu koruyamadım." }, { type: "say", speaker: "Yuki", text: "Sen değil. Kimse koruyamazdı. Hana kendi seçimini yaptı." }] },
      { type: "splash", scene: "Yuki ve Ren — Sarılıyor — Uzun — Ağlıyorlar", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... ben... ben seni kaybetmek istemiyorum." }, { type: "say", speaker: "Yuki", text: "Kaybetmeyeceksin. Çünkü ben... ben buradayım." }] },
      { type: "normal", scene: "Sabah — Tapınak Avlusu — Ren Yeni Bir Karar Veriyor", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... ben... ben Yumi'yi bulacağım." }, { type: "say", speaker: "Yuki", text: "Neden?" }, { type: "say", speaker: "Ren", text: "Çünkü... Hana onun için öldü. Ve... onun yaşadığını bilmesi lazım. Ona... Hana hakkında gerçeği anlatacağım." }] },
      { type: "closeup", scene: "Yuki Ren'e Bakıyor — Onay — Gülümseme", dialogue: [{ type: "say", speaker: "Yuki", text: "O zaman... seni destekliyorum. Ama yalnız gitme." }, { type: "say", speaker: "Ren", text: "Sen gelir misin?" }, { type: "say", speaker: "Yuki", text: "Her zaman." }] },
      { type: "splash", scene: "Tapınak — Yuki ve Ren Yola Çıkıyor — Sōren Kapıda — El Sallıyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Dikkatli olun. Ve... Yuki." }, { type: "say", speaker: "Yuki", text: "Efendim?" }, { type: "say", speaker: "Sōren", text: "Seninle gurur duyuyorum." }] },
      { type: "normal", scene: "Yolculuk — Tren — Yuki ve Ren Yan Yana — Yumi'nin Adresi", dialogue: [{ type: "say", speaker: "Ren", text: "Adres: Kuroi'nin eski evi. Yumi... orada yaşıyor olabilir." }, { type: "say", speaker: "Yuki", text: "Belki. Ama... hazır mısın?" }, { type: "say", speaker: "Ren", text: "Hayır. Ama... gitmeliyim." }] },
      { type: "splash", scene: "Kuroi'nin Eski Evi — Yıkık — Ama Bir Işık Yanıyor", dialogue: [{ type: "inner", text: '"Bu ev... Kuroi\'nin evi. Ve... içeride biri var. Biri... yaşıyor."' }] }
    ]
  },

  36: {
    jp: "第36話", title: "Bağışlama",
    pages: [
      { type: "splash", scene: "Kuroi'nin Evi — Gece — Yuki ve Ren Kapıyı Çalıyor — Açan: Genç Bir Kadın", dialogue: [{ type: "say", speaker: "Genç Kadın", text: "Kimsiniz?" }, { type: "say", speaker: "Ren", text: "Sen... sen Yumi misin?" }, { type: "say", speaker: "Yumi", text: "Evet. Siz... kimsiniz?" }] },
      { type: "normal", scene: "İçeri — Yumi — 18 Yaşında — Koyu Saçlı — Hana'ya Benziyor", dialogue: [{ type: "say", speaker: "Yumi", text: "Babam... babam öldü. 2 yıl önce." }, { type: "say", speaker: "Ren", text: "Biliyoruz. Biz... biz seni bulmaya geldik." }, { type: "say", speaker: "Yumi", text: "Neden?" }] },
      { type: "closeup", scene: "Ren Yumi'ye Bakıyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Ren", text: "Sen... sen Hana'yı tanıyor muydun?" }, { type: "say", speaker: "Yumi", text: "Hana mı? Hana... Hana benim en iyi arkadaşımdı. Ama... 3 yıl önce öldü." }, { type: "say", speaker: "Ren", text: "Ben... ben Hana'nın ağabeyiyim." }] },
      { type: "splash", scene: "Yumi Şok — Geri Adım Atıyor — Ama Sonra Sarılıyor", dialogue: [{ type: "say", speaker: "Yumi", text: "Hana'nın ağabeyi... o... o seni çok severdi. Her gün senden bahsederdi." }, { type: "say", speaker: "Ren", text: "Ben... ben onu kaybettim. Ve... ve senin için öldüğünü bilmiyordum." }, { type: "say", speaker: "Yumi", text: "Ne?!" }] },
      { type: "normal", scene: "Ren Yumi'ye Gerçeği Anlatıyor — Hana'nın Fedakarlığı", dialogue: [{ type: "say", speaker: "Ren", text: "Hana... senin hastalığını öğrendi. Ve... senin için kendini feda etti. Beyaz çiçek. Bir hayatı başka birine vermek." }, { type: "say", speaker: "Yumi", text: "Hayır... hayır bu doğru olamaz." }, { type: "say", speaker: "Yuki", text: "Doğru. Ben... ben Hana'nın son anısını gördüm." }] },
      { type: "splash", scene: "Yumi Yere Çöküyor — Gözyaşları — Yıkım", dialogue: [{ type: "say", speaker: "Yumi", text: "Hana... Hana benim için öldü. Ve... ve ben... ben onu hiç görmedim. Hiç teşekkür edemedim." }, { type: "say", speaker: "Ren", text: "Teşekkür etmene gerek yok. O... o seni seviyordu." }, { type: "say", speaker: "Yuki", text: "Ve... sen yaşadığın sürece... Hana yaşıyor." }] },
      { type: "closeup", scene: "Yumi ve Ren — Sarılıyor — Uzun — Ağlıyorlar", dialogue: [{ type: "say", speaker: "Yumi", text: "Özür dilerim... özür dilerim." }, { type: "say", speaker: "Ren", text: "Sen değil. Ben... ben özür dilerim. Seni bulamadığım için." }] },
      { type: "splash", scene: "Evin Dışı — Yuki ve Ren — Yumi Kapıda — Veda", dialogue: [{ type: "say", speaker: "Yumi", text: "Ren... Yuki... teşekkür ederim." }, { type: "say", speaker: "Ren", text: "Ne için?" }, { type: "say", speaker: "Yumi", text: "Gerçeği söylediğiniz için. Ve... bana Hana'yı hatırlattığınız için." }] },
      { type: "normal", scene: "Yolculuk — Tren — Ren ve Yuki — Sessizlik", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... artık... artık huzurluyum." }, { type: "say", speaker: "Yuki", text: "Hana için mi?" }, { type: "say", speaker: "Ren", text: "Evet. Onun fedakarlığı... boşuna değildi. Yumi yaşıyor. Ve... ve mutlu." }] },
      { type: "splash", scene: "Tapınak — Sabah — Yuki ve Ren Döndü — Sōren ve Mio Karşılıyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Nasıl geçti?" }, { type: "say", speaker: "Ren", text: "İyi. Çok iyi." }, { type: "say", speaker: "Yuki", text: "Baba... sanırım... sanırım artık gerçekten bir aileyiz." }] },
      { type: "splash", scene: "Ama Uzakta — Karanlık Bir Figür — Yuki'yi İzliyor — Yeni Bir Düşman", dialogue: [{ type: "say", speaker: "Gizli Figür", text: "Yuki Ayanokōji... sonunda... seni buldum." }, { type: "inner", text: '"Arc 4\'ün sonu... huzur dolu. Ama... bu huzur... sonsuza kadar sürmeyecek."' }] }
    ]
  },

  37: {
    jp: "第37話", title: "Büyük Savaş I",
    pages: [
      { type: "splash", scene: "Tokyo — Gece — Gökyüzü Kırmızı — Toplayıcılar Şehri Sarıyor", dialogue: [{ type: "inner", text: '"O gece... gökyüzü kırmızı oldu. Ve... toprak titredi. Savaş... başladı."' }] },
      { type: "normal", scene: "Tapınak — Alarm — Yuki, Ren, Sōren Uyanıyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Bu... bu Ne'nin uyarı sinyali. Ama Ne öldü!" }, { type: "say", speaker: "Yuki", text: "Bu... bu başka bir şey." }, { type: "say", speaker: "Ren", text: "Toplayıcılar. Geliyorlar." }] },
      { type: "closeup", scene: "Pencereden Dışarı — Yüzlerce Gölge — Yürüyor", dialogue: [{ type: "say", speaker: "Mio", text: "Bu... bu bir ordu." }, { type: "say", speaker: "Yuki", text: "Sayıları... binlerce. Ve... hepsi Kuroi'nin müritleri." }] },
      { type: "splash", scene: "Tapınak Girişi — Yuki, Ren, Sōren, Mio — Karşı Koyuyor — Yüzlerce Toplayıcı", dialogue: [{ type: "say", speaker: "Yuki", text: "Baba. Sen sağ kanadı tut. Ren, sol kanat. Mio, geride kal." }, { type: "say", speaker: "Mio", text: "Hayır. Ben de savaşacağım." }, { type: "say", speaker: "Yuki", text: "Sen... sen insansın." }, { type: "say", speaker: "Mio", text: "Ben de senin arkadaşınım." }] },
      { type: "normal", scene: "Büyük Dövüş — Yuki Çiçek Kılıcı — Ren Tantō — Sōren Makas", dialogue: [{ type: "say", speaker: "Sōren", text: "Yuki! Dikkat!" }, { type: "say", speaker: "Yuki", text: "Görüyorum!" }, { type: "say", speaker: "Ren", text: "Soldan geliyor!" }] },
      { type: "splash", scene: "Yuki Bir Toplayıcıyı Yere Seriyor — Ama Yeni Düşmanlar Geliyor", dialogue: [{ type: "say", speaker: "Toplayıcı", text: "Sen... sen Ayanokōji'sin. Lider... seni istiyor." }, { type: "say", speaker: "Yuki", text: "Lider mi? Kuroi öldü!" }, { type: "say", speaker: "Toplayıcı", text: "Hayır. Kuroi bir piyondu. Gerçek lider... çok daha güçlü." }] },
      { type: "closeup", scene: "Yuki Şok — Bir Şey Anlıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Gerçek lider... Amca değil miydi?" }, { type: "say", speaker: "Toplayıcı", text: "Amca... o sadece bir parçaydı. Gerçek lider... Ne'nin kardeşi." }, { type: "say", speaker: "Yuki", text: "Ne'nin kardeşi mi?! Ama... Ne öldü!" }] },
      { type: "splash", scene: "Gökyüzünden Bir Figür İniyor — Uzun Siyah Cübbe — Kitsune Maskesi — Elinde Altın Makas", dialogue: [{ type: "say", speaker: "Gizli Figür", text: "Merhaba, Yuki Ayanokōji. Ben... Ne'nin kardeşiyim. Ve... senin kaderinim." }, { type: "say", speaker: "Yuki", text: "Sen... sen kimsin?" }, { type: "say", speaker: "Gizli Figür", text: "Ben... Ayanokōji Rei. Senin... büyükbaban." }] },
      { type: "splash", scene: "Yuki Şok — Sōren Şok — Rei Maskesini İndiriyor — Yuki'nin Yüzüne Benziyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Baba?! Sen... sen yaşıyor muydun?!" }, { type: "say", speaker: "Rei", text: "Evet. Ve... ben her şeyi izledim. Senin düşüşünü. Yuriko'nun ölümünü. Yuki'nin doğuşunu." }, { type: "say", speaker: "Yuki", text: "Neden... neden hiçbir şey yapmadın?" }, { type: "say", speaker: "Rei", text: "Çünkü... ben seni bekliyordum. Altın Çiçeğin taşıyıcısını. Sonunda... sen büyüdün." }] }
    ]
  },

  38: {
    jp: "第38話", title: "Büyük Savaş II",
    pages: [
      { type: "splash", scene: "Yanaka Mezarlığı — Yuki vs Rei — Sōren ve Ren Yan Tarafta — Savaş Devam Ediyor", dialogue: [{ type: "say", speaker: "Rei", text: "Yuki... sen benim torunumsun. Ama... sen benim düşmanımsın." }, { type: "say", speaker: "Yuki", text: "Neden?" }, { type: "say", speaker: "Rei", text: "Çünkü... Altın Çiçek bende olmalı. Ben... 60 yıldır onu arıyorum." }] },
      { type: "normal", scene: "Rei Saldırıyor — Yuki Karşılık Veriyor — Ama Rei Çok Güçlü", dialogue: [{ type: "say", speaker: "Yuki", text: "Sen... sen çok güçlüsün!" }, { type: "say", speaker: "Rei", text: "60 yıl. 60 yıl boyunca eğitim aldım. Sen... sen 18 yaşındasın." }, { type: "say", speaker: "Yuki", text: "Ama... ama ben doğru taraftayım." }] },
      { type: "closeup", scene: "Yuki Yere Düşüyor — Rei Kılıcını İndiriyor", dialogue: [{ type: "say", speaker: "Rei", text: "Doğru taraf... sadece bir kelime. Gerçek olan... güçtür." }, { type: "say", speaker: "Yuki", text: "Hayır... gerçek olan... sevgi." }] },
      { type: "splash", scene: "Sōren Araya Giriyor — Rei'ye Saldırıyor — Oğlu Babasına Karşı", dialogue: [{ type: "say", speaker: "Sōren", text: "BABA! DUR!" }, { type: "say", speaker: "Rei", text: "Sōren... sen... sen zayıfsın. Her zaman zayıftın." }, { type: "say", speaker: "Sōren", text: "Evet. Ama... zayıflık... bazen güçtür." }] },
      { type: "normal", scene: "Sōren vs Rei — Baba vs Oğul — Duygusal Dövüş", dialogue: [{ type: "say", speaker: "Sōren", text: "Sen... sen annemi öldürdün. Ben... ben seni affetmedim." }, { type: "say", speaker: "Rei", text: "Annen... o zayıftı. Tıpkı senin gibi." }, { type: "say", speaker: "Sōren", text: "HAYIR!" }] },
      { type: "splash", scene: "Sōren Rei'yi Yere Seriyor — Ama Rei Güçlü — Sōren Yere Düşüyor", dialogue: [{ type: "say", speaker: "Rei", text: "Gördün mü? Ben... ben yenilmezim." }, { type: "say", speaker: "Sōren", text: "Hayır. Sen... sen yalnızsın." }, { type: "say", speaker: "Rei", text: "Yalnızlık... güçtür." }] },
      { type: "closeup", scene: "Yuki Ayağa Kalkıyor — Ellerinde Işık — Altın Çiçek Yanıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Baba... seni koruyacağım." }, { type: "say", speaker: "Rei", text: "Altın Çiçek... onu kullanma. Yoksa... ölürsün." }, { type: "say", speaker: "Yuki", text: "Biliyorum. Ama... babam için... ölmeye hazırım." }] },
      { type: "splash", scene: "Yuki Altın Çiçeği Aktive Ediyor — Işık Patlaması — Rei'nin Silahı Kırılıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "SEN... SEN ARTIK DUR!" }, { type: "say", speaker: "Rei", text: "İmkansız... bu... bu imkansız!" }] },
      { type: "closeup", scene: "Yuki Rei'nin Karşısında Duruyor — Ama Öldürmüyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Seni... öldürmeyeceğim. Çünkü... sen de benim ailemsin." }, { type: "say", speaker: "Rei", text: "Neden... neden beni öldürmüyorsun?" }, { type: "say", speaker: "Yuki", text: "Çünkü... annem öldürmezdi. Ve ben... ben onun kızıyım." }] },
      { type: "splash", scene: "Rei Yıkılıyor — Gözyaşları — Sessizlik", dialogue: [{ type: "say", speaker: "Rei", text: "Yuriko... senin annen... o bir melekti. Ve ben... ben bir canavardım." }, { type: "say", speaker: "Yuki", text: "Ama artık değilsin. Çünkü... sana bir şans veriyorum." }, { type: "say", speaker: "Rei", text: "Bir şans mı?" }, { type: "say", speaker: "Yuki", text: "Evet. Tıpkı babama verdiğim gibi." }] }
    ]
  },

  39: {
    jp: "第39話", title: "Fedakarlık",
    pages: [
      { type: "splash", scene: "Yanaka Mezarlığı — Rei Yerde — Yuki Yanında — Toplayıcılar Kaçıyor", dialogue: [{ type: "say", speaker: "Rei", text: "Yuki... torunum. Sen... sen gerçekten özelsin." }, { type: "say", speaker: "Yuki", text: "Sen... sen de. Ama... yanlış taraftaydın." }, { type: "say", speaker: "Rei", text: "Biliyorum. Ve... şimdi... düzeltmek istiyorum." }] },
      { type: "normal", scene: "Rei Ayağa Kalkıyor — Yuki'ye Bakıyor — Kararlı", dialogue: [{ type: "say", speaker: "Rei", text: "Kalan Toplayıcılar... sana saldıracak. Onları durdurmalıyım." }, { type: "say", speaker: "Yuki", text: "Hayır. Sen gitmelisin. Ben hallederim." }, { type: "say", speaker: "Rei", text: "Hayır. Bu... bu benim son görevim." }] },
      { type: "closeup", scene: "Rei Yuki'ye Sarılıyor — Sıcak — Samimi", dialogue: [{ type: "say", speaker: "Rei", text: "Seninle gurur duyuyorum. Sen... sen benim torunumsun. Ve... benim kurtarıcımsın." }, { type: "say", speaker: "Yuki", text: "Büyükbaba..." }, { type: "say", speaker: "Rei", text: "Git. Şimdi. Ve... mutlu ol." }] },
      { type: "splash", scene: "Rei Kendini Toplayıcıların Ortasına Atıyor — Işık Patlaması — Kendini Feda Ediyor", dialogue: [{ type: "say", speaker: "Rei", text: "SIZ... SİZ ARTIK DURUN!" }, { type: "say", speaker: "Toplayıcılar", text: "LİDER!" }, { type: "say", speaker: "Rei", text: "Ben... ben sizin lideriniz değilim. Ben... ben sadece bir adamım. Ve... torunumu koruyorum." }] },
      { type: "normal", scene: "Işık Patlaması — Rei ve Toplayıcılar Yok Oluyor — Sadece Toz Kalıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "BÜYÜKBABA! BÜYÜKBABA!" }, { type: "say", speaker: "Sōren", text: "Yuki... o gitti." }, { type: "say", speaker: "Yuki", text: "Hayır... hayır o gidemez..." }] },
      { type: "closeup", scene: "Yuki Yerde Dizlerinin Üstünde — Gözyaşları — Ren ve Sōren Yanında", dialogue: [{ type: "say", speaker: "Ren", text: "Yuki... o senin için öldü." }, { type: "say", speaker: "Yuki", text: "Biliyorum... biliyorum... ama... ama ben onu tanıyamadım bile." }, { type: "say", speaker: "Sōren", text: "Hayır. Sen onu tanıdın. O... o son anda seni tanıdı. Ve... seni sevdi." }] },
      { type: "splash", scene: "Mio Yaklaşıyor — Elinde Bir Çiçek — Beyaz Çiçek Açıyor", dialogue: [{ type: "say", speaker: "Mio", text: "Yuki... bak. Bir çiçek açtı." }, { type: "say", speaker: "Yuki", text: "Bu... bu büyükbabamın çiçeği." }, { type: "say", speaker: "Ren", text: "Ve... beyaz. Yani... fedakarlık." }] },
      { type: "closeup", scene: "Yuki Çiçeğe Dokunuyor — Anı Patlıyor — Rei'nin Son Sözü", dialogue: [{ type: "say", speaker: "Rei (anıdan)", text: "Yuki... seni seviyorum. Ve... affet beni. Ben... ben zayıftım. Ama sen... sen güçlüsün." }, { type: "say", speaker: "Yuki", text: "Büyükbaba... seni affediyorum." }] },
      { type: "splash", scene: "Tapınak — Sabah — Yuki ve Ailesi — Yeni Bir Başlangıç", dialogue: [{ type: "say", speaker: "Sōren", text: "Yuki... savaş bitti." }, { type: "say", speaker: "Yuki", text: "Hayır. Bitmedi. Ama... belki... belki bir gün bitecek." }, { type: "say", speaker: "Ren", text: "O gün... yanında olacağım." }, { type: "say", speaker: "Mio", text: "Ben de." }] },
      { type: "splash", scene: "Yuki Gökyüzüne Bakıyor — Umut — Yeni Bir Dönem", dialogue: [{ type: "inner", text: '"Büyükbabam öldü. Babam affedildi. Ama... hikaye bitmedi. Ve... ben hala ayaktayım."' }] }
    ]
  },

  40: {
    jp: "第40話", title: "Babanın Sonu",
    pages: [
      { type: "splash", scene: "Tapınak — Bir Hafta Sonra — Sōren Yatakta — Ağır Yaralı", dialogue: [{ type: "inner", text: '"Büyük Savaş\'ta... babam beni korumak için kendini feda etti. Ve... şimdi... o gidiyor."' }] },
      { type: "normal", scene: "Yuki Sōren'in Yanında — Elini Tutuyor — Gözyaşları", dialogue: [{ type: "say", speaker: "Yuki", text: "Baba... iyileşeceksin. Söz veriyorum." }, { type: "say", speaker: "Sōren", text: "Hayır, Yuki. Ben... ben biliyorum. Bu... bu son." }, { type: "say", speaker: "Yuki", text: "Hayır! Sensiz yaşayamam!" }] },
      { type: "closeup", scene: "Sōren Yuki'nin Elini Sıkıca Tutuyor — Gözlerinde Sevgi", dialogue: [{ type: "say", speaker: "Sōren", text: "Yuki... sen... sen benim en büyük gururumsun. Ve... annenin de." }, { type: "say", speaker: "Yuki", text: "Baba..." }, { type: "say", speaker: "Sōren", text: "Sen... sen beni affettin. Ben... ben huzurluyum." }] },
      { type: "splash", scene: "Geriye Dönüş — Sōren ve Yuriko — Genç — Mutlu — Küçük Yuki Kucaklarında", dialogue: [{ type: "say", speaker: "Sōren (anıdan)", text: "Yuriko... bu bebek... bizim her şeyimiz olacak." }, { type: "say", speaker: "Yuriko (anıdan)", text: "Evet. Ama... ona iyi bakmalıyız. Çünkü... o özel." }] },
      { type: "normal", scene: "Şimdiki Zaman — Sōren Nefes Almakta Zorlanıyor", dialogue: [{ type: "say", speaker: "Sōren", text: "Yuki... annene söyle... onu çok sevdiğimi." }, { type: "say", speaker: "Yuki", text: "Baba... kalk. Lütfen... kalk." }, { type: "say", speaker: "Sōren", text: "Kalkamam, kızım. Ama... sen devam et. Benim için... ve annen için." }] },
      { type: "closeup", scene: "Sōren'in Gözleri Kapanıyor — Yuki Çığlık Atıyor", dialogue: [{ type: "say", speaker: "Yuki", text: "BABA! BABA KALK! LÜTFEN KALK!" }, { type: "say", speaker: "Sōren (son söz)", text: "Seni seviyorum... kızım." }] },
      { type: "splash", scene: "Sōren Ölüyor — Yuki Onu Kucaklıyor — Tapınak Sessiz", dialogue: [{ type: "say", speaker: "Yuki", text: "Hayır... hayır... HAYIR!" }, { type: "say", speaker: "Ren", text: "Yuki..." }, { type: "say", speaker: "Yuki", text: "O... o gitti. Babam... gitti." }] },
      { type: "normal", scene: "Cenaze — Yanaka Mezarlığı — Yuriko'nun Yanına Gömülüyor — Yuki, Ren, Mio, Dr. Kurosawa", dialogue: [{ type: "say", speaker: "Dr. Kurosawa", text: "Yuriko... Sōren... artık birliktesiniz." }, { type: "say", speaker: "Yuki", text: "Annem... baba... sizi seviyorum." }, { type: "say", speaker: "Ren", text: "Yuki... iyi misin?" }, { type: "say", speaker: "Yuki", text: "Hayır. Ama... sanırım bir gün olacağım." }] },
      { type: "splash", scene: "Mezar Başında — Yuki Yalnız — Bir Beyaz Çiçek Açıyor", dialogue: [{ type: "inner", text: '"Baba... annen için öldün. Ama... sen sadece onun için ölmedin. Benim için de öldün."' }] },
      { type: "closeup", scene: "Yuki Çiçeği Koparıyor — Ve Cebine Koyuyor", dialogue: [{ type: "say", speaker: "Yuki", text: "Bu çiçeği... hep yanımda taşıyacağım. Sizi hatırlatmak için." }, { type: "say", speaker: "Ren", text: "Yuki... gel. Buradan gidelim." }, { type: "say", speaker: "Yuki", text: "Tamam. Ama... bir dakika." }] },
      { type: "splash", scene: "Yuki Gökyüzüne Bakıyor — Güneş Açıyor — Yeni Bir Başlangıç", dialogue: [{ type: "inner", text: '"Arc 4... sona erdi. Babam öldü. Büyükbabam öldü. Ama... ben... ben hala ayaktayım. Ve... son bir arc kaldı. Son bir savaş. Ve... son bir veda."' }] },
      { type: "splash", scene: "幽霊花 — Arc 4: Kırık Anılar — SON — Arc 5: Yeni Bahar Yakında — FİNAL", dialogue: [] }
    ]
  }

};