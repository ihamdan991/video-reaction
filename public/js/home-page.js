$('#menu').click(function () {
    $('.sidebar').toggleClass('show-sidebar');
});

const videoList = [
    {
        "uuid": "NJG-VfhXDuY",
        "title": "BARU! Indomie Ramen Series Rasanya Otentik Jepang",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x00ffffff-no-rj",
        "view": "40jt",
        "date": "1 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/NJG-VfhXDuY/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/BARU%21 Indomie Ramen Series Rasanya Otentik Jepang.mp4"
    },
    {
        "uuid": "rRh1nK5obtg",
        "title": "Indomie, Hangatkan Lebaran #SederhanaPenuhArti",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x01ffffff-no-rj",
        "view": "5,4jt",
        "date": "1 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/rRh1nK5obtg/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie, Hangatkan Lebaran %23SederhanaPenuhArti.mp4"
    },
    {
        "uuid": "Hc0i8rf7rF8",
        "title": "Kebaikan #SederhanaPenuhArti Ramadan Indomie",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x02ffffff-no-rj",
        "view": "32jt",
        "date": "2 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/Hc0i8rf7rF8/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Kebaikan %23SederhanaPenuhArti Ramadan Indomie.mp4"
    },
    {
        "uuid": "5z__H5FBrxw",
        "title": "Semangat Menginspirasi Indomie",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x03ffffff-no-rj",
        "view": "27jt",
        "date": "5 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/5z__H5FBrxw/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Semangat Menginspirasi Indomie.mp4"
    },
    {
        "uuid": "QvAVxrK_D30",
        "title": "Ayo Cobain Inovasi Rasa Indomie HypeAbis Kebab Rendang!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x04ffffff-no-rj",
        "view": "91jt",
        "date": "7 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/QvAVxrK_D30/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Ayo Cobain Inovasi Rasa Indomie HypeAbis Kebab Rendang%21.mp4"
    },
    {
        "uuid": "ItfHurpXn1M",
        "title": "Perjalanan Indomie 50 tahun Hidupkan Inspirasi",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x05ffffff-no-rj",
        "view": "5,7jt",
        "date": "9 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/ItfHurpXn1M/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Perjalanan Indomie 50 tahun Hidupkan Inspirasi.mp4"
    },
    {
        "uuid": "J9y1_6chZJQ",
        "title": "Indomie Hidupkan Inspirasimu",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x06ffffff-no-rj",
        "view": "57jt",
        "date": "10 bulan yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/J9y1_6chZJQ/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie Hidupkan Inspirasimu.mp4"
    },
    {
        "uuid": "1VantBh_nb0",
        "title": "Indomie Soto Banjar Limau Kuit Autentik Khas Kalimantan Selatan!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x07ffffff-no-rj",
        "view": "43jt",
        "date": "1 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/1VantBh_nb0/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie Soto Banjar Limau Kuit Autentik Khas Kalimantan Selatan%21.mp4"
    },
    {
        "uuid": "dN3u8j2aWY4",
        "title": "Ramadan #SederhanaPenuhArti bareng Indomie",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x08ffffff-no-rj",
        "view": "16jt",
        "date": "1 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/dN3u8j2aWY4/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Ramadan %23SederhanaPenuhArti bareng Indomie.mp4"
    },
    {
        "uuid": "T1PeegiOawo",
        "title": "BARU! INDOMIE GORENG RASA AYAM POP #RasanyaPopMarkopop",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x09ffffff-no-rj",
        "view": "25jt",
        "date": "1 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/T1PeegiOawo/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/BARU%21 INDOMIE GORENG RASA AYAM POP %23RasanyaPopMarkopop.mp4"
    },
    {
        "uuid": "2uGwXntIHtE",
        "title": "50 tahun Indomie #TerusHidupkanSeleraIndonesia",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x10ffffff-no-rj",
        "view": "42jt",
        "date": "1 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/2uGwXntIHtE/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/50 tahun Indomie %23TerusHidupkanSeleraIndonesia.mp4"
    },
    {
        "uuid": "-ys3dAjsFpM",
        "title": "Isi Semangatmu Bareng Indomie Goreng",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x11ffffff-no-rj",
        "view": "37jt",
        "date": "1 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/-ys3dAjsFpM/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Isi Semangatmu Bareng Indomie Goreng.mp4"
    },
    {
        "uuid": "AdHCqYNQX_Q",
        "title": "Kembali #NyamanDiRumah dengan Indomie Kuah",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x12ffffff-no-rj",
        "view": "6,7jt",
        "date": "1 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/AdHCqYNQX_Q/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Kembali %23NyamanDiRumah dengan Indomie Kuah.mp4"
    },
    {
        "uuid": "PZ93qdHeeJg",
        "title": "Cerita Niat Baik #IDo",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x13ffffff-no-rj",
        "view": "789rb",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/PZ93qdHeeJg/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Cerita Niat Baik %23IDo.mp4"
    },
    {
        "uuid": "RjEG_z7_AKk",
        "title": "Indomie x Naufal Abshar : My Creative Story (Road Trip to Las Vegas)",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x14ffffff-no-rj",
        "view": "5,4rb",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/RjEG_z7_AKk/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie x Naufal Abshar : My Creative Story (Road Trip to Las Vegas).mp4"
    },
    {
        "uuid": "xGRj_9dRuos",
        "title": "Indomie X Naufal Abshar: My Creative Story",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x15ffffff-no-rj",
        "view": "3,5rb",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/xGRj_9dRuos/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie X Naufal Abshar: My Creative Story.mp4"
    },
    {
        "uuid": "aoBXaW3_tfU",
        "title": "Jalanin niat baik di bulan Ramadan",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x16ffffff-no-rj",
        "view": "8,2jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/aoBXaW3_tfU/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Jalanin niat baik di bulan Ramadan.mp4"
    },
    {
        "uuid": "itof75OQcE8",
        "title": "Piring Indomie boleh kosong, niat baik jangan sampai bolong",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x17ffffff-no-rj",
        "view": "8,4jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/itof75OQcE8/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Piring Indomie boleh kosong, niat baik jangan sampai bolong.mp4"
    },
    {
        "uuid": "0dvHfwEcFXM",
        "title": "Indomie MIEEEE-GHEEE-TTIII Bolognese, UUUNIKMAT!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x18ffffff-no-rj",
        "view": "1,8jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/0dvHfwEcFXM/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie MIEEEE-GHEEE-TTIII Bolognese, UUUNIKMAT%21.mp4"
    },
    {
        "uuid": "0PuJJau-DHs",
        "title": "INDOMIE MIEGHETTI BOLOGNESE! Rasa barunya unik, UUUNIKMAT~",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x19ffffff-no-rj",
        "view": "15jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/0PuJJau-DHs/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/INDOMIE MIEGHETTI BOLOGNESE%21 Rasa barunya unik, UUUNIKMAT~.mp4"
    },
    {
        "uuid": "vV_bUlcu0FY",
        "title": "Makan Indomie kuah, bikin #NyamanDiRumah",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x20ffffff-no-rj",
        "view": "12jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/vV_bUlcu0FY/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Makan Indomie kuah, bikin #NyamanDiRumah.mp4"
    },
    {
        "uuid": "r2QIfV0TMK4",
        "title": "#AyoSemangatLagi bareng Indomie Goreng dan Bola!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x22ffffff-no-rj",
        "view": "2,5jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/r2QIfV0TMK4/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/#AyoSemangatLagi bareng Indomie Goreng dan Bola%21.mp4"
    },
    {
        "uuid": "mlneGgw7IeM",
        "title": "#AyoSemangatLagi bareng Indomie dan Bali United!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x24ffffff-no-rj",
        "view": "1,5jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/mlneGgw7IeM/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/#AyoSemangatLagi bareng Indomie dan Bali United%21.mp4"
    },
    {
        "uuid": "FNFKPYb_93g",
        "title": "#AyoSemangatLagi bareng Indomie Goreng",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x25ffffff-no-rj",
        "view": "29jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/FNFKPYb_93g/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/#AyoSemangatLagi bareng Indomie Goreng.mp4"
    },
    {
        "uuid": "I2k4sar8gEQ",
        "title": "Mana yang Lebih Hypeabis dari Indomie #PedasIndonesianyaHypeabis",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x26ffffff-no-rj",
        "view": "4,2jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/I2k4sar8gEQ/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Mana yang Lebih Hypeabis dari Indomie #PedasIndonesianyaHypeabis.mp4"
    },
    {
        "uuid": "suL_GWL-1sg",
        "title": "Indomie - Pedas Indonesianya, Hypeabis!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x27ffffff-no-rj",
        "view": "11jt",
        "date": "2 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/suL_GWL-1sg/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Indomie - Pedas Indonesianya, Hypeabis%21.mp4"
    },
    {
        "uuid": "pQvrkZLiLGg",
        "title": "Kepercayaan Kamu, Semangat Kami",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x28ffffff-no-rj",
        "view": "6,7jt",
        "date": "3 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/pQvrkZLiLGg/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Kepercayaan Kamu, Semangat Kami.mp4"
    },
    {
        "uuid": "PAdVTc57BCU",
        "title": "Terima Kasih Kepada Mereka yang Menyatakan #Idontmudik di Lebaran Tahun ini",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x29ffffff-no-rj",
        "view": "462rb",
        "date": "3 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/PAdVTc57BCU/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Terima Kasih Kepada Mereka yang Menyatakan #Idontmudik di Lebaran Tahun ini.mp4"
    },
    {
        "uuid": "D9zDyifLLHw",
        "title": "Kang Dafi nyatakan #Idontmudik di Lebaran taun ini",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x30ffffff-no-rj",
        "view": "905rb",
        "date": "3 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/D9zDyifLLHw/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Kang Dafi nyatakan #Idontmudik di Lebaran taun ini.mp4"
    },
    {
        "uuid": "3c9vqDpuQ-c",
        "title": "Hilal Nyatakan #Idontmudik",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x31ffffff-no-rj",
        "view": "1jt",
        "date": "3 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/3c9vqDpuQ-c/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Hilal Nyatakan #Idontmudik.mp4"
    },
    {
        "uuid": "6pJPsriflLg",
        "title": "Selamat Berbuka, Tetap Fokus Jalanin #NiatBaikDariRumah ya!",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x32ffffff-no-rj",
        "view": "2,9jt",
        "date": "3 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/6pJPsriflLg/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/Selamat Berbuka, Tetap Fokus Jalanin #NiatBaikDariRumah ya%21.mp4"
    },
    {
        "uuid": "RjSrTJa8lhM",
        "title": "INDOMIE KUAH - TVC 30S",
        "channelName": "Indomie",
        "channelIcon": "https://yt3.ggpht.com/4lIpAIeTjCsPVQtEuIIFj8T_WGfruNbZAZZAMfrfrVlzHlaZZwXWDZNVJnBazhkXgkJYMvwWfBM=s88-c-k-c0x33ffffff-no-rj",
        "view": "1,7jt",
        "date": "3 tahun yang lalu",
        "thumbnail": "https://i.ytimg.com/vi/RjSrTJa8lhM/hqdefault.jpg",
        "video": "https://files.ihamdan.com/ai_video/INDOMIE KUAH - TVC 30S.mp4"
    }
];

const container = $('.videos__container');
videoList.forEach(video => {
    localStorage.setItem(video.uuid, JSON.stringify(video))
    const videoElement = `
        <div class="video">
            <div class="video__thumbnail">
                <img src="${video.thumbnail}" alt="" class="video__thumbnail_img" uuid="${video.uuid}" />
            </div>
            <div class="video__details">
                <div class="author">
                    <img src="${video.channelIcon}" alt="" />
                </div>
                <div class="title">
                    <h3><a class="video_title" uuid="${video.uuid}">${video.title}</a></h3>
                    <a>${video.channelName}</a>
                    <span>${video.view} Views • ${video.date}</span>
                </div>
            </div>
        </div>
    `;
    container.append(videoElement);
});

$('.videos__container').on('click', '.video_title', function () {
    const uuid = $(this).attr('uuid');
    localStorage.setItem('videoSelected', localStorage.getItem(uuid));
    window.location.href = `watch/${uuid}`;
});

$('.videos__container').on('click', '.video__thumbnail_img', function () {
    const uuid = $(this).attr('uuid');
    localStorage.setItem('videoSelected', localStorage.getItem(uuid));
    window.location.href = `watch/${uuid}`;
});
