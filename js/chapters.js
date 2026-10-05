/* ============================================
   KAGERŌ — Bölüm Verileri
   幽霊花: Hayalet Çiçekler
   Arc 1: İlk Fısıltı (1-8) + Arc 2: Karanlık Bahçe (9-18)
   ============================================ */

const ALL_CHAPTERS = {

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

  /* ============================================
     ARC 2: KARANLIK BAHÇE
     ============================================ */

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
      { type: "splash", scene: "Yuki Ayağa Kalkıyor — Gözyaşları Ama Kararlılık — Yanında Ren — Tapınaktan Çıkıyorlar — Şafak Söküyor", dialogue: [{ type: "inner", text: '"Arc 2... sona erdi. Babam öldü. Ama ben... ben hala ayaktayım. Ve şimdi... şimdi gerçek savaş başlıyor."' }] },
      { type: "splash", scene: "幽霊花 — Arc 2: Karanlık Bahçe — SON — Arc 3: Altın Çiçek Yakında", dialogue: [] }
    ]
  }

};