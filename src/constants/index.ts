import { User } from "@app/types/user";
import { Movie, Session } from "../types/movie";

export const MOVIES_NOW: Movie[] = [
  {
    id: '1',
    type: "Фильм",
    name: "Субстанция",
    publishYear: "2024",
    publishCountry: "Великобритания",
    ageRestriction: "18+",
    description:
      "Вы когда-нибудь мечтали стать лучшей версией себя? Фильм-сенсация, который не получится выкинуть из головы",
    coverUrl:
      "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/5/3/5/8366535/945463184075.jpg",
    genres: [
      {
        name: "Ужасы"
      },
      {
        name: "Драма"
      }
    ],
    galleryUrls: [
      "https://opis-cdn.tinkoffjournal.ru/mercury/01-the-substance-qa.jpg?preset=image_570w_2x",
      "https://opis-cdn.tinkoffjournal.ru/mercury/07-the-substance-qa.jpg?preset=image_760w",
      "https://opis-cdn.tinkoffjournal.ru/mercury/08-the-substance-qa.jpg?preset=image_760w"
    ]
  },
  {
    id: '2',
    type: "Фильм",
    publishYear: "2024",
    publishCountry: "США",
    description: "Приспособившись к совместному существованию, Эдди и Веном стали друзьями и вместе сражаются со злодеями. Но теперь за Эдди охотятся военные, а за Веномом — его инопланетные сородичи, угрожающие всему живому.",
    name: "Веном 3: Последний танец",
    ageRestriction: "16+",
    coverUrl:
      "https://kinopoisk-ru.clstorage.net/p1Yc61138/6f20087UZY1/m8gwayfnsK-wjIEEJe3v314uyNP969-_d1s07VOZmrSFXMwQXQ2dR4e1g_1As6TzGW9yWF-ezFdkpoeMPJZXI06MsHtwYmZ7dMxTkTP5-8yZbEgCrz-NLrAN8LvFCZa5CdZX3dWBVs8eKlIukzTzpQ7_dttczxpF9LabFniGWDDdibap5rn15T5WTI_mreASSexEHWho1_5mV_5nUJQbd4Ie3FpTwFfLUOpWKxoufCRDcD7QHIiQG7TyEN2gSp44WY71Lqc9cOC02gQIZqftWkhsD5djYdW4qJ00opqYG_BN2tzW3MNXDNDiVilcKvzuB_E2ntWBmtU89lyQbAZTtZZLMSalNb9mflSCjicvJljDKAwd46Df-C0c_Goalp83CVVeE5KIGg2SJ9ttXq18pUtxNtkdCtTdfHEaUuxD2_3bzDBipX7wZLYcwkVk56_RyKbAWq6pV7OinbxtmVeaMEQU1JwfhNwAnqyUapMqcmVM97ZSnEGQE3k_n1WmxNc8XscyLCg18yt1HInF6uqo085gy12oaZC0JZo_JxVbG_WDXZwW2MaZA11kUWKTpnqpAzwzEtcHFtd08x9QbctfdpfItiYpOPqrshGPAWYpZVEAJEXa76rVcy_Y8-2ZHNi8wBffG1yL3sYdaNzqn-LzI0S4O51cwVDUtDJVkyrO3X6aB7nrafD7Y_DRgQZtpmcawK8FEmWkG_GpEzvnkRdXfItf3NccxZrHGuwT5h6kt25Psv6bn83d3fj4V9Jmy595m0l7JSZ992u020MC6yksX0xgAdNs6NO_ZtA0LNIUWvQEXF4RXs7eAprqVy1d4r1vhf47mVUFlZ-7vd6b5ItU8xjG8ivmN_OqcdFCzCysoxkIY8OTZCcTNulUeuddUdNziduVE1ONFAxZ7d6uXq-w5ANwuJjUjxkYcbuWVyTDljVfQbatJzq-4zzbQg7jbegTjmZL2u5m2Hog3_qvm18YM4MWlZnVQJmM2K3TIpYr8eOBdXTZEw5YX_F3XtuqiZD5Gg797u0wtqR1lgICLOesX0DgRNToq1s-4l9zK1ZW2LJBUxZbHY5dANwhWiPYo3ntALkw3FsJmRr-fZnbKwqd-55H8ipotHcrvBYOB63sJl3BYQteqKmVPinU9azUXFHyg5pdF9UJ2gdV49zj0K34JYfwONsbzxuQPjgZUK0GkHvexXBib_p-b_DZScYmLS5QBSkMlSQmVXellHKk3BRdsI-cWdMWBl2DEepbppNtOKIJejkTU0HTVvxxXlspAxJwk8Hy7iVydW3xFcMH5Slg38yvRRqiKlo475V_bdZe1biNFtpbnImcwJJgF6GUL7fqB3VzmBVPVdTzvVWVocmeOVfEeq7gNPfq_1SLgm1p59sF58nWouPXO6pXsq5RUNnzzRpeUlqHmU8cJd2uH2u_aUy6-VJTiBXbO3NUlOoLlTEaDH5vYXf653-Vw0avYWqRh-fIVizuUnmlFPxtkp1V9AfYk5RQDxLP2Weaah3i8izJ9PNcX0OSXvk3kBsgx9o8WsB1JuYx-OD3VotGaudl0cvmSJZm4di27lEz4pzekbKFFJ5SkkydSFlglWCSZjWpzD93lBYOnNb2MVpS4kKcedZG_aqgMbrgtxQCgKcoK9wBJ8sVoiGcP6afeyyYldL0QlJa0JrGGcIYLZptW6Q45Yb4spnXT10csjqdXCvEUDxWSDrnbbx5bvHSBc8kZS0cjS0EXa5g1zOoFLOo3h6SPcvYURMYBJYFHigWYVMuuukIeDhTXUhSnHE9Up2oQ9V8FQs4bqL4ve89EkPH6uQmUMzkghIlbFR4qFM15hYR2fyFlpoWWAgWz9ErFO3b4zOkgDm5lV5JUdQx8FAdq0dUtltG-aduOfajdVNDjKoqpREMIAwVZuaeu6HTfuWYFBI-g5-TUVWIFcMRZBSuVeR9ZsW5t9qcCljT_jiRm2qO1XkWSHFsKDa1pb2UjM9up6RcRibAWKavXj4snH4unFdVvU_dl9BciJzPGSKdp9zi_KsEMLnR1A5b3zT3GlflCFy63gu7o6k5N6zwlsYIbyWsWcQuxZXm49ay7x9wr5yRHHrF35VWW0bXz53tnWAXY3wmxbmyVZZGXdY1MBnSKoGVsN_E8iEotT3iPNvLhKspI9jM4A8VqiBSuejcuOxT15H-glpSGRTLWUwfoxbokio9aU03_9LXjVSXuvHfmKMH2nrfC7wqLnXxZzzdwoXtaqQbxeHAXWevHf7hHfxskRsbt8UelFCXjRmDEGKfKhes-6lJ8fRb386VV3u6mpssS5c0koC65-b3fiv1mw2AouXrG4QoBRLvIds36ZNwL9KdFHwPm1KRGkgVx5lr2q-TZn3pwHb02h5BGBa6uFLTq48SdNiJ-exnfH8ivhSJDqyoopqPJojdZGAbNOEb9iPaGRW_R5Re0FQIUYsXYZonHOR47YE_8VbTDpMaOHJXk2pClfhbRzth4n2xKP7fjoXqb2TaDetMUGInErqn2j2lWZaa8ETdVhSbx5HL1KpU7xPqOGVOdv6b2o2ZEDp5HZNuCdMz0gw7ben8siC6U4XCLKQmEI6hD59jaBN37lp1KNKfmvBHGxQfXobYSJUrWakaIfThy3I5HRiLGxr5dtWR7MYTdhrEvGtruLDm_x4CwKXl4hiIbQrWqyRa9mcTM6wdX1i3AdMfltAIFo0eYRGvlOsybU79PJRTgV2c8L9a0C7O3HQdwDqlafx9qP6TD8LkKKsdB25FUiasXXQhEHglmxEZtI-S01SYQ1GHmSAZYtVssy3EtvyR0kITVH3wHZjpTxcwmkwxbmWweKp8l4eC4O9ok4BgCVws7lh7ZF115dXWVzsF19_T1IBVzJVv0ygXYXGpwTC2FBwFmhryst9YqgNVtBIBNWkgerpuPxzEBWbqYlUApQWY6iwcMG0cOqVdE9C3ydubURvP0MWWK5Kl3muyrU--e5PUi5OQdY",
    genres: [
      {
        name: "Фантастика"
      },
      {
        name: "Боевик"
      },
      {
        name: "Ужасы"
      },
    ],
    galleryUrls: [
      "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_665ded6f31e4ee216f24e9e3_665e2059a2886608ad575d16/scale_1200",
      "https://sun9-80.userapi.com/impg/C26sjXSVARWILjaLLeiE9zZWHMT63ciCZwIJsA/kA5Wbiedipg.jpg?size=807x486&quality=95&sign=90f2ac3a40008c9a180a7153746305eb&c_uniq_tag=990lsYN3K8LEZ0BZ2ryPk18lH6mCklmrq5PvFvgKi4c&type=album"
    ]
  },
  {
    id: "3",
    type: "Мультфильм",
    publishYear: "2024",
    publishCountry: "США, Япония",
    name: "Дикий робот",
    description: "Робот ROZZUM 7134, потерпев кораблекрушение на безлюдном острове, пытается приспособиться к местным условиям и заводит дружбу с обитающими там животными",
    ageRestriction: "6+",
    coverUrl: "https://kinopoisk-ru.clstorage.net/2V8v9j405/aef8a6SjH/D-fXTEUTUAnJcbprLgCOFsL3RDLgKSDiaaSqa0wPkMeIZ8HEf7sA0Bu4GHUgctL1rC5uCvn_i4hHWOlh18QB9l6Kgk0NVihQuDy6Z1tZ00bb0z1rlTFdu0C43wcJZvnHSL8JbcNjiByjMYGIPU_qgNlPFwv0p76cZnX8eB5tFaMjZ1fEEeNBteEx08tSvFJiGjLQWizQGE61_UpfWAdkJ1wbNclnUyx8x3UJrKm3G5R9e5Ov6MOOuPNlnHQqPNmzQ5_fRAmTWR2hgWv3hoiaKnY68L74xJTGYb12U-RvEJ_sf0lNh_eIALeh6WglHyMcuaM7X_SLNmh_WZgosoTFI0evM0RNVwW1wSWT3wIU1i6KEnAWqKykbnX5-t8MD8xL8GNluRc_dNCXYbmUZYuT3LFzvxNcrwbIr1H8_PqcXSdXJwv0hVOhpRlNY9fiuG6yjrrUpqx8mJpJFT77pLscD6Df7Q3jj_iYAwWtnOkbr7SRuz-naC8idGvxZLD-GI031-uPAH27Fdn5pe_XWuSG1sJaQE5cqLBG5VmuU-zzDNOUE7WpH48wENNpNYghzx8kTd_Le7gnvkBnyZSYIiBJrxMjx1QZz_kFKWnzWwrMMiqKXkzSTHB0NqGxCotcX4wjFP-h-U97_DCzdT2oKR8_YCVDP-uw8_oAr0kUxKoo1UsDD-MUTfcl0W1dNzuSlLrWgl6Y7iDQ0KahkQpv4AN4vxyD6fl3u1Tk03Fp6Cm316jFW3cLmP96QAudpDiKQH3rX5eX0P2__QW5bUM37hzyPkpaLBIsoCh2nW2KS9QbbLf4Y01x1yeE0LMxGRCxP2Ms-dsTB_wzHhR_7Tj0ihy5N7cvX_x1001lsUnnX3aIjkqKCmhOPJzQVtn5VsMws3zXlKMdgZOb4BhneYGUVfu_pK0j578Ui1KYhymUCC6EHWs_D4skTQOZKZWFp1debNIe_rKk2nxowD41cfYXTBeA3zinpdUPh3BMt5ExiP1Tq-TN__OfBCs6OH_5mIwKeCUvU2-3VGEDjSlVKaszjoginl6qzNLgqIweWdkqz9yrnK8MU50lDzPoWE9JoSTJ01fkvXtvAzgLivBvYfw0erjxv5NjF1zJzwlR4bErB2qMJub-xuzOcGSgdh15xoOoY-yn1GdtdduXiMgnFcHsTY_7DOk3OxuI047kXyXgiM7USeeblwvYJQvRiXkpF39aWN4uNp7YbvDMiEYx2Tp_pL94j4RnAY2jmwBANwHtOGV3_3AtS0-7oAPS2H8BeOx-FLXjMxvnGGk_fdnZid-HXqgyWnpGFN4g6NRmlT0CywiHHCtsJ8Eh97f8GL8ZDWT5-78ESXdz15xbegxzhZwM_ozVP88rByjdX8nhlc2vF4bIEoJyvrReYMzQxrHZsh_IUwxPuOvltQ8_oMxHcZXghVev5DV7o1NUtwqUbynkzLYA9UczF5-QWePFVVUxfx8a1CaiTtLwakyQDG5pkb7f7Je8H-jzKVWTW-wEb7V5LAFba5g9C-8vqJO2HM-ZADDSRFFbl7vjuO1PvelxJddDntxyEuIyRO7gIDwq2ZXKS3B3AEvwm7V9k3tQZDs1cVR1Twu0Ee-Hf9AvIugPgZjkNoyl28-Xa5iNO4nR-aGnG5ownhZqNtjGKJwsRnG5Stegi3xTbPsl8X83fFBf-QG0rZt74NHP93s4B1a0a0Uw7Db4hfPXm9u4qWvNNeHx3zviJOZiCtI4vlj0sBaxaZqL2Av8W_D73S3vs6x0S2l5pPlT95S1RxcvfFOKMHOVIJxCoNX_63_DXJF7WT1lJT8zRtDepgKCMFZ4HEwyuVmSp3Dj_EsA3yltK1uoGFvJBfDZh6dobddvr-yvErSPnaSo1pTBz88vZwhRy4llKVGXF5Y8noI-trwerEwEmuHttmMs-_ybaBehfVsHXEg3YS00JcNvNPkP9xe8HxKIl5GoAAJcmTO3a4_MDRel-U09P0_StPpeEq7kRjjElK4prbYnSJPku-zTOc0DzwRsTxHtkHmn14ztP-8fnCsuFIvd8CimWPUjJ_-3lCVPVVEtMTt7UihSopZ20BJ4oAgyTWW-f7wzkBew91Ftb9OI4LelOVixG__0NaezdxCjelSDRWSg_rSlO89fb3ztR0UdlfFry56cklZGktBeNHQ0Wp3JTkNM5zy3cNsJjedH5AzXMcEkcc-jrD0rT_8Iwwaw4-WMRMYEhUc_O-9AFUepkUHBk2tiOGredlooppQ0sGrRWS7T9IsQtyzHveFvwyyEAz3xGMU_d-h5V8uH1FeuWAsdjCii0J2_7wf3gO0LWVHtNevPGrwKGh6SZKIQEJR2Sa169_y_aCd8B0n1G0cIgL_pPajRFzOYrUPv64gv_hwjUbgcJiCNs5O79yTZB63xafnDY3q4Mj7SAhxewKDELjHRVvP034ArBNeVsXuToDAv4bXUfXcrCKnLO__gy97sa5mItAJUNT_jM0cQgZetFUWlezdurOIu3kK8lqT8GMrJRYL7VJ8or-hr7VXDt1zQS-kBJPkbK1ipV-fvaMMi7O9FYAzSnLE_1x_X_GX7TbUttScf7uRmsvLObF7AcNAy2WVeb-SzoC-E05ENhydoMMMdbYT9C-dkzeP3LwwjspwDBSg8erDRG2-rF3RtT9XV2VlXl4oAAloOcthu4OzY8qlRUid875Bv3JfNqZt7_MBvpfGUCdPzoCX_H9Mwr97gQxmgtL74oe8bt1t8GU-ZZdHpY7vSUOq2Uh7YLqjo_JYhRRbTLKvIA2SbwfVfX7y00zXBKNVLv5iRd_8j4Mf-cOcRoAx6WDVfq3eLEIVPtSXxdWsPFtzerpq2MF7UTKC2Qbnac4zvCFs88ymJBw_0eMc9lWhZe2ts-Y-DPyQf0pjz-fDg_pyRO5OHS4xl98HpIW2XQ-o0erpivlSy6Migcvmdsic4p0jvrJdZxR9PbIA7sR2I_b-DeE0r52skU67Ij42M",
    genres: [
      {
        name: "Фантастика"
      },
      {
        name: "Приключение"
      },
      {
        name: "Семейный"
      },
    ],
    galleryUrls: [
      "https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/6354ed5c-160b-4045-a259-43baf221652a/1920x",
      "https://avatars.mds.yandex.net/i?id=1fa9e9d195b2861b72227c7f9740a2f2395af266-4489749-images-thumbs&n=13"
    ]
  }
];

export const MOVIES_SOON: Movie[] = [
  {
    id: '3',
    type: "Мультфильм",
    name: "Zootopia 2",
    publishYear: '2024',
    ageRestriction: "6+",
    description: "no description",
    coverUrl: "https://i.ytimg.com/vi/O8K9Te28hxk/maxresdefault.jpg",
  },
];

export const SESSIONS: Session[] = [
  {
    movie: MOVIES_NOW[0],
    date: "08-12-2024"
  },
  {
    movie: MOVIES_SOON[0],
    date: "08-12-2024",
    timeList: [
      {
        hall: 1,
        time: '9:45',
        price: 160,
        format: '2D'
      },
      {
        hall: 2,
        time: '10:45',
        price: 200,
        format: '2D'
      }
    ]
  },
  {
    movie: MOVIES_NOW[1],
    date: "08-12-2024",
    timeList: [
      {
        hall: 3,
        time: '9:45',
        price: 160,
        format: '2D'
      },
      {
        hall: 3,
        time: '10:45',
        price: 200,
        format: '2D'
      },
      {
        hall: 2,
        time: '14:45',
        price: 160,
        format: '2D'
      },
      {
        hall: 2,
        time: '16:45',
        price: 200,
        format: '2D'
      },
      {
        hall: 3,
        time: '20:45',
        price: 200,
        format: '2D'
      }
    ]
  }
];

export const USERS: User[] = [
  {
    name: "Alexander",
    surname: "Chibizov",
    details: {
      login: "evosome",
      avatarUrl: "https://sun9-20.userapi.com/impg/N1MrNkWuJMIi1V1KKN_AMiyRGpAh08RifZDf9g/GywHVwCME08.jpg?size=500x504&quality=96&sign=24d083a23ebd97e075fe9fd88fa2bca6&type=album",
      telephoneNumber: "900"
    }
  }
];
