/* ============================================
   KAGERŌ — 日本語版
   第1話: 最初の囁き
   ============================================ */

const CHAPTERS_JP = {
  1: {
    jp: "第1話",
    title: "最初の囁き",
    pages: [
      { type: "splash", scene: "雨の東京の夜 — 新宿のスカイライン — 血の中に咲く赤い花", dialogue: [{ type: "inner", text: '「すべての死は痕跡を残す。しかし、あるものは…花を咲かせる。」' }] },
      { type: "normal", scene: "雪がひざまずいて、血の池の中の花を見つめている — 雨", dialogue: [{ type: "say", speaker: "雪", text: "また…？" }, { type: "inner", text: '「この感覚…毎回同じ。吐き気。動悸。そしてあの声…」' }] },
      { type: "closeup", scene: "フラッシュバック — 燃える家の前に立つ7歳の雪", dialogue: [{ type: "say", speaker: "母（声）", text: "雪！逃げて！振り返らないで！" }] },
      { type: "normal", scene: "雪の指が花に触れる — 接触の瞬間", dialogue: [] },
      { type: "splash", scene: "雪の目が白い光で満たされる — 囁き", dialogue: [{ type: "whisper", text: '「ナイフが…とても冷たい…」' }, { type: "whisper", text: '「お願い…やめて…」' }, { type: "whisper", text: '「母さん…母さんはどこ…」' }] },
      { type: "closeup", scene: "暗い路地を走る女性 — 背後に影の人物", dialogue: [] },
      { type: "normal", scene: "街灯の下の蓮 — 手に短刀 — 嘲笑", dialogue: [{ type: "say", speaker: "蓮", text: "触るべきじゃなかった。" }, { type: "say", speaker: "蓮", text: "それとも、お前も『感応者』か？" }, { type: "say", speaker: "雪", text: "あんた…誰？" }, { type: "say", speaker: "蓮", text: "それはこっちのセリフだ。だがまず…この花があと何本あるか知ってるか？お前もその一つだったんだ。" }] },
      { type: "splash", scene: "蓮が雪に手を差し伸べる — 何百もの幽霊花のシルエット — 『暗い庭へようこそ』", dialogue: [] }
    ]
  },
  49: {
    jp: "第49話", title: "解放",
    pages: [
      { type: "splash", scene: "神社 — 金の花は枯れている — 雪がそれを見つめる — 別れ", dialogue: [{ type: "inner", text: '「金の花は枯れた。しかし、その役目は果たした。そして今は…手放す時だ。」' }] },
      { type: "normal", scene: "雪が金の花を持ち上げる — 枯れているが、穏やかに", dialogue: [{ type: "say", speaker: "雪", text: "金の花…ありがとう。すべてに。" }, { type: "say", speaker: "金の花", text: "私こそ、ありがとう、雪。あなたは私を使い、そして私に安らぎをくれた。" }, { type: "say", speaker: "雪", text: "あなた…行ってしまうの？" }] },
      { type: "closeup", scene: "金の花が最後にもう一度輝く — そして消えていく", dialogue: [{ type: "say", speaker: "金の花", text: "ええ。私の魂はようやく安らぎを得た。だから、もう行けるの。" }, { type: "say", speaker: "雪", text: "あなたのことは、決して忘れない。" }, { type: "say", speaker: "金の花", text: "わかっているわ。だってあなたは…私の孫娘だもの。" }] },
      { type: "splash", scene: "金の花が塵になる — 風がそれを運んでいく — 雪が見送る", dialogue: [{ type: "say", speaker: "雪", text: "さようなら…祖父さま。さようなら…家族。でも、あなたたちを心に抱いて生きていく。" }, { type: "say", speaker: "蓮", text: "雪…大丈夫か？" }, { type: "say", speaker: "雪", text: "うん。大丈夫。本当に。" }] },
      { type: "normal", scene: "神社の境内 — 家族が集まる — 新しい時代", dialogue: [{ type: "say", speaker: "美桜", text: "それで…これからどうなるの？" }, { type: "say", speaker: "雪", text: "これからは新しい始まり。一年間、私は Kan'nōsha の力を失っていた。でも、それは良いことなのかもしれない。" }, { type: "say", speaker: "黒澤博士", text: "どうして良いことなの？" }] },
      { type: "closeup", scene: "雪がお腹に手を当てる — 微笑み", dialogue: [{ type: "say", speaker: "雪", text: "だって、赤ちゃんがいるの。そして、この子のために普通の人生を生きたい。少しの間でもいいから。" }, { type: "say", speaker: "蓮", text: "雪…" }, { type: "say", speaker: "雪", text: "それに、この時間の中で、本当に生きることを学べるかもしれない。" }] },
      { type: "splash", scene: "神社 — 家族みんなで — 未来を見つめる", dialogue: [{ type: "say", speaker: "雪", text: "でもその前に、しなければならないことがあるの。" }, { type: "say", speaker: "蓮", text: "何だ？" }, { type: "say", speaker: "雪", text: "墓地に行くこと。母と父に別れを告げる。本当の別れを。" }] },
      { type: "normal", scene: "谷中霊園 — 雪と蓮 — 百合子と蒼蓮の墓", dialogue: [{ type: "say", speaker: "雪", text: "母さん…父さん…今、本当に別れを告げるね。でも、二人はいつも私の心の中にいる。" }, { type: "say", speaker: "雪", text: "そして約束する。私は幸せになる。本当に幸せに。" }] },
      { type: "splash", scene: "雪が墓に白い花を供える — 太陽が昇る", dialogue: [{ type: "say", speaker: "雪", text: "この花は、二人のために。そして、あなたたちの娘であることを誇りに思う。" }, { type: "say", speaker: "蓮", text: "雪…帰ろう。家まで送るよ。" }, { type: "say", speaker: "雪", text: "家…うん。私たちの家。" }] },
      { type: "closeup", scene: "雪と蓮 — 手をつないで — 墓地を後にする", dialogue: [{ type: "say", speaker: "雪", text: "蓮…言いたいことがあるの。" }, { type: "say", speaker: "蓮", text: "言ってくれ。" }, { type: "say", speaker: "雪", text: "愛してる。そして、これは本当のこと。初めて、完全に本当のこと。" }] }
    ]
  }
};
