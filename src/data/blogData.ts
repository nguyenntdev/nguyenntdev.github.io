import type { Localized } from '../utils/i18n';

export type BlogCategory =
  | 'all'
  | 'research'
  | 'hospitality'
  | 'heritage'
  | 'journey'
  | 'reflection';

export interface BlogEpigraph {
  quote: string;
  attribution?: string;
  translation?: string;
}

export interface BlogListItem {
  lead?: string;
  text: string;
}

export interface BlogSectionBlock {
  heading?: string;
  paragraphs: string[];
  formula?: {
    label?: string;
    expression: string;
  };
  list?: {
    ordered?: boolean;
    items: BlogListItem[];
  };
  afterListParagraphs?: string[];
  quote?: {
    text: string;
    translation?: string;
  };
  note?: {
    label: string;
    content: string;
  };
}

export interface BlogPostLocaleContent {
  title: string;
  date: string;
  readTime: string;
  categoryLabel: string;
  excerpt: string;
  epigraph?: BlogEpigraph;
  pullQuote?: string;
  sections: BlogSectionBlock[];
  externalReference?: {
    label: string;
    url: string;
  };
}

export interface BlogPost {
  slug: string;
  category: Exclude<BlogCategory, 'all'>;
  content: Localized<BlogPostLocaleContent>;
}

const VNEXPRESS_URL =
  'https://vnexpress.net/nam-sinh-lop-7-thuc-hien-nhieu-du-an-cong-nghe-4378270.html';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'uoc-mo-tro-thanh-mot-nguoi-binh-thuong',
    category: 'reflection',
    content: {
      vi: {
        title: 'Ước mơ trở thành một người bình thường',
        date: '19 tháng 11, 2026',
        readTime: '4 phút đọc',
        categoryLabel: 'Tản mạn & Suy ngẫm',
        excerpt:
          'Giữa một thế giới luôn đề cao sự xuất chúng và những cuộc đua thành tích, điều tôi thực sự khao khát là sống một cuộc đời bình dị nhưng không tầm thường—để khi ngoảnh lại, chính mình không phải cúi đầu tiếc nuối.',
        epigraph: {
          quote: '“Carpe diem” – Hãy nắm bắt ngày hôm nay.',
        },
        pullQuote:
          'Tôi không sợ trở thành một người bình thường; tôi chỉ sợ rằng trong hành trình cố gắng trở nên phi thường, mình lại đánh mất những điều bình dị làm nên ý nghĩa cuộc sống.',
        sections: [
          {
            paragraphs: [
              'Có lẽ điều đáng tiếc nhất của đời người không phải là chưa từng chạm đến những đỉnh cao, mà là đã dành cả thanh xuân để theo đuổi chúng, rồi quên mất cách tận hưởng cuộc sống. Giữa một thế giới luôn đề cao sự xuất chúng, nơi con người không ngừng chạy đua với thành tích, danh vọng và những kỳ vọng, tôi lại mang trong mình một ước mơ có phần khác biệt: trở thành một người bình thường, sống một cuộc đời bình dị nhưng không tầm thường.',
              'Tôi từng nghĩ rằng ước mơ phải là điều gì đó thật lớn lao, rằng chỉ khi đạt được những thành tựu nổi bật, con người mới có thể khẳng định giá trị của bản thân. Thế nhưng, càng trưởng thành, tôi càng nhận ra rằng thành công và hạnh phúc không phải lúc nào cũng song hành. Có những người đứng trên đỉnh cao danh vọng nhưng vẫn cảm thấy cô độc, cũng có những người sống một cuộc đời giản dị mà luôn tìm thấy sự đủ đầy trong tâm hồn. Bởi vậy, điều tôi thực sự khao khát không phải là trở thành một người được cả thế giới ngưỡng mộ, mà là một người có thể sống đúng với chính mình, được làm điều mình yêu thích và trân trọng những gì đang có.',
              'Đối với tôi, trở thành một người bình thường không đồng nghĩa với việc từ bỏ hoài bão hay chấp nhận sống một cuộc đời vô nghĩa. Ngược lại, đó là khát vọng được tự do lựa chọn con đường riêng, không phải liên tục chứng minh giá trị bản thân bằng những thước đo của xã hội. Tôi vẫn muốn học hỏi, nỗ lực và tạo ra những giá trị tích cực cho cộng đồng. Nhưng tôi cũng muốn có những buổi sáng thức dậy mà không phải lo sợ mình đang tụt lại phía sau, có thời gian dành cho gia đình, cho những người yêu thương và cho cả chính mình.',
              'Ước mơ ấy còn mang một ý nghĩa sâu sắc hơn trong xã hội hiện đại. Khi con người ngày càng dễ bị cuốn vào vòng xoáy của sự so sánh và áp lực thành công, việc biết hài lòng với những điều giản dị trở thành một khả năng đáng quý. Một xã hội tốt đẹp không chỉ được xây dựng bởi những cá nhân kiệt xuất, mà còn bởi biết bao con người bình thường đang âm thầm làm việc, yêu thương và sống có trách nhiệm. Không phải ai cũng cần tạo nên những kỳ tích lớn lao; đôi khi, sống tử tế, giúp đỡ một người gặp khó khăn hay mang lại niềm vui cho gia đình cũng đã là một cách khiến thế giới tốt đẹp hơn.',
              'Tất nhiên, tôi hiểu rằng cuộc sống bình yên không tự nhiên mà có. Để đạt được ước mơ ấy, tôi vẫn cần không ngừng trau dồi tri thức, rèn luyện bản lĩnh, học cách tự lập và chịu trách nhiệm với những lựa chọn của mình. Quan trọng hơn, tôi phải biết chấp nhận những thiếu sót, không để thất bại định nghĩa giá trị bản thân và không đánh đổi tất cả chỉ để tìm kiếm sự công nhận từ người khác.',
              'Carpe diem – hãy sống trọn vẹn hôm nay, bởi ngày mai chưa bao giờ là một lời hứa chắc chắn. Tôi không sợ trở thành một người bình thường; tôi chỉ sợ rằng trong hành trình cố gắng trở nên phi thường, mình lại đánh mất những điều bình dị làm nên ý nghĩa cuộc sống. Sau cùng, tôi không mong có một cuộc đời khiến cả thế giới phải ngước nhìn, mà chỉ mong có một cuộc đời để khi ngoảnh lại, chính mình không phải cúi đầu tiếc nuối.',
            ],
          },
        ],
      },
      en: {
        title: 'The dream of becoming an ordinary person',
        date: '19 November 2026',
        readTime: '4 min read',
        categoryLabel: 'Reflection',
        excerpt:
          'In a world obsessed with eminence and endless achievement races, what I truly want is an ordinary, unhurried life that is never shallow—one I can look back on without quiet regret.',
        epigraph: {
          quote: '“Carpe diem” — Seize the day.',
        },
        pullQuote:
          'I am not afraid of becoming an ordinary person; I am only afraid that in trying so hard to become extraordinary, I might lose the simple things that make life worth living.',
        sections: [
          {
            paragraphs: [
              'Perhaps life’s deepest regret is not failing to reach the highest peaks, but spending an entire youth chasing them and forgetting how to actually live. In a world that endlessly elevates distinction—where people race nonstop against metrics, prestige, and expectations—I carry a slightly different dream: to become an ordinary person, living a simple life without being mediocre.',
              'I used to believe a dream had to sound grand, and that only visible, standout achievements could validate a person’s worth. Yet the older I grow, the clearer it becomes that success and happiness do not always walk hand in hand. There are people standing at the summit of acclaim who still feel deeply alone, and people living quiet, modest lives who carry a steady fullness of spirit. What I truly long for is not to be admired by the entire world, but to live honestly as myself, do work I care about, and cherish what is already in front of me.',
              'To me, becoming an ordinary person does not mean abandoning ambition or settling for a meaningless life. On the contrary, it is the freedom to choose my own path without constantly proving my worth against someone else’s yardstick. I still want to keep learning, push myself, and create genuine value for the people around me. At the same time, I want mornings where I wake up without the dread of falling behind—with room left for family, for the people I love, and for myself.',
              'That dream feels even more necessary in modern life. As comparison and performance pressure tighten around us, learning to be content with simple things becomes a quiet strength. A good society is not built solely by celebrated prodigies; it is held together every day by countless ordinary people working faithfully, loving generously, and living responsibly. Not everyone needs to leave behind a monumental miracle—sometimes living kindly, helping someone through a hard day, or bringing warmth home to your family is already how the world gets better.',
              'Of course, a peaceful life does not arrive by accident. To earn it, I still have to keep building knowledge, strengthening my character, learning independence, and taking ownership of my choices. More importantly, I have to accept my own imperfections, refuse to let failure define my worth, and stop trading everything away just to win external approval.',
              'Carpe diem—live today fully, because tomorrow has never been guaranteed. I am not afraid of becoming an ordinary person; I am only afraid that in trying so hard to become extraordinary, I might lose the simple things that make life worth living. In the end, I do not ask for a life that makes the whole world look up—only a life that lets me look back without bowing my head in regret.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'su-chuyen-hoa',
    category: 'reflection',
    content: {
      vi: {
        title: 'Sự chuyển hóa',
        date: '17 tháng 11, 2026',
        readTime: '4 phút đọc',
        categoryLabel: 'Tản mạn & Tâm lý',
        excerpt:
          'Thứ giải thoát chúng ta khỏi mớ hỗn độn lo âu không phải là một kỷ luật thép đầy bạo lực với bản thân, mà là sự can đảm để chấp nhận, cởi trói và lớn vượt qua những tiếng ồn xung quanh.',
        epigraph: {
          quote: '“What you resist persists. What you accept transforms.”',
          attribution: 'Carl Jung, nhận xét về cuốn The Secret of the Golden Flower',
          translation:
            'Thứ bạn càng kháng cự sẽ càng đeo bám; thứ bạn can đảm chấp nhận mới bắt đầu chuyển hóa.',
        },
        pullQuote:
          'Khi bạn đứng ở một tầng nhận thức rộng mở hơn, việc học hay làm việc sẽ không còn là một chiếc khiên để trốn chạy mạng xã hội hay đối phó với sự bất an. Bạn bước tiếp đơn giản vì bạn nhìn thấy giá trị thật của con đường mình đi.',
        sections: [
          {
            paragraphs: [
              'Đang lướt Threads thì thấy câu hỏi của một bạn – và cũng là nỗi trăn trở của rất nhiều bạn trẻ cùng lứa: “Làm thế nào để ép cơ thể bước vào trạng thái chỉ có học, không bận tâm đến bất kỳ lời nói bên ngoài hay bị phân tâm bởi TikTok, Insta?”',
              'Cứ nghĩ chỉ là sự quyết tâm, nhưng nhìn kỹ lại mới thấy xót xa biết nhường nào trước chữ “ép”. Ngày trước, chính bản thân mình cũng từng tin rằng “Kỷ luật là sức mạnh” – biến bản thân thành một cỗ máy vô cảm chỉ cắm đầu vào sách vở, muốn bịt tai trước miệng đời và căm ghét từng phút giây lỡ tay quẹt trúng điện thoại.',
              'Cũng như câu chuyện của tình yêu và lý trí, cơ thể và tâm trí con người đâu phải một chiếc máy vi tính để ta nhồi nhét áp lực hay lập trình bằng những mệnh lệnh cứng nhắc... Nó cũng biết đau, biết bị đè nén, biết phản kháng… và biết phát nổ – như một quả bóng bay vậy.',
              'Đôi khi, việc vùi đầu vào mạng xã hội chỉ là nỗ lực vụng về của não bộ nhằm tìm một ngụm thuốc giảm đau tạm thời trước mớ hỗn độn lo âu. Phải chăng, việc khao khát biến mình thành gỗ đá thực chất chỉ là cơ chế phòng vệ của một đứa trẻ đang sợ bị tổn thương trước những phán xét ngoài kia?',
              'Nó làm mình nhớ ngay đến một đúc kết của nhà tâm lý học Carl Jung về khái niệm lớn vượt (outgrow):',
            ],
            quote: {
              text: '“All the greatest and most important problems of life are fundamentally insoluble... They can never be solved, but only outgrown.”',
              translation:
                'Mọi vấn đề lớn lao và quan trọng nhất của đời người về căn bản đều không thể giải quyết... Chúng không bao giờ bị triệt tiêu, mà chỉ có thể vượt qua khi con người ta lớn lên.',
            },
            afterListParagraphs: [
              'Không ai có thể bắt thế giới ngoài kia ngừng phán xét, ngừng bình luận… vì chính những va đập ấy cấu tạo nên xã hội con người. Và ta cũng chẳng thể quay ngược thời gian để xóa bỏ những gì đã cũ. Nhưng khi phần “người” của ta lớn lên, tự khắc những tiếng ồn li ti ấy sẽ tự nhỏ lại.',
              'Có lẽ, thứ giải thoát chúng ta khỏi mớ hỗn độn không phải là một kỷ luật thép đầy bạo lực, mà là sự can đảm để cởi trói cho chính mình.',
              'Là khi ta cho phép bản thân sống một cuộc đời không áp lực vô nghĩa, không ràng buộc, không tự nhốt mình vào những mục tiêu quá đỗi cứng nhắc.',
              'Là không còn phải nhìn nét mặt của bất kỳ ai để thở, dứt khoát buông bỏ những mối quan hệ độc hại chỉ làm tiêu tốn thời gian và bào mòn sinh lực.',
              'Là dám chủ động bước ra ngoài, mở rộng vòng tròn kết nối – không phải để chứng minh điều gì với thiên hạ, mà để mở rộng tầm mắt, để biết thế giới bao la nhường nào và định vị xem mình thực sự đang ở đâu.',
              'Học cách tha thứ cho những vụng về của chính mình, biết buông bỏ những thứ không thuộc về tầm kiểm soát, và học cách trả lại sự cân bằng cho cuộc sống.',
              'Khi bạn đứng ở một tầng nhận thức rộng mở hơn, việc học hay làm việc sẽ không còn là một chiếc khiên để trốn chạy mạng xã hội hay đối phó với sự bất an. Bạn bước tiếp đơn giản vì bạn nhìn thấy giá trị thật của con đường mình đi.',
              'Và dù kết quả có ra sao, thì đó cũng đã là sự cố gắng trọn vẹn của chính bản thân mình rồi – nhẹ nhõm, bình thản, và không chút tiếc nuối!',
            ],
          },
        ],
      },
      en: {
        title: 'Transformation',
        date: '17 November 2026',
        readTime: '4 min read',
        categoryLabel: 'Reflection & Growth',
        excerpt:
          'What frees us from inner noise is rarely violent, iron-fisted self-discipline—it is the courage to stop fighting ourselves, loosen the knots, and outgrow the noise.',
        epigraph: {
          quote: '“What you resist persists. What you accept transforms.”',
          attribution: 'Carl Jung, commentary on The Secret of the Golden Flower',
        },
        pullQuote:
          'When you stand at a wider level of awareness, studying or working stops being a shield to hide from social media or anxiety. You keep walking simply because you see the real value of your path.',
        sections: [
          {
            paragraphs: [
              'While scrolling through Threads, I came across a question from a peer—one that captures the quiet exhaustion of so many young people our age: “How do I force my body into a state where I only study, stop caring about outside opinions, and never get distracted by TikTok or Instagram?”',
              'At first glance it sounds like grit. Look closer, though, and there is something deeply aching inside the word “force.” I used to believe in that exact brand of “discipline equals power”—trying to turn myself into a numb machine buried in textbooks, plugging my ears against other people’s chatter, and resenting myself for every accidental minute spent unlocking my phone.',
              'Yet the human body and mind are not a computer waiting to be overloaded with pressure or programmed through rigid commands. They feel pain, feel compressed, push back—and eventually burst, just like an overinflated balloon.',
              'Sometimes losing ourselves in social media is simply the brain’s clumsy attempt to swallow a temporary painkiller for a tangle of unspoken anxiety. And maybe wanting to turn ourselves into stone is really just the defense mechanism of a younger self still afraid of being bruised by judgment.',
              'It immediately reminded me of Carl Jung’s insight into what it means to outgrow a struggle:',
            ],
            quote: {
              text: '“All the greatest and most important problems of life are fundamentally insoluble... They can never be solved, but only outgrown.”',
            },
            afterListParagraphs: [
              'No one can command the outside world to stop judging or commenting—those collisions are simply part of human society. Nor can we rewind time to erase what has already happened. Yet as our inner self grows larger, those petty noises naturally shrink on their own.',
              'Perhaps what liberates us from the mess is not harsh, violent discipline, but the courage to untie ourselves.',
              'It is allowing ourselves to live without pointless self-punishment, without trapping our days inside brittle, suffocating targets.',
              'It is no longer watching other people’s expressions just to breathe—and having the clarity to let go of toxic ties that only drain time and energy.',
              'It is stepping outward willingly to widen our circle—not to prove anything to the crowd, but to broaden our horizon, see how vast the world really is, and understand where we honestly stand.',
              'It is forgiving our own clumsiness, releasing what lies outside our control, and returning balance to daily life.',
              'When you stand at a wider level of awareness, studying or working stops being a shield to hide from social media or anxiety. You keep walking simply because you see the real value of your path.',
              'And whatever the outcome turns out to be, you will know you gave it your whole, unforced effort—light, calm, and without a trace of regret.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'truong-thanh',
    category: 'reflection',
    content: {
      vi: {
        title: 'Trưởng thành',
        date: '16 tháng 11, 2026',
        readTime: '6 phút đọc',
        categoryLabel: 'Tản mạn & Trưởng thành',
        excerpt:
          'Điều khó nhất khi lớn lên không phải là học cách chịu đựng thêm bao nhiêu áp lực, mà là chấp nhận một sự thật rất bình thường: thế giới này chẳng vận hành xoay quanh cảm xúc của riêng mình.',
        epigraph: {
          quote:
            '“If you base your identity on having friends, being accepted, and being popular, you may find yourself compromising your standards or changing them every weekend to accommodate your friends.”',
          attribution: 'Sean Covey, The 7 Habits of Highly Effective Teens',
          translation:
            'Nếu bạn định vị giá trị của bản thân dựa trên việc có nhiều bạn bè, được yêu quý hay được đám đông công nhận, bạn sẽ dễ dàng phải thỏa hiệp với những nguyên tắc của chính mình chỉ để làm vừa lòng người khác.',
        },
        pullQuote:
          'Thứ còn ở lại lâu nhất có lẽ vẫn là cách mình đã sống, những lựa chọn mình đã đưa ra, và liệu mình có thể thanh thản khi nhìn lại chúng hay không.',
        sections: [
          {
            paragraphs: [
              'Tuổi tác, số dư tài khoản, khả năng kiếm tiền, thương hiệu cá nhân… – hoặc có thể gọi chung là danh vọng – thường được dùng làm thước đo cho một người trưởng thành. Nhưng hôm nọ, tình cờ đọc được một bình luận dưới bài thảo luận về “dấu hiệu nhận biết một người đã trưởng thành” trên Threads (dạo này hơi bị nghiện lướt Threads thay vì Facebook!), mình lại khựng lại trước một góc nhìn khá thú vị: “Trẻ con khi không được như ý thường quẫy khóc, giận dỗi để thu hút sự chú ý, đòi hỏi mọi thứ phải xoay quanh mong muốn của mình. Còn người lớn, dù chẳng còn nằm lăn ra đất ăn vạ, đôi khi vẫn hành xử bằng một tâm thế chẳng khác ngày bé là bao. Chỉ là tiếng khóc giờ được thay bằng những lời trách móc, sự im lặng đầy ấm ức, hay mong muốn người khác phải tự hiểu cho những tổn thương của mình.”',
              'Ngẫm kỹ lại thấy vừa buồn cười, vừa có chút chạnh lòng. Ngày trước, mình cũng từng quá để tâm đến việc người khác nghĩ gì; một lời nhận xét vô tình cũng có thể khiến mình suy nghĩ cả buổi, một cuộc trò chuyện không như mong đợi cũng đủ làm tâm trạng cả ngày chùng xuống. Có lúc đang làm chuyện khác, đầu óc lại quay về một câu nói từ mấy tiếng trước, tự hỏi không biết người ta có ý gì, hay mình đã làm gì sai. Mà lạ thật, người ta có khi đã quên từ lâu, chỉ còn mình ngồi đó tự diễn giải, tự tổn thương, rồi cũng tự tìm cách an ủi bản thân.',
              'Cũng có một thời gian, mình từng thấy việc quen biết nhiều người, được yêu quý và có mặt trong nhiều cuộc vui là một điều gì đó đáng tự hào. Mình muốn giữ những mối quan hệ tốt đẹp, muốn mọi người có ấn tượng tốt về mình, và đôi lúc vì thế mà ngại cả việc nói ra những điều mình thực sự nghĩ. Nhưng có những ngày trở về sau một cuộc gặp gỡ, tự nhiên thấy mệt mà chẳng hiểu vì sao. Mãi sau này mới nhận ra, có lẽ vì mình đã dành quá nhiều tâm sức để trở thành một phiên bản dễ chịu trong mắt người khác. Cứ sợ nói sai, sợ làm mất lòng, sợ người ta hiểu lầm, đến mức quên mất rằng bản thân cũng có quyền không đồng tình, có quyền từ chối, và có quyền không phải lúc nào cũng vui vẻ.',
              'Nhưng nghĩ đi cũng phải nghĩ lại, mình đâu thể trách người khác vì những kỳ vọng do chính mình đặt ra. Có khi ta đối xử tốt với ai đó rồi âm thầm mong họ cũng phải đối xử với mình như thế. Ta muốn được thấu hiểu, nhưng lại chẳng nói rõ điều mình đang nghĩ. Ta muốn người khác tôn trọng những lựa chọn của mình, nhưng khi họ chọn một con đường khác, trong lòng lại thấy khó chịu. Phải chăng, đôi khi thứ khiến ta thất vọng không hẳn là cách người khác đối xử, mà là việc họ đã không hành động đúng với một kịch bản mà chính ta tự viết ra trong đầu?',
              'Mình nghĩ điều khó nhất khi lớn lên không phải là học cách chịu đựng thêm bao nhiêu áp lực, mà là chấp nhận một sự thật rất bình thường: thế giới này chẳng vận hành xoay quanh cảm xúc của riêng mình. Một người có thể không thích mình mà chẳng cần lý do gì lớn lao. Một mối quan hệ có thể nhạt dần dù trước đó cả hai từng rất thân thiết. Một lời giải thích dù chân thành đến đâu cũng chưa chắc khiến người khác thay đổi cách nhìn. Và có những chuyện mình thực sự đã cố gắng hết sức, nhưng cuối cùng vẫn chẳng đi đến đâu. Trước đây, mình thường muốn tìm cho ra một lời giải thích, một câu trả lời, thậm chí một người để trách. Còn bây giờ, có những lúc nghĩ mãi rồi lại tự hỏi: Ừ thì, nếu mọi chuyện thực sự đã như vậy, mình còn muốn làm gì với nó nữa?',
              'Nói thế chứ mình cũng chẳng phải người lúc nào cũng biết nghĩ thông. Vẫn có lúc nóng nảy, vẫn có những câu nói buột miệng rồi sau đó thấy hối hận, vẫn đôi khi muốn chứng minh mình đúng dù trong lòng đã bắt đầu nghi ngờ chính mình. Cái tôi con người, kể cũng kỳ! Có những chuyện rõ ràng chẳng đáng bao nhiêu, vậy mà cứ nhất quyết phải hơn thua cho bằng được. Đến lúc bình tĩnh lại thấy: thắng một cuộc tranh luận thì được gì nếu cuối cùng cả hai đều chẳng vui?',
              'Càng lớn, mình càng muốn được gặp gỡ nhiều người, nghe thêm những câu chuyện, đi đến những nơi mình chưa từng đặt chân tới. Không hẳn để có thêm bao nhiêu mối quan hệ hay chứng minh bản thân đang sống một cuộc đời thú vị, mà vì mỗi lần tiếp xúc với một con người khác, mình lại thấy những suy nghĩ của mình hóa ra vẫn còn nhỏ bé biết bao. Có người sống rất khác mình mà vẫn hạnh phúc, có người chẳng cần đến những thứ mình từng xem là quan trọng, cũng có người đang âm thầm trải qua những điều mà nhìn bên ngoài chẳng ai biết được. Cũng có những người, tưởng như xa cách về vị trí, tuổi tác, hoàn cảnh… rồi sau khi nghe câu chuyện của họ, lại thấy quá đỗi thân quen! Tự nhiên thấy bớt muốn phán xét, bớt muốn khẳng định điều gì là tuyệt đối. Và cũng bớt xem những chuyện không thuận ý mình là điều gì đó quá ghê gớm.',
              'Thực ra, mình cũng không biết đến bao giờ mới có thể gọi là thực sự trưởng thành. Có khi vài năm nữa đọc lại những dòng này, mình sẽ thấy bản thân của hôm nay vẫn còn ngây ngô, vẫn thích triết lý về những điều mà chính mình chưa làm được. Nhưng thôi, có sao đâu. Chúng ta vốn đâu lớn lên chỉ sau một đêm, và cũng chẳng có tấm bằng nào chứng nhận rằng từ hôm nay mình đã đủ chín chắn để không bao giờ mắc lại những sai lầm cũ.',
              'Chỉ mong rằng sau này, mình sẽ bớt đi một chút cố chấp, bớt để tâm đến những điều chẳng đáng, biết xin lỗi khi sai và biết chấp nhận khi một chuyện không thể diễn ra như mong muốn. Vẫn sống chân thành, vẫn trân trọng những người ở bên cạnh, nhưng không còn phải liên tục tìm kiếm sự công nhận để tin rằng bản thân đang sống đúng.',
              'Nghĩ cho cùng, chúng ta có bao nhiêu thời gian đâu mà cứ phải sống trong những lời nhận xét của người khác. Có những người hôm nay còn rất thân, vài năm nữa có khi chỉ còn là một cái tên quen thuộc. Có những chuyện từng khiến mình mất ngủ, đến một ngày nhắc lại cũng chẳng nhớ nổi vì sao khi ấy lại buồn đến thế. Thứ còn ở lại lâu nhất có lẽ vẫn là cách mình đã sống, những lựa chọn mình đã đưa ra, và liệu mình có thể thanh thản khi nhìn lại chúng hay không. Đời người ngắn ngủi thật, vậy mà đôi lúc cứ mải mê hơn thua, bận lòng vì những chuyện chẳng đâu vào đâu, để rồi quên mất mình cũng đang có một cuộc đời đáng để sống.',
              'Carpe diem! Thôi thì cứ sống, cứ yêu, cứ trải nghiệm, sai thì sửa, buồn thì cứ buồn một chút. Chẳng cần chuyện gì cũng phải có một lời giải thích, cũng chẳng cần ai cũng phải hiểu mình. Miễn là sau này nhìn lại, thấy những năm tháng ấy mình đã thực sự sống, chứ không chỉ mải miết đi tìm sự hài lòng trong mắt thiên hạ. Vậy thôi!',
            ],
          },
        ],
      },
      en: {
        title: 'Growing up',
        date: '16 November 2026',
        readTime: '6 min read',
        categoryLabel: 'Reflection & Maturity',
        excerpt:
          'The hardest part of growing up is not learning how much more pressure you can absorb—it is accepting a very ordinary truth: the world does not orbit your feelings.',
        epigraph: {
          quote:
            '“If you base your identity on having friends, being accepted, and being popular, you may find yourself compromising your standards or changing them every weekend to accommodate your friends.”',
          attribution: 'Sean Covey, The 7 Habits of Highly Effective Teens',
        },
        pullQuote:
          'What lasts the longest is probably how we lived, the choices we made, and whether we can look back on them in quiet peace.',
        sections: [
          {
            paragraphs: [
              'Age, bank balance, earning power, personal brand—or simply status—are usually treated as the yardsticks of adulthood. Yet the other day, while reading a thread on “how to tell when someone has truly grown up” (I have been spending a bit too much time on Threads lately instead of Facebook), one comment stopped me in my tracks: “When children don’t get their way, they cry and sulk to pull attention back around their wishes. Adults no longer roll on the floor throwing tantrums, yet sometimes we react from the exact same mindset—the crying is just replaced by resentment, heavy silence, or expecting others to read our unspoken hurt.”',
              'Thinking about it felt both amusing and quietly stinging. I used to care far too much about what people thought of me; a casual remark could occupy my mind all afternoon, and an awkward conversation could sink my entire day. Even while doing something else, my thoughts would circle back to a sentence spoken hours earlier, wondering what they really meant or what I had done wrong. Strangely, the other person had probably forgotten it long ago, leaving only me sitting there over-interpreting, hurting myself, and then trying to talk myself back down.',
              'There was also a stretch when knowing lots of people, being well-liked, and showing up to every gathering felt like something to be proud of. I wanted to keep every relationship smooth, leave a good impression everywhere, and sometimes held back what I genuinely thought just to avoid friction. Yet some evenings I came home from a hangout feeling inexplicably drained. Only later did I realize why: I had spent too much energy performing an agreeable version of myself—so afraid of speaking out of turn, disappointing someone, or being misunderstood that I forgot I am allowed to disagree, allowed to say no, and allowed not to feel cheerful all the time.',
              'Looking at the other side, though, I cannot blame others for expectations I invented myself. Sometimes we treat someone kindly and secretly expect the exact same return. We want to be understood without clearly saying what is on our mind. We want people to respect our choices, yet feel irritated the moment they choose a different path. Perhaps what disappoints us is not always how people treat us, but the fact that they refused to follow a script we quietly wrote in our own head.',
              'To me, the hardest part of growing up is not learning how much more pressure you can endure, but accepting an ordinary truth: the world does not revolve around our personal emotions. Someone can dislike us without a grand reason. A friendship can drift apart even after years of closeness. Even the most sincere explanation may never change someone else’s view. And some efforts, no matter how wholeheartedly we try, still lead nowhere. I used to demand an explanation, a neat answer, or someone to blame. Nowadays, after turning something over for a while, I simply ask: alright, if this is how things are, what do I still want to do with it?',
              'That doesn’t mean I always think clearly. I still lose patience, still let sharp sentences slip and regret them afterward, still catch myself trying to prove I am right even when I already suspect I might be wrong. The human ego is a strange thing—fighting to win over matters that barely weigh anything at all. Once the heat settles, what is a won argument worth if both people walk away unhappy?',
              'The older I get, the more I want to meet different people, hear more stories, and visit places I have never seen—not to collect contacts or prove I live an exciting life, but because every real conversation reminds me how small my own assumptions still are. Some people live completely differently from me and are genuinely happy; some need none of the things I once treated as essential; others are quietly carrying burdens invisible from the outside. And sometimes people who seem worlds apart in age, background, or position feel remarkably familiar once you listen to their story. Little by little, you feel less eager to judge, less eager to declare anything absolute, and less shaken when life refuses to bend to your preference.',
              'Honestly, I don’t know when anyone can claim to be truly mature. A few years from now I might reread these very paragraphs and smile at how naive I still sounded—philosophizing about habits I hadn’t fully mastered yet. That’s alright. Nobody grows up overnight, and there is no diploma certifying that starting today you will never repeat an old mistake.',
              'I only hope that with time I grow a little less stubborn, care less about trivial noise, apologize cleanly when I am wrong, and accept what cannot be forced. Still living sincerely, still treasuring the people beside me, without needing constant external applause to trust that I am living well.',
              'In the end, how much time do we really have to spend living inside other people’s commentary? People who feel inseparable today may be only familiar names a few years from now. Things that once kept us awake at night become impossible to recall clearly later. What lasts the longest is probably how we lived, the choices we made, and whether we can look back on them in quiet peace. Life is genuinely short—far too short to spend fighting petty battles and forgetting we have a real life worth living right now.',
              'Carpe diem! Live, love, try things; if you get it wrong, fix it; if you feel sad, let yourself feel sad for a while. Not everything needs a tidy explanation, and not everyone has to understand you. As long as you can look back one day and know those years were truly lived—not spent chasing approval in other people’s eyes. That’s enough.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'from-grade-7-linux-to-health-ai-governance',
    category: 'journey',
    content: {
      vi: {
        title:
          'Prompt engineering không phải systems engineering: từ bản Linux lớp 7 đến quản trị dữ liệu AI y tế',
        date: '14 tháng 11, 2026',
        readTime: '12 phút đọc',
        categoryLabel: 'Systems & Craft',
        excerpt:
          'Phần lớn các bản demo AI hiện đại đều xem việc lưu trữ dữ liệu lâu dài (persistence) là chuyện tính sau. Năm năm kể từ bài báo VnExpress viết về những dự án Linux đầu đời của tôi ở Huế, đây là lý do vì sao việc sửa lỗi bootloader, dịch đặc tả C++ và vận hành sandbox chấm bài thi lại dạy tôi nhiều điều về an toàn AI hơn mọi kỹ thuật tinh chỉnh prompt cộng lại.',
        epigraph: {
          quote: 'Memento vivere',
          translation: 'Hãy nhớ mà sống.',
        },
        pullQuote:
          'Gần như mọi sự cố mà người ta gọi là “tính khó lường của AI” trong môi trường thực tế, khi bóc tách đến tận cùng, đều chỉ là những lỗi hệ thống cũ kỹ và nhàm chán—thiếu bất biến, chuyển trạng thái không kiểm soát, hay xung đột đồng thời âm thầm—chỉ là được khoác lên một lớp văn phong tiếng Anh trôi chảy mà thôi.',
        sections: [
          {
            heading: 'Cái bẫy êm ái của sự nổi tiếng quá sớm',
            paragraphs: [
              'Thi thoảng trong các buổi trò chuyện hay phỏng vấn, mọi người vẫn nhắc lại bài báo trên VnExpress năm 2021 như một khúc mở đầu tròn trịa cho câu chuyện “cậu bé làm công nghệ”. Nhưng trong ký ức của tôi, cột mốc đó lại mang một bài học hoàn toàn khác. Hồi đó tôi mười hai tuổi, học lớp 7 tại trường THCS Nguyễn Tri Phương ở Huế—ngày ngày mày mò build các bản phân phối Linux từ nhân Arch trong nhóm Kode Studio (HydroOS và VNux), học lập trình bài bản qua FUNiX, và liên tục đặt đủ thứ câu hỏi sốt ruột trên các diễn đàn dev Việt Nam. Ở tuổi mười hai, việc được báo chí trung ương nhắc tên dễ tạo cảm giác như mình đã “chạm đích”. Thực chất, đó là khoảnh khắc nguy hiểm nhất để một đứa trẻ nhầm lẫn giữa sự chú ý sớm với chiều sâu kỹ thuật thật sự.',
              'Nhìn lại, điều may mắn nhất của tôi không phải là bài báo đó, mà là sự lạnh lùng tuyệt đối của lập trình hệ thống.',
              'Cây phụ thuộc gói (package dependency graph) trên Linux chẳng quan tâm chủ nhân của nó tuần trước vừa lên báo nào. Chỉ cần một dòng script đóng gói làm hỏng initramfs hoặc lệch phiên bản thư viện trong /usr/lib, máy tính sẽ treo cứng ở màn hình đen. Không một lời khen nào có thể thuyết phục một cái bootloader hỏng chịu khởi động. Hai năm duy trì HydroOS và VNux (2019–2021) đã sớm ép tôi vào một sự trung thực khắc nghiệt: hoặc bất biến hệ thống của bạn đứng vững khi chạy thật, hoặc tư duy của bạn đang sai—không có vùng xám.',
              'Nếu ai hỏi thói quen nào từ năm lớp 7 vẫn còn theo tôi đến tận hôm nay, đó không phải là một ngôn ngữ lập trình cụ thể nào cả. Đó là thói quen đọc kỹ log lỗi trước khi sửa code, và kiểm tra từng dòng diff một trước khi tin rằng bản vá của mình thật sự giải quyết được vấn đề.',
            ],
          },
          {
            heading: 'Chậm lại để đọc “hợp đồng”: đặc tả C++ và những chiều thứ Sáu viết Java',
            paragraphs: [
              'Giai đoạn 2021–2022 có hai trải nghiệm kéo tôi ra khỏi tư duy “vọc vạch” để bước sang tư duy theo hợp đồng kỹ thuật (contracts).',
              'Trải nghiệm đầu tiên là tham gia dịch thuật và biên tập kỹ thuật cho CPPReference Tiếng Việt. Phần lớn học sinh cấp hai, cấp ba tiếp cận C++ bằng tốc độ—nhớ nhanh các đoạn mẫu để giải bài thi thuật toán. Dịch đặc tả thư viện chuẩn lại buộc tôi đi với tốc độ ngược lại: dừng hàng giờ chỉ để hiểu trọn vẹn một đoạn văn về quy tắc vô hiệu hóa iterator, ranh giới hành vi không xác định (undefined behavior), hay sự khác biệt giữa đảm bảo an toàn ngoại lệ mức mạnh và mức cơ bản. Bạn không thể chuyển ngữ chính xác một cam kết kỹ thuật sang tiếng Việt nếu bạn chỉ hiểu lơ mơ điều nó hứa—và quan trọng hơn, điều nó cố tình từ chối hứa.',
              'Trải nghiệm thứ hai là kỳ thực tập Java Software Engineer tại 3S Intersoft ở Huế năm 2022. Trước đó, lập trình trong mắt tôi vẫn giống một môn thể thao cá nhân. Bước vào môi trường doanh nghiệp, viết các module Spring, Servlet và Thymeleaf theo quy trình Git Flow và chịu sự soi xét qua từng phiên peer code review đã đập tan hoàn toàn huyễn tưởng về “thần đồng code một mình”. Trong một đội ngũ thực thụ, code thông minh quá mức đôi khi lại là gánh nặng. Code tốt là thứ code mà một kỹ sư khác đang mệt nhoài vào chiều thứ Sáu mở ra vẫn có thể đọc hiểu, kiểm toán trong năm phút mà không phải đoán già đoán non xem có tác dụng phụ nào đang giấu sâu ba tầng bên dưới hay không.',
              'Đặt lên CV, dịch tài liệu C++ và viết Java doanh nghiệp có vẻ chẳng liên quan gì tới nghiên cứu AI. Nhưng trong tư duy của tôi, chúng nằm trên cùng một trục. Cả hai gieo vào tôi một sự hoài nghi lành mạnh: bất cứ khi nào một công cụ tạo ra kết quả “nghe có vẻ hợp lý” nhưng lại không đi kèm một hợp đồng rõ ràng cho việc thay đổi trạng thái dữ liệu, rủi ro không hề biến mất—nó chỉ đang bị trì hoãn.',
            ],
          },
          {
            heading: '93.447 lượt nộp bài không đáng tin và bài học về thế giới thực',
            paragraphs: [
              'Nếu giai đoạn 2021–2022 dạy tôi đọc hợp đồng, thì từ năm 2023 đến nay lại dạy tôi cách bảo vệ nó giữa “chiến trường” thật.',
              'Cùng điều hành Câu lạc bộ Lập trình SQRT và vận hành hệ thống chấm bài trực tuyến SQRTOJ—nơi hiện đã mở rộng lên 4.167 người dùng đăng ký, 413 bài tập và 93.447 lượt nộp bài—đã biến khoa học máy tính từ lý thuyết thành một phòng thí nghiệm của các đầu vào đối nghịch (adversarial inputs). Khi hàng trăm bạn thi lập trình đồng loạt đẩy file biên dịch C++ và Python vào sandbox Linux của bạn, mọi kịch bản biên (edge case) đều xuất hiện đúng hẹn: fork bomb, tràn bộ nhớ ngầm, lời gọi hệ thống bất thường, dữ liệu nhập xuất dị dạng. Đôi khi là cố tình, phần lớn là vô tình, nhưng hậu quả với một máy chủ ngây thơ thì như nhau cả.',
              'Việc kiêm nhiệm vai trò Trưởng ban Công nghệ và Tài chính còn bổ sung một ràng buộc mà các bài báo học thuật ít khi nhắc đến: độ tin cậy nào cũng có hóa đơn đi kèm. Từng lớp container, từng hàng đợi xử lý, từng giờ thuê máy chủ cho SQRTOJ—và sau này là hạ tầng thi trực tuyến của Khởi Nguồn Tri Thức IX—đều phải cân đo trên một ngân sách eo hẹp. Từ đó, tôi rất cảnh giác với những kiến trúc vẽ trên bảng trắng thì đẹp mê hồn, nhưng hễ gặp lưu lượng thật trên cấu hình phần cứng hạn chế là sụp đổ.',
            ],
          },
          {
            heading: 'Khi làn sóng AI lặp lại đúng những sai lầm kinh điển của hệ điều hành',
            paragraphs: [
              'Rồi giai đoạn 2024–2026 ập đến. Các mô hình ngôn ngữ lớn bước ra khỏi khung chat để trở thành các agent tự động—tự đọc hồ sơ, tự gọi công cụ, tự ghi ngược vào cơ sở dữ liệu. Xem hết bản demo này tới bản demo khác gây sốt, tôi cứ có một cảm giác quen thuộc đến kỳ lạ.',
              'Người ta đang nối thẳng một bộ sinh văn bản mang tính xác suất vào các kho dữ liệu bền vững—hồ sơ bệnh án, kết quả học tập, dữ liệu khách hàng—mà ở giữa chẳng có chốt chặn nào ngoài một đoạn system prompt viết bằng giọng điệu nghiêm khắc.',
              'Với bất kỳ ai từng vận hành một sandbox Linux, điều đó thật phi lý. Prompt chỉ mang tính khuyến nghị; hợp đồng (contract) mới có tính cưỡng chế. Dặn dò một mô hình LLM rằng “làm ơn đừng ghi đè lên dữ liệu lâm sàng mới hơn và hãy tôn trọng quyền đồng thuận của bệnh nhân” về mặt cấu trúc chẳng khác gì năn nỉ một file nhị phân không đáng tin trên hệ thống chấm bài rằng “làm ơn đừng dùng quá 256 megabyte RAM và đừng tự tạo tiến trình con.” Không ai vận hành máy chủ thi lập trình dựa trên phép lịch sự cả. Vậy tại sao chúng ta lại định quản trị hồ sơ sức khỏe theo thời gian bằng cách đó?',
              'Chính sự cấn cá đó đã khai sinh ra Project CLARA và hợp đồng quản trị GLHS—công trình trưởng thành thành bài báo ngắn tác giả độc lập số #97 được chấp nhận tại hội nghị quốc tế HEALTHINF 2027, Poster P4 tại FMC 2026, song hành cùng hướng nghiên cứu sinh viên tại InSecLab (UIT – ĐHQG-HCM). Luận điểm cốt lõi của tôi rất rõ ràng: mô hình xác suất thuộc về vòng lặp suy luận; kiểm định tất định (deterministic verification) thuộc về ranh giới thay đổi trạng thái. Trộn lẫn hai lớp đó lại, bạn sẽ có một sản phẩm demo thì tỏa sáng, nhưng ra thực tế sẽ sai hỏng trong im lặng.',
            ],
          },
          {
            heading: 'Memento vivere: vì sao Huế giữ cho kỹ thuật của tôi luôn chạm đất',
            paragraphs: [
              'Có một cái bẫy rất tinh vi sau khi bạn có bài báo quốc tế hay đạt giải thưởng tin học cấp thành phố: bạn dễ rơi vào cảm giác mình thuộc về thế giới của những mô hình trừu tượng, tách rời khỏi đời sống thật. Bạn bắt đầu sống trong sơ đồ kiến trúc và bảng điểm benchmark thay vì thế giới của những con người đang dùng phần mềm mình viết.',
              'Đó là lý do tôi đặt câu Memento vivere ở đầu bài viết này. Nhớ mà sống—giữ đôi chân mình bám chặt vào mảnh đất Huế và những nhu cầu rất đỗi bình dị xung quanh—là chốt chặn kỹ thuật tốt nhất mà tôi có.',
              'Khi bạn dành mùa hè để dạy tiếng Anh và kỹ năng sống cho các em nhỏ vùng quê ở chùa Bảo Vân, tịnh thất An Lạc hay chùa Mỹ Khánh, chẳng ai quan tâm biểu đồ commit GitHub của bạn xanh cỡ nào; điều duy nhất có nghĩa là bài học hôm đó các em có hiểu và dùng được hay không. Khi bạn phân tích khảo sát từ 1.502 học sinh thuộc sáu trường học ở Huế cho dự án LƯU NIÊN, bạn thôi làm những mô hình 3D nặng nề để khoe công nghệ mà quay sang đảm bảo phương án dự phòng 2D cho mạng Wi-Fi trường học chập chờn. Khi bạn thực tập hai tháng ở một khách sạn boutique 4 sao tại Huế, nhìn nhân viên lễ tân vừa tiếp khách trước mặt vừa xoay xở năm kênh tin nhắn, bạn bỏ ngay ý định làm chatbot tự động để thiết kế một màn hình duyệt nháp thật gọn, giúp họ tiết kiệm vài chục giây mà không cướp mất sự ấm áp của người đón tiếp. Và khi nghĩ về bác sĩ hay bệnh nhân dùng phần mềm theo dõi sức khỏe dài hạn, điều duy nhất đáng bận tâm là liệu một suy luận lỗi thời từ hôm qua có âm thầm làm hỏng hồ sơ hôm nay hay không.',
              'Năm năm sau bài báo trên VnExpress, công cụ đã thay đổi hoàn toàn. Chỉ có tiêu chuẩn làm nghề là chưa từng xê dịch.',
            ],
          },
        ],
        externalReference: {
          label: 'Đọc bài báo gốc trên VnExpress (2021)',
          url: VNEXPRESS_URL,
        },
      },
      en: {
        title:
          'Prompt engineering is not systems engineering: from Grade-7 Linux to health-AI governance',
        date: '14 November 2026',
        readTime: '12 min read',
        categoryLabel: 'Systems & Craft',
        excerpt:
          'Most modern AI demos treat persistence as an afterthought. Five years after VnExpress profiled my early Linux work in Hue, here is why debugging broken bootloaders, C++ specs, and untrusted judge sandboxes taught me more about AI safety than prompt tuning ever did.',
        epigraph: {
          quote: 'Memento vivere',
          translation: 'Remember to live.',
        },
        pullQuote:
          'Almost every failure mode people call “AI unpredictability” in production turns out to be a boring, old-fashioned systems bug—missing invariants, unchecked state transitions, or silent race conditions—just dressed up in fluent English.',
        sections: [
          {
            heading: 'The quiet danger of peaking in Grade 7',
            paragraphs: [
              'People sometimes bring up that 2021 VnExpress article as if it were the neat origin story of a “tech prodigy.” I remember it very differently. I was twelve, in Grade 7 at Nguyen Tri Phuong Secondary School in Hue, tinkering with custom Arch Linux builds inside Kode Studio (HydroOS and VNux), taking structured programming courses at FUNiX, and asking way too many impatient questions on Vietnamese developer forums. When a national newspaper writes about you at that age, your phone lights up, adults start using words like talent, and a dangerous illusion creeps in: you start mistaking early visibility for actual engineering depth.',
              'Looking back, the luckiest thing that happened to me wasn’t the article—it was how brutally indifferent Linux is to press coverage.',
              'A package dependency graph does not care that you were in the news last Tuesday. If a build script breaks an initramfs hook or leaves a mismatched library in /usr/lib, the kernel panics and the screen goes black. No amount of enthusiasm talks a broken bootloader into booting. Maintaining HydroOS and VNux from 2019 to 2021 stripped away any urge to perform competence. Either your mental model matched what the machine actually executed, or you sat there staring at a blinking cursor until you figured out why it didn’t.',
              'If someone asks me in an interview what habit from age twelve still governs my work today, it isn’t a programming language. It is refusing to guess before reading the log, and auditing a diff line by line before trusting that a fix actually fixed anything.',
            ],
          },
          {
            heading: 'Slowing down to the contract: C++ specs and Friday-afternoon Spring code',
            paragraphs: [
              'Between 2021 and 2022, two experiences forced me to grow out of “tinkering” and into thinking in contracts.',
              'The first was contributing technical translations and editorial reviews to CPPReference Vietnamese. Most teenagers learn C++ by racing through competitive programming templates; translating the standard library specification forces the opposite speed. Suddenly you are stuck on a single paragraph about iterator invalidation rules, undefined behavior boundaries, or strong versus basic exception-safety guarantees. You quickly learn a humbling truth: you cannot translate a technical guarantee into clear Vietnamese if you only half-understand what it promises—and, just as importantly, what it deliberately refuses to promise.',
              'The second was interning as a Java software engineer at 3S Intersoft in Hue in 2022. Up to that point, coding had felt like a solo sport. Working on real Spring, Servlet, and Thymeleaf modules inside Git Flow and peer code reviews cured me of the “lone teenage coder” myth within a month. In a real team, clever code is a liability. Good code is code another exhausted engineer can open on a Friday afternoon, trace in five minutes, and audit without having to guess what hidden side effect lurks three layers down.',
              'On a CV, translating C++ documentation and writing enterprise Java look worlds apart from modern AI research. In my head, they are the exact same thread. Both taught me an instinct that never left: whenever a system produces plausible output without an explicit contract governing how state changes, you haven’t solved the problem—you’ve just delayed the outage.',
            ],
          },
          {
            heading: 'What 93,447 untrusted submissions teach you about human—and machine—adversaries',
            paragraphs: [
              'If 2021–2022 taught me to read contracts, the years since 2023 have taught me to defend them under fire.',
              'Co-leading SQRT Programming Club and running SQRTOJ—our DMOJ-based online judge that has grown to 4,167 registered users, 413 problems, and 93,447 judged submissions—turned computer science from a textbook subject into an adversarial sport. When hundreds of students submit C++ and Python binaries to your Linux sandbox during a live contest, theoretical edge cases show up on schedule. You deal with fork bombs, silent memory leaks, rogue syscalls, malformed I/O streams, and timing anomalies—sometimes malicious, usually accidental, always lethal to a naive server.',
              'Running infrastructure while also serving as Head of Technology and Finance added a constraint that research papers rarely talk about: reliability has a price tag. Every container layer, queue worker, and server hour—for SQRTOJ and later for the live contest infrastructure of Khoi Nguon Tri Thuc IX—came out of a real, tight budget. You learn very quickly to distrust architectures that look brilliant on a whiteboard but blow up the moment real traffic hits a modest hardware ceiling.',
            ],
          },
          {
            heading: 'Watching the AI wave repeat fifty years of operating-systems mistakes',
            paragraphs: [
              'Then came 2024 to 2026. Large language models stepped out of chat boxes and into autonomous agents—reading records, calling tools, writing back to databases. And as I watched demo after demo go viral, I kept getting this strange sense of déjà vu.',
              'People were wiring probabilistic text generators directly into persistent records—patient histories, student diagnostics, business CRMs—and putting nothing between the model and the database except a sternly worded system prompt.',
              'To anyone who has ever maintained a Linux sandbox, that feels surreal. Prompts are advisory; contracts are enforceable. Telling an LLM “please do not overwrite newer clinical facts and please respect patient consent” is structurally identical to telling an untrusted C++ binary on an online judge “please do not allocate more than 256 megabytes and please don’t spawn child processes.” Nobody would ever run a competitive programming judge on politeness. Why on earth were we trying to govern longitudinal health records that way?',
              'That discomfort became the seed of Project CLARA and the GLHS governance contract—work that evolved into my sole-authored Short Paper #97 accepted at HEALTHINF 2027 and Poster P4 at FMC 2026, alongside ongoing student research at InSecLab (UIT – VNU-HCM). The thesis is almost stubbornly simple: probabilistic models belong inside the reasoning loop; deterministic verification belongs at the state-mutation boundary. The moment you blur those two layers, you get systems that dazzle in a three-minute pitch and fail silently in production.',
            ],
          },
          {
            heading: 'Memento vivere: why Hue keeps my engineering honest',
            paragraphs: [
              'There is a subtle ego trap that opens up once you get a paper accepted to an international conference or win city-level informatics prizes: you start mistaking abstraction for impact. You start living inside diagrams, benchmarks, and social feeds instead of the world those systems are supposed to serve.',
              'That is why Memento vivere sits at the top of this essay. Remembering to actually live—to stay rooted in Hue and in the unglamorous realities of the people around me—has been the best engineering safeguard I own.',
              'When you spend your summers teaching English and life skills to rural middle-schoolers at Bao Van Pagoda, An Lac Hermitage, and My Khanh Pagoda, nobody cares about your GitHub graph; they care whether a lesson actually makes sense. When you survey 1,502 students across six schools in Hue for LƯU NIÊN, you stop building heavy 3D trophies and start building 2D fallbacks for unstable classroom Wi-Fi. When you spend two months inside a 4-star boutique hotel in Hue watching front-desk staff juggle live guests and five messaging apps, you stop pitching autonomous chatbots and build a calm review screen that saves them thirty seconds without stealing their voice. And when you think about a patient or clinician relying on longitudinal health software, you care whether yesterday’s stale inference can quietly corrupt today’s chart.',
              'Five years after that VnExpress article, the tools have changed beyond recognition. The standard hasn’t moved an inch.',
            ],
          },
        ],
        externalReference: {
          label: 'Read the original VnExpress feature (Vietnamese)',
          url: VNEXPRESS_URL,
        },
      },
    },
  },
  {
    slug: 'snapshot-bound-commit-admission-health-ai',
    category: 'research',
    content: {
      vi: {
        title:
          'Vì sao prompt guardrails thất bại với AI y tế theo thời gian—và vì sao an toàn phải nằm ở ranh giới commit',
        date: '28 tháng 10, 2026',
        readTime: '14 phút đọc',
        categoryLabel: 'AI & Nghiên cứu',
        excerpt:
          'Đánh giá một trợ lý AI y tế chỉ qua các bài hỏi-đáp đơn lượt chẳng khác nào kiểm thử cơ sở dữ liệu bằng một câu lệnh SELECT duy nhất mà chưa bao giờ thử ghi đồng thời. Phân tích kỹ thuật thẳng thắn về Snapshot-Bound Commit Admission (GLHS)—bài báo ngắn #97 tại HEALTHINF 2027.',
        pullQuote:
          'An toàn trong AI theo dòng thời gian không được quyết định vào lúc mô hình viết ra một đoạn văn lâm sàng trôi chảy—nó được quyết định vào đúng mili-giây một suy luận xin phép trở thành dữ liệu bền vững.',
        sections: [
          {
            heading: 'Ảo giác đơn lượt trong cách người ta đang chấm điểm AI y tế',
            paragraphs: [
              'Mỗi khi tôi chia sẻ về nghiên cứu AI y tế theo thời gian (longitudinal health AI), câu hỏi đầu tiên tôi hay nhận được thường có dạng: “Khoan đã—các mô hình ngôn ngữ lớn bây giờ chẳng phải đã đạt trên 90% ở các kỳ thi chứng chỉ y khoa rồi sao? Bài toán độ chính xác coi như gần xong rồi chứ?”',
              'Câu trả lời của tôi luôn giống nhau: đề thi y khoa chỉ kiểm tra xem mô hình có biết thuộc lòng kiến thức y học hay không khi mọi dữ kiện liên quan đã được đóng băng, xác thực và bày sẵn trong một khung prompt duy nhất. Chăm sóc sức khỏe thực tế theo dòng thời gian chẳng giống một đề thi trắc nghiệm chút nào.',
              'Trong y tế thực tế, sự thật vận động bất đồng bộ qua nhiều tuần, nhiều tháng. Một sự kiện lâm sàng có thể thực sự xảy ra ở một thời điểm—giới nghiên cứu cơ sở dữ liệu y học gọi là thời gian hiệu lực (t_v)—nhưng hệ thống chỉ biết đến nó vài ngày sau đó tại thời gian tri thức (t_k). Hai nguồn dữ liệu có thể mâu thuẫn nhau trong lúc quá trình chẩn đoán còn đang tiếp diễn. Và một thông tin nhạy cảm vốn hợp lệ với chủ thể, vai trò, tác vụ này lại có thể hoàn toàn bị cấm với tác vụ khác.',
              'Nguy hiểm hơn, rủi ro không dừng lại khi hệ thống truy xuất (retrieval) xong dữ liệu. Giả sử lúc 9 giờ sáng, hệ thống truy xuất chính xác góc nhìn được phép cấp quyền và đưa cho trợ lý AI. Mô hình suy luận rồi trả về một đề xuất chỉnh sửa đơn thuốc hay kế hoạch điều trị vài phút hoặc vài giờ sau đó. Chính trong khoảng lặng giữa lúc đọc và lúc ghi ấy, một bác sĩ khác có thể đã cập nhật đơn thuốc, một kết quả xét nghiệm muộn có thể vừa đổ về, bệnh nhân có thể đã rút lại quyền đồng thuận, hoặc phiên bản chính sách đã thay đổi.',
              'Nếu hệ thống nhắm mắt ghi đè đề xuất đó vào cơ sở dữ liệu, bạn không còn đối mặt với “ảo giác y khoa” nữa. Bạn đang đối mặt với một phép chuyển trạng thái lỗi thời và trái phép, chỉ là được ngụy trang bằng văn phong lâm sàng trôi chảy.',
            ],
          },
          {
            heading: 'Kẽ hở giữa truy xuất dữ liệu và lưu trữ bền vững',
            paragraphs: [
              'Một điều tôi luôn muốn nói thật rành mạch—nhất là khi các phản biện tại HEALTHINF 2027 đã đặt ra những câu hỏi rất xác đáng về tính mới và vị thế nghiên cứu—là GLHS khẳng định điều gì và không nhận công điều gì.',
              'Tin học y tế từ lâu đã có những viên gạch nền tảng rất vững: chuẩn HL7 FHIR định nghĩa Provenance, Consent và các thao tác HTTP có kiểm soát phiên bản; openEHR lưu giữ lịch sử đóng góp lâm sàng theo phiên bản; W3C PROV mô hình hóa nguồn gốc dữ liệu; và nhiều công trình bộ nhớ agent gần đây đã nghiên cứu phân xử hai chiều thời gian (bitemporal) lẫn cập nhật kiểu giao dịch.',
              'GLHS không gắn nhãn lại những cơ chế đó để nhận làm phát minh mới. Thay vào đó, nó rọi đèn vào đúng kẽ hở nguy hiểm giữa hai thao tác vốn hay bị tách rời khi thiết kế:',
            ],
            list: {
              items: [
                {
                  lead: 'Kiểm tra phiên bản đơn thuần bị “mù” trước ngữ cảnh cấp quyền.',
                  text: 'Khớp một số phiên bản nền (base version) giúp chặn ghi đè lỗi thời, nhưng không hề chứng minh được chính xác bản công bố dữ liệu nào đã cung cấp bằng chứng và ngữ cảnh chính sách cho đề xuất của mô hình.',
                },
                {
                  lead: 'Chính sách lọc dữ liệu đơn thuần biến mất sau khi suy luận.',
                  text: 'Một lớp truy xuất tôn trọng quyền riêng tư có thể tối thiểu hóa dữ liệu mô hình được thấy lúc đọc, nhưng lại bốc hơi hoàn toàn vào thời điểm mô hình gửi kết quả về để ghi xuống hệ thống.',
                },
              ],
            },
            afterListParagraphs: [
              'Khi thiếu một hợp đồng nối liền hai đầu, khoảng trễ đọc–ghi trở thành điểm mù quản trị. Đề xuất có thể chạm xuống trạng thái cũ, vượt quá thời hạn đồng thuận đã bị thu hồi, hoặc dựa vào bằng chứng ngoài phạm vi được phép tiếp cận.',
            ],
          },
          {
            heading: 'Hình thức hóa hợp đồng đọc–ghi: THSS → GST',
            paragraphs: [
              'Lựa chọn kiến trúc cốt lõi của GLHS (được trình bày trong bài báo Snapshot-Bound Commit Admission for Longitudinal Health AI, Bài báo ngắn #97 tại HEALTHINF 2027) nằm ở một sự từ chối dứt khoát: không bao giờ nhờ mô hình ngôn ngữ tự chấm điểm độ an toàn của chính nó, và không bao giờ trao cho nó quyền ghi thẳng vào cơ sở dữ liệu. Toàn bộ khâu kiểm duyệt quản trị đều chạy trên đường dẫn tất định, không dùng LLM.',
              'Ở đường đọc (read path), một cổng kiểm soát nhận thức chính sách sẽ tái dựng trạng thái sức khỏe theo hai mốc thời gian rõ ràng là t_v và t_k—giữ thời điểm ghi cơ sở dữ liệu thuần túy làm tọa độ kiểm toán chứ không đánh đồng với thời gian tri thức. Trước khi mô hình được chạy, cổng này biên dịch và lưu vết một Ảnh chụp Trạng thái Sức khỏe Giới hạn theo Tác vụ (THSS):',
            ],
            formula: {
              label: 'Định nghĩa THSS',
              expression: 'H = (u, α, r, φ, τ, v_s, v_π, v_c, t_v, t_k, id_H, d_H, E_H)',
            },
            afterListParagraphs: [
              'Trong đó u là hồ sơ đối tượng; α, r là tác nhân và vai trò; φ, τ là mục đích và tác vụ; v_s, v_π, v_c chốt tọa độ phiên bản trạng thái, chính sách và đồng thuận; id_H là định danh snapshot đã lưu; E_H là tập bằng chứng được công bố; còn d_H là mã băm SHA-256 tính trên một hồ sơ chuẩn hóa JSON định nghĩa riêng cho dự án (sắp xếp khóa, giữ thứ tự mảng, UTF-8 gọn, chuẩn hóa múi giờ UTC, xử lý số âm không, và thất bại theo hướng đóng fail-closed khi có sai lệch—được ghi rõ là hồ sơ riêng chứ không tự nhận là chuẩn RFC 8785).',
              'Ở đường ghi (write path), văn bản tự do của mô hình chỉ được coi là lời giải thích, tuyệt đối không phải lệnh thay đổi dữ liệu. Muốn cập nhật trạng thái, mô hình phải trả về một đề xuất có cấu trúc P trỏ rõ về H, tập phụ thuộc bằng chứng, phần thay đổi Δ và nguồn gốc ρ. Cổng Chuyển đổi Trạng thái Có Quản trị (GST) sau đó áp đặt bất biến phê duyệt commit:',
            ],
            note: {
              label: 'Bất biến phê duyệt commit (GST)',
              content:
                'Commit(P) ⇔ Bound(P, H) ∧ StateCurrent(P) ∧ GovernanceCurrent(P) ∧ SnapshotValid(P). Thay vì gom mọi lỗi vào một thông báo xung đột chung chung, GST trả ra từ vựng từ chối phân kiểu rõ ràng: lệch id_H/d_H báo hiệu tráo đổi snapshot; lệch v_s báo trạng thái cũ; lệch v_c/v_π báo trôi dạt quản trị; hết hạn snapshot từ chối đề xuất quá cửa sổ cấp quyền; lệch tập phụ thuộc bắt gọn bằng chứng ngoài phạm vi công bố.',
            },
          },
          {
            heading: 'Tách bạch ba lớp bằng chứng—và kiên quyết không thổi phồng kết quả',
            paragraphs: [
              'Nếu phải chọn một nguyên tắc khiến tôi tự hào nhất trong bài báo này, đó là việc từ chối gộp độ tuân thủ phần mềm, độ tranh chấp cơ sở dữ liệu và năng lực suy luận của LLM vào chung một con số hào nhoáng. Chúng tôi tách phần thực nghiệm thành ba lớp bằng chứng độc lập:',
            ],
            list: {
              ordered: true,
              items: [
                {
                  lead: 'Tuân thủ hợp đồng tất định (112 ca kiểm thử):',
                  text: 'Chạy 16 kịch bản tự thiết kế qua 7 biến thể hợp đồng tăng dần độ chặt. Toàn bộ 112 ca đều cho đúng kết quả kỳ vọng và chỉ đích danh điều khoản từ chối đầu tiên—bắt trọn các sai lệch về hồ sơ, tác nhân, vai trò, mục đích, tác vụ, phiên bản nền, định danh snapshot và mã băm. Trong phép phát lại lịch sử (historical replay), một xung đột ở thời điểm cũ vẫn hiện nguyên vẹn ngay cả sau khi nó đã được giải quyết về sau, vì trạng thái được dựng lại từ lịch sử chuyển đổi chứ không lấy từ bản chiếu hiện tại đã bị ghi đè.',
                },
                {
                  lead: 'Tranh chấp ghi đồng thời trên PostgreSQL 16.14 & chi phí vận hành (50 kịch bản, 310 lượt ghi):',
                  text: 'Với bộ đếm phiên bản cấp toàn hồ sơ chạy qua W ∈ {1, 2, 4, 8, 16} tiến trình ghi đồng thời (5 kịch bản mỗi mức), toàn bộ lượt ghi lỗi thời đều bị chặn an toàn với đúng một bên thắng nguyên tử và không phát sinh lỗi cơ sở dữ liệu. Quan trọng không kém, thí nghiệm phơi bày rõ cái giá kỹ thuật của sự đơn giản: với các lượt ghi chạm vào những trường không liên quan trên cùng một hồ sơ, tỷ lệ từ chối lỗi thời giả (false-stale) tăng đúng theo đường cong một-người-thắng—từ 0 ở 1 tiến trình, 0,50 ở 2, 0,75 ở 4, 0,875 ở 8, lên tới 0,9375 ở 16 tiến trình. Trên một worker cục bộ (không tính HTTP và suy luận LLM, lặp 30 lần), độ trễ p50/p95 đạt 61,81/68,89 ms cho biên dịch THSS, 30,97/54,69 ms cho GST, 7,30/12,30 ms cho tái dựng trạng thái và 2,12/5,50 ms cho tra cứu kiểm toán, đỉnh RSS khoảng 109 MiB.',
                },
                {
                  lead: 'Tập dữ liệu tổng hợp hai mô hình (64 ca, 1.152 lượt đánh giá):',
                  text: 'Để kiểm tra xem việc thu hẹp ngữ cảnh theo tác vụ có làm giảm khả năng suy luận hay không, chúng tôi chạy Claude và Gemini qua Strict THSS cùng năm điều kiện đối chứng (toàn bộ lịch sử được phép, ngữ cảnh dài theo thời gian, Naive RAG, LWW và BTSA) trên tiêu chí chính xác tuyệt đối cả bốn trục: vòng đời, bằng chứng, tính kịp thời và leo thang xử lý. Cả 1.152 lượt đánh giá hoàn tất không lỗi thực thi. Với Strict THSS, Gemini đạt chính xác 64/64 ca (100%) và Claude đạt 63/64 ca (98,44%)—và tôi cố ý giữ nguyên ca sai duy nhất của Claude (dự đoán một mục lịch sử đã hủy thành đã hoàn tất) mà không chỉnh sửa hậu kiểm. Trong các so sánh theo cặp hiệu chỉnh Holm (α = 0,05), Strict THSS vượt trội Naive RAG (21/0/43 thắng/thua/hòa trên Claude; 16/0/48 trên Gemini) và LWW (16/0/48 trên cả hai), nhưng Claude không vượt trội có ý nghĩa so với BTSA, còn Gemini hòa với BTSA, toàn bộ lịch sử và ngữ cảnh dài.',
                },
              ],
            },
          },
          {
            heading: 'Lắng nghe phản biện—và vì sao sự trung thực là chuẩn mực của người làm hệ thống',
            paragraphs: [
              'Được chấp nhận tại HEALTHINF 2027 với điểm đánh giá từ 4 đến 6 trên các tiêu chí về mức độ phù hợp, tính mới, tiềm năng R&D và trình bày là một động lực lớn. Nhưng thứ thực sự làm công trình này sắc nét hơn lại nằm ở những điểm các phản biện thẳng thắn chỉ ra. Họ hoàn toàn có lý khi nhấn mạnh những giới hạn mà bài báo chưa chứng minh được:',
            ],
            list: {
              items: [
                {
                  text: '64 ca tổng hợp với tỷ lệ hòa cao chỉ để lại 9–21 cặp bất đồng có thông tin ở các phép so sánh có ý nghĩa, thấp hơn mục tiêu thiết kế ban đầu là 51 cặp.',
                },
                {
                  text: 'Tính nguyên tử trước các luồng ghi quản trị đồng thời (thu hồi đồng thuận, mất quyền hay đổi chính sách ngay giữa phiên commit) vẫn chưa được kiểm thử tranh chấp đồng thời (race condition).',
                },
                {
                  text: 'Cổng hệ thống hiện vẫn giữ một đường tạo đề xuất chỉ dựa trên phiên bản nền, nên cơ chế chống hạ cấp nguồn gốc (downgrade prevention) chưa phủ kín mọi luồng phía sau.',
                },
                {
                  text: 'Quan trọng nhất: tuân thủ hợp đồng ở mức phần mềm trên dữ liệu tổng hợp không phải là xác thực lâm sàng hay chứng nhận tuân thủ pháp lý.',
                },
              ],
            },
            afterListParagraphs: [
              'Bất kỳ ai tuyên bố một nguyên mẫu AI y tế giai đoạn đầu đã “được chứng minh lâm sàng” đều đang làm tiếp thị, không phải làm khoa học. Vẫn có người hỏi tôi: “Liệu thế hệ mô hình năm sau có đủ thông minh để tự tránh những lỗi này không?” Câu trả lời của tôi vẫn là không. Tranh chấp đồng thời, đọc dữ liệu cũ hay rút lại quyền đồng thuận không phải là thiếu hụt về trí thông minh. Một bác sĩ ba mươi năm kinh nghiệm vẫn có thể ghi đè bệnh án nếu giao diện bệnh án điện tử giấu mất kết quả xét nghiệm vừa trả về hai phút trước.',
              'Mô hình tốt hơn giúp suy luận sắc bén hơn bên trong cửa sổ đọc. Hợp đồng tất định bảo vệ dữ liệu bền vững ngay tại ranh giới ghi. Tách bạch hai vai trò đó là thứ biến một bản demo ấn tượng thành phần mềm có thể kiểm toán được.',
            ],
          },
        ],
      },
      en: {
        title:
          'Why prompt guardrails fail longitudinal health AI—and why safety belongs at the commit boundary',
        date: '28 October 2026',
        readTime: '14 min read',
        categoryLabel: 'AI & Research',
        excerpt:
          'Evaluating a health-AI assistant on single-turn Q&A is like testing a database with one SELECT and never testing concurrent writes. A candid technical breakdown of Snapshot-Bound Commit Admission (GLHS)—accepted as Short Paper #97 at HEALTHINF 2027.',
        pullQuote:
          'Safety in longitudinal AI is not decided when a model generates a fluent clinical paragraph—it is decided at the exact millisecond an inference asks to become durable state.',
        sections: [
          {
            heading: 'The single-turn illusion everyone keeps benchmarking',
            paragraphs: [
              'Whenever I talk about my work on longitudinal health AI, the first question I get is usually some version of: “Wait—aren’t frontier LLMs already scoring above 90% on medical licensing exams? Isn’t the accuracy problem mostly solved?”',
              'My answer is always the same: licensing exams test whether a model can recite medical knowledge when every single relevant fact is frozen, verified, and handed to it inside one neat prompt. Real longitudinal care looks nothing like a multiple-choice exam.',
              'In real healthcare, truth moves asynchronously across weeks and months. A clinical fact may become valid in the patient’s body at one moment—what medical database researchers call valid time (t_v)—and only become known to the system days later at knowledge time (t_k). Two clinical sources can genuinely disagree while an investigation is still open. And a piece of sensitive information that is appropriate for one actor, role, and clinical task can be completely unauthorized for another.',
              'Even worse, the danger does not end when retrieval succeeds. Suppose your pipeline retrieves the exact right records at 9:00 AM and shows an authorized view to an AI assistant. The assistant reasons over that view and returns a proposed medication update or care-plan edit minutes or hours later. During that quiet gap between read and write, the patient’s medication list may have been updated by another clinician, a delayed lab panel may have arrived, the patient may have withdrawn consent, or the governing policy epoch may have moved on.',
              'If your system blindly merges the model’s proposal, you don’t have a “medical hallucination.” You have a stale, unauthorized state transition dressed in fluent clinical prose.',
            ],
          },
          {
            heading: 'The seam between retrieval and persistence',
            paragraphs: [
              'One thing I always want to be brutally clear about—especially because the HEALTHINF 2027 reviewers rightly pushed on novelty and positioning—is what GLHS does and does not claim to invent.',
              'Health informatics already has strong, battle-tested building blocks. HL7 FHIR models Provenance, Consent, and version-aware HTTP operations; openEHR preserves versioned clinical contributions; W3C PROV provides a general provenance framework; and recent agent-memory systems explore bitemporal arbitration and transactional belief updates.',
              'GLHS does not rebrand those mechanisms as new inventions. Instead, it points a spotlight at a narrow, dangerous seam between two operations that are usually engineered in isolation:',
            ],
            list: {
              items: [
                {
                  lead: 'A version check alone is blind to disclosure.',
                  text: 'Matching a base state version can reject a stale write, yet it cannot prove which governed disclosure supplied the evidence and policy context behind the model’s proposal.',
                },
                {
                  lead: 'A disclosure policy alone vanishes after inference.',
                  text: 'A privacy-aware retriever can minimize what the model sees at read time, yet disappear the moment the model hands back an update to persist.',
                },
              ],
            },
            afterListParagraphs: [
              'Without a contract joining those two ends, the read-to-write interval becomes a governance blind spot. Proposals can land against stale state versions, outlive revoked consent or expired authorizations, or rely on evidence that was never legitimately disclosed for that task.',
            ],
          },
          {
            heading: 'Formalizing the read-to-write contract: THSS → GST',
            paragraphs: [
              'The core architectural choice in GLHS (formalized in Snapshot-Bound Commit Admission for Longitudinal Health AI, Short Paper #97 at HEALTHINF 2027) is refusal: never ask the language model to grade its own safety, and never grant it raw database write authority. Every governance check runs on a deterministic, non-LLM path.',
              'On the read path, a policy-aware gateway resolves the governed longitudinal state at explicit clinical valid-time (t_v) and knowledge-time (t_k) cutoffs—keeping database write time strictly as an audit coordinate rather than a proxy for knowledge time. It compiles and persists a Task-Bounded Health State Snapshot (THSS) before the model ever runs:',
            ],
            formula: {
              label: 'THSS Snapshot Tuple',
              expression: 'H = (u, α, r, φ, τ, v_s, v_π, v_c, t_v, t_k, id_H, d_H, E_H)',
            },
            afterListParagraphs: [
              'Here, u is the subject profile; α and r are actor and role; φ and τ are purpose and task; v_s, v_π, v_c pin the state, policy, and consent versions; id_H is the persisted snapshot identity; E_H is the disclosed evidence set; and d_H is a SHA-256 consistency digest computed over a strict project-defined canonical JSON profile (sorted keys, preserved array order, compact UTF-8, UTC-normalized datetimes, normalized negative zero, failing closed on any mismatch—explicitly documented as project-defined rather than RFC 8785).',
              'On the write path, the model outputs free-form prose only as explanation, never as an executable mutation. To change state, it emits a structured proposal P referencing H, its declared dependency set, its delta Δ, and provenance ρ. A Governed State Transition (GST) gateway then enforces the commit-admission invariant:',
            ],
            note: {
              label: 'Commit Admission Invariant (GST)',
              content:
                'Commit(P) ⇔ Bound(P, H) ∧ StateCurrent(P) ∧ GovernanceCurrent(P) ∧ SnapshotValid(P). Rather than collapsing every rejection into a vague database error, the gateway returns a typed failure vocabulary: mismatches in id_H/d_H signal tampering or substitution; a moved v_s signals stale state; changed v_c/v_π signal governance drift; expiry rejects proposals outliving authorization; and dependency mismatches catch evidence outside disclosed scope.',
            },
          },
          {
            heading: 'Separating three evidence classes—and refusing to oversell the results',
            paragraphs: [
              'If there is one habit I am proudest of in this paper, it is refusing to lump software conformance, database concurrency, and LLM reasoning into one flashy headline metric. In our evaluation, we deliberately kept three evidence classes strictly apart:',
            ],
            list: {
              ordered: true,
              items: [
                {
                  lead: 'Deterministic Contract Conformance (112 cells):',
                  text: 'We ran 16 developer-authored cases across 7 progressively stronger contract variants. Every single cell produced the expected outcome and pinned the exact first-rejecting clause—catching mismatches in profile, actor, role, purpose, task, base version, snapshot identity, and digest. In a historical replay check, an earlier conflict remained faithfully visible even after a later resolution, because visibility was reconstructed from transition history rather than a flattened mutable projection.',
                },
                {
                  lead: 'PostgreSQL 16.14 Concurrency & Service Cost (50 races, 310 writer attempts):',
                  text: 'Using a profile-global state version counter across W ∈ {1, 2, 4, 8, 16} concurrent writers (five races per level), every tested stale-write race closed cleanly with one atomic winner and zero database errors. Just as importantly, the experiment exposed the real engineering price of simplicity: for writes touching unrelated slots on the same profile, false-stale rejection climbed along the exact one-winner curve—0 at 1 writer, 0.50 at 2, 0.75 at 4, 0.875 at 8, and 0.9375 at 16. On a single local in-process worker (excluding HTTP and LLM inference, 30 sequential runs), p50/p95 latency was 61.81/68.89 ms for THSS compilation, 30.97/54.69 ms for GST transitions, 7.30/12.30 ms for state reconstruction, and 2.12/5.50 ms for audit lookups, with peak process RSS around 109 MiB.',
                },
                {
                  lead: 'Prospective Two-Model Synthetic Cohort (64 cases, 1,152 cells):',
                  text: 'To test whether strict task-bounded disclosure hurts reasoning utility, we evaluated Claude and Gemini across Strict THSS and five context controls—full authorized history, long chronological context, Naive RAG, last-write-wins (LWW), and BTSA—scored on a strict all-four-axis exactness endpoint (lifecycle, evidence, timeliness, escalation). All 1,152 cells completed without execution errors. Under Strict THSS, Gemini was exact on 64/64 cases (100%) and Claude on 63/64 cases (98.44%)—and we deliberately left that single Claude error (a cancelled history predicted as satisfied) untouched without post-hoc repair. Across paired Holm-adjusted comparisons (α = 0.05), Strict THSS beat Naive RAG (21/0/43 wins/losses/ties on Claude; 16/0/48 on Gemini) and LWW (16/0/48 on both), though Claude did not significantly outperform BTSA and Gemini tied BTSA, full history, and long context.',
                },
              ],
            },
          },
          {
            heading: 'Listening to the reviewers—and why honesty is the real engineering standard',
            paragraphs: [
              'Getting accepted to HEALTHINF 2027 with reviewer scores spanning 4 to 6 across relevance, originality, meaningfulness, and presentation was validating. What actually made the work sharper, though, were the hard questions the reviewers put in front of me. They pointed out—accurately—what this paper does not yet prove:',
            ],
            list: {
              items: [
                {
                  text: '64 synthetic cases with high tie rates left only 9–21 informative discordant pairs in significant contrasts, underpowered relative to our planned target of 51.',
                },
                {
                  text: 'Atomicity against concurrent governance writers (authorization loss, consent revocation, or policy updates racing mid-commit) was not yet stress-tested.',
                },
                {
                  text: 'A base-version-only proposal path remains exposed in the gateway, meaning provenance-sensitive downgrade prevention is not yet enforced across every downstream route.',
                },
                {
                  text: 'Most fundamentally, software conformance on synthetic cases is not clinical validation or legal compliance.',
                },
              ],
            },
            afterListParagraphs: [
              'Anyone claiming an early-stage health-AI prototype is “clinically proven” is selling marketing copy, not science. People still ask me: “Won’t next year’s frontier model simply be smart enough not to make stale or unauthorized writes?” My answer hasn’t changed: no. Concurrency, stale reads, and revoked consent are not intelligence deficits. A senior physician with thirty years of practice can still overwrite a chart if the EHR hides a lab report that landed two minutes earlier.',
              'Better models sharpen reasoning inside the read window. Deterministic contracts protect durable state at the write boundary. Keeping those two jobs separate is what turns an impressive prototype into software you can actually audit.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'human-in-the-loop-ai-crm-boutique-hospitality',
    category: 'hospitality',
    content: {
      vi: {
        title:
          'Phản đối chatbot khách sạn tự động: xây dựng hệ thống AI CRM lấy con người làm trọng tâm cho khách sạn boutique 4 sao',
        date: '19 tháng 9, 2026',
        readTime: '10 phút đọc',
        categoryLabel: 'Dịch vụ Lưu trú & Sản phẩm',
        excerpt:
          'Phần lớn các giải pháp AI cho ngành khách sạn hiện nay đều tìm cách thay thế nhân viên lễ tân bằng một con bot tự động—vô tình phá hủy chính sự tinh tế của con người mà một khách sạn boutique đang bán. Bài học thực tế từ hai tháng tại Thong Dong Quán Boutique Hotel ở Huế.',
        pullQuote:
          'Trong ngành khách sạn boutique, một câu trả lời tự động vụng về làm mất nhiều niềm tin hơn mười phút chờ đợi phản hồi. Tự động hóa nên làm sắc bén trí nhớ của người chủ nhà, tuyệt đối đừng đóng giả giọng nói của họ.',
        sections: [
          {
            heading: 'Khoảnh khắc bước ra sau quầy lễ tân của một khách sạn boutique',
            paragraphs: [
              'Nếu chỉ quanh quẩn trong giới công nghệ, ta rất dễ tin rằng mọi quy trình kinh doanh đều đang chờ được tự động hóa hoàn toàn. Ngồi nghe hầu hết các bài chào hàng AI cho ngành lưu trú hiện nay, bạn sẽ thấy cùng một lời hứa: “Tự động hóa 80% hội thoại với khách hàng bằng trợ lý AI trực 24/7.”',
              'Nhưng chỉ cần bước vào sảnh một khách sạn boutique 4 sao như Thong Dong Quán Boutique Hotel ở Huế, đứng sau quầy lễ tân quan sát một buổi chiều, bạn sẽ thấy lời hứa đó xa rời thực tế đến mức nào.',
              'Với một nhà nghỉ quá cảnh quy mô lớn vận hành bằng mã khóa cửa tự động và quy trình chuẩn hóa cứng, tự động hóa toàn phần có thể hợp lý. Nhưng với một khách sạn boutique ở Huế, cách làm đó hiểu sai hoàn toàn giá trị cốt lõi mà khách hàng đang chi trả. Du khách không chọn một căn phòng yên tĩnh nhìn ra sân vườn ở Huế để đi thương lượng giờ nhận phòng sớm, yêu cầu trang trí kỷ niệm ngày cưới hay khẩu vị ăn kiêng với một bộ sinh văn bản lúc nào cũng hớn hở một cách máy móc. Họ chọn nơi này vì có một con người thật để tâm tới những chi tiết nhỏ, nhớ lần trước họ thích tầng yên tĩnh, và trò chuyện với họ bằng sự ấm áp khoan thai rất riêng của người Huế.',
              'Thay thế giọng nói của quầy lễ tân bằng một con bot tự gửi tin nhắn không phải là chuyển đổi số. Đó là sự bào mòn thương hiệu trong âm thầm.',
            ],
          },
          {
            heading: 'Quan sát trước khi viết code: tìm đúng “điểm rò rỉ” vận hành',
            paragraphs: [
              'Khi bắt đầu kỳ thực tập AI & Chuyển đổi số tại Thong Dong Quán từ tháng 6 đến tháng 8 năm 2026, tôi tự đặt ra một nguyên tắc cho giai đoạn đầu: chưa mở trình soạn code chừng nào chưa hiểu một yêu cầu của khách thực sự đi qua một tuần cao điểm như thế nào.',
              'Ngồi quan sát đội ngũ làm việc qua các ca trực cho thấy một điều rất rõ. Sự cố chưa bao giờ đến từ việc nhân viên thiếu tận tâm hay thiếu nhiệt tình. Vấn đề nằm ở sự phân mảnh dữ liệu theo cấu trúc.',
              'Hãy hình dung một kịch bản hoàn toàn bình thường. Một vị khách cũ nhắn tin trên một kênh hỏi phòng cuối tuần. Hai ngày sau, họ gửi email nhắc thêm về dịp kỷ niệm đặc biệt. Trong khi đó, ghi chú về sở thích chọn phòng xa mặt đường của họ lại nằm trong một bảng tính tĩnh do nhân viên ca sáng hôm trước lưu lại. Khi bạn nhân viên ca chiều tiếp nhận cuộc trò chuyện ngay lúc có hai gia đình đang làm thủ tục nhận phòng trước quầy, bạn ấy buộc phải mở từng tab, dò lại từng khung chat để chắp nối ngữ cảnh. Hệ quả là những câu hỏi bị lặp lại, nhịp phản hồi thiếu đồng đều, và những chi tiết nhỏ dễ bị trôi mất trong giờ cao điểm.',
              'Chứng kiến điều đó làm đảo ngược hoàn toàn giả thuyết sản phẩm ban đầu của tôi. Khách sạn không cần một con AI tự ý trả lời khách. Họ cần một lớp “trí nhớ hợp nhất” giúp bất kỳ nhân viên nào cũng nắm trọn bối cảnh trong vòng hai giây.',
            ],
            note: {
              label: 'Chẩn đoán vận hành',
              content:
                'Điểm nghẽn là ký ức về khách hàng bị phân tán qua nhiều ca trực và kênh liên lạc. Thuốc sai là để AI tự động gửi tin nhắn. Thuốc đúng là hồ sơ khách có cấu trúc + trạng thái theo dõi rõ ràng + bản nháp do nhân viên kiểm duyệt.',
            },
          },
          {
            heading: 'Thiết kế “cổng duyệt”: tăng tốc mà không xóa nhòa dấu ấn người đón tiếp',
            paragraphs: [
              'Kiến trúc CRM nội bộ mà tôi đề xuất và xây dựng xoay quanh ba khối cơ bản gọn ghẽ:',
            ],
            list: {
              ordered: true,
              items: [
                {
                  lead: 'Hồ sơ khách hàng hợp nhất',
                  text: 'gắn chặt lịch sử lưu trú, sở thích phòng ốc và ghi chú đặc biệt với toàn bộ chuỗi hỏi đáp, để ngữ cảnh không bao giờ bị “mất trí nhớ” khi giao ca.',
                },
                {
                  lead: 'Đường ống theo dõi (follow-up pipeline) tường minh',
                  text: 'với các trạng thái rõ ràng để không một yêu cầu trước khi đến hay lời hỏi thăm sau khi trả phòng nào âm thầm hết hạn trong hộp thư.',
                },
                {
                  lead: 'Lớp soạn nháp AI dừng lại dứt khoát trước nút Gửi.',
                  text: '',
                },
              ],
            },
            afterListParagraphs: [
              'Khi có tin nhắn mới, hệ thống tự kéo lịch sử khách, chính sách hiện hành của khách sạn và ghi chú tình trạng phòng theo mùa để dựng sẵn một bản nháp ngắn gọn. Thử thách khó nhất không nằm ở câu lệnh prompt, mà ở việc thiết kế giao diện sao cho bước kiểm duyệt của con người nhẹ như không chứ không trở thành thủ tục rườm rà. Nhân viên lễ tân chỉ cần lướt qua hồ sơ, chỉnh lại một câu thật tự nhiên—thêm một lời nhắn về cơn mưa chiều ở Huế hay gợi ý một quán ăn gần đó—rồi bấm duyệt trong vài giây.',
              'Thời gian chuẩn bị phản hồi giảm đi rõ rệt, nhưng trách nhiệm chưa bao giờ bị làm mờ. Mọi tin nhắn rời khỏi Thong Dong Quán vẫn mang trọn sự tinh tế và phán đoán của một người đón tiếp thực thụ.',
            ],
          },
          {
            heading: 'Gột sạch “giọng AI” và mở rộng tư duy hỗ trợ sang marketing',
            paragraphs: [
              'Làm kỹ thuật trong ngành khách sạn còn dạy tôi sự khắt khe của văn phong. Nếu để mặc định, các mô hình ngôn ngữ lớn rất hay viết theo kiểu tổng đài doanh nghiệp quá đà: “Chúng tôi vô cùng hân hạnh được phục vụ quý khách!” hay “Xin đừng ngần ngại liên hệ bất cứ khi nào cần!” Với những du khách tinh tế tìm kiếm sự thư thả, mấy câu sáo rỗng đó lập tức lộ rõ mùi máy móc chỉ sau nửa giây đọc.',
              'Việc gọt giũa các mẫu soạn thảo theo hướng tiết chế, rõ ràng về thông tin và mang đúng nhịp điệu hiếu khách trầm ấm của Huế tốn nhiều vòng tinh chỉnh hơn cả phần kết nối backend—nhưng lại tạo ra khác biệt lớn gấp đôi.',
              'Chúng tôi áp dụng đúng triết lý trợ giúp đó cho mảng tiếp thị và điều phối nội bộ: dùng AI lên phương án nháp cho chiến dịch theo mùa, sắp xếp lịch nội dung và tổng hợp xu hướng câu hỏi của khách để ban quản lý nhìn rõ từng tháng khách đang quan tâm hạng phòng, gói trải nghiệm hay lịch trình nào nhất. Một lần nữa, phần mềm gánh phần sơ chế nặng nhọc; con người giữ toàn quyền quyết định về biên tập và thương mại.',
            ],
          },
          {
            heading: 'Bài học kỹ thuật khó nhất mùa hè: viết phần mềm cho những người không phải kỹ sư',
            paragraphs: [
              'Trước mùa hè đó, gần như toàn bộ phần mềm tôi viết đều phục vụ lập trình viên, người nghiên cứu hoặc học sinh thi tin học—những người sẵn sàng chịu đựng bảng điều khiển dày đặc chữ và thông báo lỗi khó hiểu miễn sao lõi hệ thống chạy nhanh.',
              'Nhân viên một khách sạn boutique không ngồi trong phòng kín với hai màn hình lớn và tai nghe chống ồn. Họ làm việc giữa dòng dịch vụ trực tiếp: khách đang đứng ngay trước mặt, điện thoại sảnh đang reo, bộ phận buồng phòng đang báo cập nhật tình trạng phòng theo thời gian thực. Nếu màn hình CRM bắt bấm sáu cú nhấp chuột mới ghi nhận xong một đầu việc, hay bắt họ đọc ba đoạn văn dài ngoằng do AI sinh ra, họ sẽ chẳng gửi báo cáo lỗi đâu—đến thứ Sáu, họ sẽ lặng lẽ bỏ phần mềm để quay lại với giấy note dán bàn.',
              'Sự tiết chế—ít trường nhập liệu hơn, chuyển trạng thái rõ ràng hơn, và luôn để con người làm chủ ở mọi điểm—là kỷ luật kỹ thuật khó nhất tôi học được trong mùa hè đó. Và thật thú vị, nó nối thẳng về nghiên cứu AI y tế của tôi: dù là hỗ trợ một bác sĩ hay một nhân viên lễ tân, AI tử tế là thứ biết lùi ra sau ánh đèn sân khấu để làm sắc bén thêm năng lực của con người đang gánh trách nhiệm.',
            ],
          },
        ],
      },
      en: {
        title:
          'Against autonomous hotel chatbots: building a human-in-the-loop AI CRM for a 4-star boutique property',
        date: '19 September 2026',
        readTime: '10 min read',
        categoryLabel: 'Hospitality & Product',
        excerpt:
          'Most hospitality-AI pitches try to replace the concierge with an autonomous bot—destroying the exact human judgment a boutique hotel sells. Lessons from two months building an assistive guest CRM at Thong Dong Quán Boutique Hotel in Hue.',
        pullQuote:
          'In boutique hospitality, one clumsy autonomous reply costs more trust than ten minutes of response latency ever will. Automation should sharpen the host’s memory, never impersonate their voice.',
        sections: [
          {
            heading: 'The moment you step behind a boutique reception desk',
            paragraphs: [
              'If you spend all your time in tech circles, it is easy to believe that every business problem is waiting to be automated out of existence. Sit through almost any hospitality-AI pitch right now and you will hear the exact same slide: “Automate 80% of your guest conversations with a 24/7 AI concierge.”',
              'Then you walk into the lobby of a 4-star boutique property like Thong Dong Quán Boutique Hotel in Hue, stand behind the front desk for an afternoon, and realize how wildly out of touch that pitch is.',
              'For a high-volume highway transit hotel running on keypad codes and standardized bookings, full automation might make sense. For a boutique hotel in Hue, it fundamentally misunderstands what the guest is paying for. Travelers do not book a quiet courtyard room in Hue so they can haggle over early check-in, an anniversary setup, or a dietary preference with an overly cheerful text generator. They book it because a human being notices small details, remembers that they preferred a quieter floor last stay, and speaks to them with unhurried, genuine Hue warmth.',
              'Replacing that front-desk voice with an unsupervised bot isn’t digital transformation. It is slow, polite brand erosion.',
            ],
          },
          {
            heading: 'Listening before coding: finding the real operational leak',
            paragraphs: [
              'When I joined Thong Dong Quán as an AI & Digital Transformation Intern from June to August 2026, I made a deliberate rule for my first phase: do not open an IDE until I understand how a real guest inquiry actually survives a busy week.',
              'Watching the team work across shifts made one thing immediately obvious. Nobody on the staff lacked warmth, initiative, or care. The real leak was structural fragmentation.',
              'Picture how a completely normal booking unfolds. A returning guest messages on one platform asking about weekend availability. Two days later, they mention an anniversary detail in an email. Meanwhile, their preference for a quiet room away from the street sits inside a static spreadsheet updated by someone on yesterday’s morning shift. When the afternoon associate picks up the thread while two families are checking in at the lobby desk, they have to hunt across tabs and chats to reconstruct who this person is. The result? Repeated questions, uneven follow-up timing, and small promises quietly slipping through the cracks during peak occupancy.',
              'Seeing that firsthand flipped my product thesis upside down. The hotel did not need an AI that talks to guests unsupervised. It needed a unified memory layer that hands any staff member complete, calm context in two seconds.',
            ],
            note: {
              label: 'Operational Diagnosis',
              content:
                'The bottleneck was scattered guest memory across shifts and channels. The wrong cure was autonomous outbound replies. The right cure was structured guest dossiers + explicit follow-up state + staff-reviewed drafts.',
            },
          },
          {
            heading: 'Designing the review gate: speed without erasing the host',
            paragraphs: [
              'The internal CRM I proposed and built rested on three deliberately tight primitives:',
            ],
            list: {
              ordered: true,
              items: [
                {
                  lead: 'A unified guest dossier',
                  text: 'tying stay history, room preferences, and special notes directly to incoming inquiries so context never resets when shifts change.',
                },
                {
                  lead: 'An explicit follow-up pipeline',
                  text: 'with clear status transitions so no pre-arrival request or post-stay touchpoint quietly expires in an unread inbox.',
                },
                {
                  lead: 'An AI drafting layer that stops strictly short of the Send button.',
                  text: '',
                },
              ],
            },
            afterListParagraphs: [
              'When a new inquiry comes in, the system pulls the guest’s history, current property policies, and seasonal availability notes to assemble a clean, concise draft reply. The real design challenge wasn’t the prompt—it was making human review feel effortless rather than bureaucratic. A front-desk associate can scan the structured dossier, adjust one line to add a personal touch about Hue’s afternoon rain or a nearby café, and approve the reply in seconds.',
              'Response drafting got dramatically faster, yet accountability never blurred. Every message leaving Thong Dong Quán still carried a real host’s judgment and signature.',
            ],
          },
          {
            heading: 'Killing “AI voice” and scaling the same restraint to marketing',
            paragraphs: [
              'Working inside hospitality also taught me how unforgiving prose register can be. Left to their defaults, language models write like an over-caffeinated corporate call center: “We are absolutely thrilled to assist you!” or “Please do not hesitate to reach out should you require anything further!” To a discerning traveler looking for calm and taste, those stock phrases scream synthetic within half a second.',
              'Tightening our drafting templates around understatement, factual clarity, and the measured warmth of Hue hospitality took more iteration than the backend wiring—and mattered twice as much.',
              'We carried that exact assistive philosophy into marketing and internal coordination: using AI to draft seasonal campaign variations, structure content calendars, and synthesize recurring inquiry patterns so management could see which room types, packages, or itinerary questions came up most often each month. Once again, the software handled the heavy first-pass structuring; humans made every editorial and commercial call.',
            ],
          },
          {
            heading: 'The hardest engineering lesson of the summer: designing for people who aren’t engineers',
            paragraphs: [
              'Before that summer, almost everything I built was used by developers, researchers, or competitive programmers—people who happily tolerate dense dashboards and cryptic error states as long as the underlying engine is fast.',
              'Boutique hotel staff do not sit in quiet dual-monitor rooms with noise-canceling headphones. They work in the middle of live physical service: a guest is standing across the counter, the lobby phone is ringing, and housekeeping is updating room readiness in real time. If a CRM screen takes six clicks to log a follow-up, or forces staff to wade through three paragraphs of AI-generated text, they won’t file a bug report—they will quietly abandon it and go back to sticky notes by Friday.',
              'Restraint—fewer fields, unmistakable status transitions, and honest human override everywhere—was the hardest engineering discipline I practiced that summer. And strangely enough, it connects straight back to my work in health AI: whether you are supporting a clinician or a concierge, good AI stays out of the spotlight and strengthens the human holding the responsibility.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'digitizing-hues-nine-dynastic-urns-3d-ar-rag',
    category: 'heritage',
    content: {
      vi: {
        title:
          'Di sản không cần thêm một màn trình diễn: kỹ thuật 3D/AR gắn nguồn sử liệu cho Cửu Đỉnh Huế',
        date: '04 tháng 8, 2026',
        readTime: '12 phút đọc',
        categoryLabel: 'Di sản Số',
        excerpt:
          'Số hóa một hiện vật, tự bản thân nó, không tạo ra sự thấu hiểu lịch sử. Bên trong những lựa chọn thiết kế, dữ liệu khảo sát từ 1.502 học sinh Huế và ranh giới trung thực về phương pháp luận của LƯU NIÊN—hệ sinh thái di sản số dành cho Cửu Đỉnh.',
        pullQuote:
          'Đóng góp của LƯU NIÊN là một lộ trình truy xuất được từ hiện vật đến lời giải thích lịch sử dựa trên bằng chứng, chứ không phải sự mới lạ đơn thuần của công nghệ 3D.',
        sections: [
          {
            heading: 'Lớn lên bên cạnh bảo vật bằng đồng mà rất ít người thực sự biết tới',
            paragraphs: [
              'Lớn lên ở Huế, Cửu Đỉnh đúc dưới triều Nguyễn vốn như một phần của không khí văn hóa xung quanh—chín chiếc đỉnh đồng đồ sộ mang trên mình hàng loạt hình tượng chạm nổi trải rộng từ địa lý, thảo mộc, động vật, nghề thủ công cho đến biểu tượng cung đình. Nói không quá, đó là một bộ bách khoa toàn thư bằng đồng của Việt Nam thế kỷ XIX.',
              'Thế nhưng, khi tôi và Trần Minh Đức tại trường THPT Hai Bà Trưng (Huế) bắt đầu tìm hiểu xem học sinh đồng trang lứa thực sự tiếp cận Cửu Đỉnh ra sao, những con số thu về khiến chúng tôi chững lại. Qua phân tích mô tả thứ cấp trên dữ liệu khảo sát tổng hợp từ 1.502 học sinh thuộc sáu trường học tại Huế, có tới 63,8% (958/1.502 em) chưa từng biết đến các hình tượng chạm nổi trên Cửu Đỉnh, và 71,0% (1.066/1.502 em) chưa từng tham gia bất kỳ hoạt động giáo dục di sản nào liên quan.',
              'Suốt một thập kỷ qua, cụm từ “di sản số” luôn hứa hẹn sẽ lấp đầy khoảng trống đó. Vậy mà phần lớn các dự án tôi từng quan sát đều rơi vào một trong hai cái bẫy âm thầm.',
              'Cái bẫy thứ nhất là sự phô diễn công nghệ: nhiều nhóm dựng ra những khối lưới 3D nặng trịch, chiếu lên màn hình hội nghị thì đẹp mãn nhãn rồi coi như xong—quên mất rằng một mô hình 3D có thể giúp người học nhìn thấy hoa văn chạm nổi nhưng vẫn để nguyên ý nghĩa lịch sử của nó trong bóng tối. Không có khung dẫn dắt, học sinh xoay chiếc đỉnh đồng chín mươi giây, buột miệng khen “đẹp đấy” rồi đóng tab. Cái bẫy thứ hai mới hơn và nguy hiểm hơn: gắn đại một chatbot phổ thông không ràng buộc vào hiện vật văn hóa để nó tự tin bịa ra ý nghĩa lịch sử mỗi khi thiếu nguồn tư liệu gốc.',
              'Khi xây dựng LƯU NIÊN (được công bố trong hai kỷ yếu có mã ISBN—Công nghệ số trong bảo tồn di sản, tr. 105–126, ISBN 978-632-607-921-0 và Di sản và chuyển đổi số, ISBN 978-604-45-4049-8—cùng Poster P20 được chấp nhận tại Hội nghị Khoa học lần thứ 15 năm 2026 của Trường ĐH Khoa học Tự nhiên ĐHQG-HCM), chúng tôi neo toàn bộ dự án vào một câu khẳng định thẳng thắn: nhìn thấy, diễn giải và lập luận chứng minh là ba sự kiện học tập hoàn toàn tách biệt.',
            ],
          },
          {
            heading: 'Lắng nghe 1.502 học sinh—và tôn trọng thực tế lớp học',
            paragraphs: [
              'Trước khi chốt quy trình xử lý đa phương tiện, chúng tôi đọc thật kỹ điều 1.502 học sinh ở sáu trường học tại Huế đã phản hồi. Ít tiếp cận trước đó không hề đồng nghĩa với thờ ơ. Có tới 87,1% bày tỏ sự hứng thú với các định dạng số mới, và 94,0% (1.412/1.502 em) mong muốn được tiếp cận di sản số. Khi được chọn nhiều định dạng ưa thích, các bạn ưu tiên bảo tàng ảo / 3D (89,9%, 1.350/1.502), cẩm nang di sản số (83,2%, 1.250/1.502), website, mạng xã hội và video (81,2%, 1.220/1.502), song hành cùng hoạt động trải nghiệm (45,7%).',
              'Điều quan trọng ngang ngửa với nhu cầu là tính công bằng trong một lớp học bình thường ở Việt Nam. Không phải học sinh nào cũng có điện thoại hỗ trợ AR kèm camera tốt, và Wi-Fi trường học hiếm khi ổn định trong trọn vẹn một tiết học 45 phút.',
              'Vì vậy, dù quy trình tài liệu hóa của dự án đi qua năm bước Thu nhận (Capture) → Tái dựng (Reconstruct) → Tối ưu (Optimize) → Trình bày (Present) → Giảng dạy (Teach)—chuẩn bị tài nguyên 3D tối ưu cho web/di động, AR không cần thẻ đánh dấu, bảo tàng ảo và học liệu ngắn—chúng tôi kiên quyết không biến AR thành “cửa ải bắt buộc”. Mọi lộ trình học đều giữ lại phương án dự phòng bằng ảnh 2D hoặc trình chiếu của giáo viên, để thiết bị hay đường truyền không bao giờ trở thành rào cản ngăn học sinh tìm hiểu lịch sử.',
            ],
            note: {
              label: 'Nguyên tắc tiếp cận công bằng',
              content:
                'Không bao giờ để phần cứng trở thành người gác cổng của lịch sử. Luôn song hành giữa 3D/AR với các phương án 2D hợp lệ và trình chiếu lớp học.',
            },
          },
          {
            heading: 'ELLO: trói chặt hình ảnh vào sử liệu thay vì để AI tự ứng biến',
            paragraphs: [
              'Lịch sử là bộ môn của bằng chứng, không phải trò đoán chữ. Nếu học sinh hỏi một hình tượng dòng sông hay loài cây trên đỉnh đồng mang ý nghĩa gì, một chatbot không bị ràng buộc sẽ rất dễ trộn lẫn mấy mảnh thông tin trên mạng thành những câu văn tiếng Việt nghe cực kỳ uy tín—lặng lẽ điền vào khoảng trống sử liệu bằng những “sự thật” do máy tự bịa.',
              'Để trải nghiệm thị giác không bao giờ tách rời khỏi học thuật, chúng tôi đề xuất một khái niệm phân tích mang tên Đơn vị Học tập Gắn kết Bằng chứng (Evidence-Linked Learning Object — ELLO), một đơn vị học liệu tái sử dụng và có quản lý phiên bản, kết nối chủ thể, nguồn chứng cứ và sư phạm:',
            ],
            formula: {
              label: 'Cấu trúc đơn vị ELLO',
              expression: 'L = (e, c, s, m, a, q, f, v)',
            },
            afterListParagraphs: [
              'Mỗi đơn vị liên kết chặt chẽ giữa thực thể di sản (e), nhận định lịch sử (c), hồ sơ nguồn tư liệu (s), tư liệu hình ảnh được cấp phép (m), hoạt động học tập (a), tiêu chí đánh giá (q), phản hồi (f) và thông tin thẩm định/phiên bản (v).',
              'Hai quy tắc quản trị nằm ngay lõi của ELLO. Thứ nhất, học liệu chỉ được xuất bản sau khi vượt qua kiểm tra nguồn, bản quyền hình ảnh, rà soát của con người và khả năng tiếp cận. Thứ hai, mỗi nhận định lịch sử đều phải mang kèm nguồn trích dẫn và một trạng thái tri thức minh bạch: đã ghi nhận tư liệu (documented), suy luận (inferred), phục dựng (reconstructed), hoặc chưa ngã ngũ (unresolved). Khi thiếu chứng cứ, hệ thống ghi rõ là chưa ngã ngũ thay vì để AI tự bịa ra một câu trả lời trơn tru. Trong giáo dục lịch sử, chỉ cho học sinh thấy ranh giới nơi tư liệu đã kiểm chứng dừng lại không phải là lỗi trải nghiệm—đó chính là điểm khởi đầu của tư duy sử học.',
            ],
          },
          {
            heading: 'Từ xoay mô hình thụ động đến vòng lặp truy vấn năm bước',
            paragraphs: [
              'ELLO đi vào lớp học thực tế như thế nào? Hãy thử hình dung một tình huống minh họa: Làm sao nhận diện và diễn giải một hình tượng dòng sông trên đỉnh đồng dựa vào nguồn sử liệu?',
              'Thay vì thưởng điểm cho việc bấm chuột nhanh, sưu tầm huy hiệu hay xoay khối 3D vô định, chúng tôi cấu trúc bài học trên LMS và hoạt động có giáo viên dẫn dắt xoay quanh năm bước rõ ràng:',
            ],
            list: {
              ordered: true,
              items: [
                {
                  lead: 'Định hướng (Orient):',
                  text: 'Giới thiệu hiện vật và đặt câu hỏi lịch sử trọng tâm.',
                },
                {
                  lead: 'Quan sát (Observe):',
                  text: 'Định vị hình tượng trên bề mặt đồng và mô tả đúng những gì nhìn thấy trực tiếp.',
                },
                {
                  lead: 'Đối chiếu nguồn (Check Sources):',
                  text: 'So sánh tên gọi dự đoán với tư liệu sử học hoặc bản đồ đã ghi nhận.',
                },
                {
                  lead: 'Lập luận (Justify):',
                  text: 'Viết một đoạn giải thích ngắn có trích dẫn nguồn—phân biệt rõ giữa quan sát trực tiếp với suy luận, đồng thời thừa nhận những điểm còn chưa chắc chắn.',
                },
                {
                  lead: 'Chỉnh sửa (Revise):',
                  text: 'Dựa vào bảng tiêu chí (rubric) và góp ý của giáo viên để hoàn thiện lập luận.',
                },
              ],
            },
            afterListParagraphs: [
              'Trên các mục đánh giá trải nghiệm được báo cáo (n = 1.502), phản hồi từ học sinh rất tích cực: 94,1% (1.413/1.502) thấy nội dung hấp dẫn, 94,5% tự đánh giá mình hiểu bài rõ ràng, 95,5% (1.435/1.502) nhìn nhận triển khai tại trường hiệu quả, 97,5% (1.465/1.502) cảm thấy nhận thức về di sản được nâng cao, và 92,7% sẵn sàng chia sẻ học liệu.',
            ],
          },
          {
            heading: 'Vẽ rõ ranh giới trung thực—dữ liệu chứng minh được gì và bước tiếp theo là gì',
            paragraphs: [
              'Giải Nhất Hội thi Khoa học Kỹ thuật cấp Thành phố Huế (2025–2026) và Giải Nhất Cuộc thi Sáng tạo Thanh thiếu niên Nhi đồng TP Huế lần thứ 19 (2026) là những sự ghi nhận đáng quý cho tập thể dự án. Dù vậy, từ quản trị AI y tế sang giáo dục di sản số, tôi luôn giữ chung một kỷ luật học thuật: không bao giờ tuyên bố vượt quá những gì thiết kế nghiên cứu của mình chứng minh được.',
              'Ngay trên poster tại Hội nghị Khoa học ĐH KHTN TP.HCM 2026, chúng tôi vạch rất rõ ranh giới bằng chứng này:',
            ],
            list: {
              items: [
                {
                  text: 'Bộ dữ liệu 1.502 học sinh là một phân tích mô tả thứ cấp trên tần suất tổng hợp từ Google Forms—các câu hỏi về nhu cầu và đánh giá trải nghiệm tách biệt nhau, không ghép cặp từng cá nhân, không có kiểm tra trước–sau (pre/post) liên kết hay phân bổ ngẫu nhiên.',
                },
                {
                  text: 'Dữ liệu này củng cố hai điều rõ ràng: nhu cầu tiếp cận di sản số của học sinh rất lớn dù mức độ quen thuộc ban đầu thấp, và cảm nhận ban đầu về học liệu rất tích cực.',
                },
                {
                  text: 'Nó không thể chứng minh quan hệ nhân quả về sự tiến bộ trong năng lực lập luận lịch sử, không tách riêng được tác động độc lập của 3D, AR hay LMS, và dự án cũng không tự nhận các chỉ số đo đạc độc lập về độ trung thực lưới 3D hay tốc độ tải thiết bị.',
                },
              ],
            },
            afterListParagraphs: [
              'Chính sự sòng phẳng đó mở ra nghiên cứu đánh giá tiếp theo rất rõ ràng: so sánh cùng một nhiệm vụ phân tích sử liệu giữa định dạng 2D và 3D, sử dụng bảng tiêu chí định sẵn, chấm điểm mù (blinded marking) và phân tích có tính đến đặc thù lớp học.',
              'Di sản văn hóa không cần công nghệ làm nó ồn ào hơn. Nó cần một thiết kế có kỷ luật—nguồn tư liệu truy xuất được, phương án dự phòng công bằng và quy trình truy vấn rõ ràng—để công nghệ biết lùi lại đúng lúc, nhường chỗ cho một thế hệ mới tự mình nhìn thật sâu vào lịch sử.',
            ],
          },
        ],
      },
      en: {
        title:
          'Heritage doesn’t need another spectacle: engineering evidence-linked 3D/AR for Hue’s Nine Dynastic Urns',
        date: '04 August 2026',
        readTime: '12 min read',
        categoryLabel: 'Digital Heritage',
        excerpt:
          'Digitizing an artifact does not, by itself, create historical understanding. Inside the design choices, survey evidence from 1,502 Hue students, and methodological honesty of LƯU NIÊN—our digital heritage ecosystem for Cửu Đỉnh.',
        pullQuote:
          'The contribution of LƯU NIÊN is a traceable path from artifact to source-based historical explanation, not the novelty of 3D technology alone.',
        sections: [
          {
            heading: 'Growing up beside bronze masterpieces nobody actually knows',
            paragraphs: [
              'If you grow up in Hue, the Nine Dynastic Urns (Cửu Đỉnh) cast under the Nguyen Dynasty are part of the cultural air you breathe—nine monumental bronze vessels carrying intricate bas-reliefs spanning geography, flora, fauna, crafts, and imperial imagery. They are practically a cast-bronze encyclopedia of nineteenth-century Vietnam.',
              'And yet, when Tran Minh Duc and I began studying how local teenagers actually encounter them at Hai Ba Trung High School in Hue, the numbers stopped us cold. Across a secondary analysis of aggregated survey responses from 1,502 students at six schools in Hue, 63.8% (958/1,502) reported having no prior awareness of the reliefs on the urns, and 71.0% (1,066/1,502) had never taken part in any related heritage activity.',
              'Over the last decade, “digital heritage” has promised to bridge that gap. Yet most projects I saw kept falling into one of two quiet traps.',
              'The first trap is technological spectacle: teams scan an artifact into a massive 3D mesh that looks stunning on a conference projector, drop it into a viewer, and declare victory—forgetting that a 3D model can make a relief visible while leaving its historical meaning completely unexplained. Without guidance, a student rotates the bronze urn for ninety seconds, says “cool,” and closes the tab. The second trap is newer and far worse: bolting an unconstrained general-purpose chatbot onto cultural exhibits so it fluently invents historical meanings whenever primary evidence is missing.',
              'When we built LƯU NIÊN (documented in two ISBN proceedings papers—Công nghệ số trong bảo tồn di sản, pp. 105–126, ISBN 978-632-607-921-0, and Di sản và chuyển đổi số, ISBN 978-604-45-4049-8—and accepted as Poster P20 at the HCMUS 15th Scientific Conference 2026), we anchored the entire project on one blunt sentence: seeing, interpreting, and justifying are distinct learning events.',
            ],
          },
          {
            heading: 'Listening to 1,502 students—and respecting classroom reality',
            paragraphs: [
              'Before locking our media pipeline, we looked closely at what those 1,502 students across six Hue schools actually told us. Low familiarity did not mean apathy—far from it. 87.1% expressed interest in new digital formats, and 94.0% (1,412/1,502) wanted digital heritage access. Asked which formats appealed to them most (with multiple selections allowed), students favored a virtual museum/3D experience (89.9%, 1,350/1,502), a digital heritage handbook (83.2%, 1,250/1,502), websites, social media, and video (81.2%, 1,220/1,502), alongside experiential activities (45.7%).',
              'What mattered just as much as demand was equity inside an ordinary Vietnamese classroom. Not every student owns an AR-capable phone with a reliable camera, and school Wi-Fi is rarely forgiving during a 45-minute period.',
              'So while our documented workflow runs from Capture → Reconstruct → Optimize → Present → Teach—preparing web- and mobile-friendly 3D models, markerless AR, a virtual museum, and short media—we refused to make AR a hard prerequisite. Every learning pathway deliberately preserves 2D photographic and teacher-projected fallback routes so a missing device or shaky connection never locks a student out of historical inquiry.',
            ],
            note: {
              label: 'Equitable Access Rule',
              content:
                'Never let hardware become the gatekeeper of cultural history. Always pair 3D and markerless AR with lawful 2D and teacher-projected alternatives.',
            },
          },
          {
            heading: 'ELLO: binding visual media to evidence instead of AI improvisation',
            paragraphs: [
              'History is an evidence discipline, not a guessing game. If a student asks what a specific river or plant relief on a bronze urn signifies, an unconstrained chatbot will happily blend half-remembered web snippets into confident Vietnamese prose—quietly filling evidentiary gaps with invented “facts.”',
              'To prevent visual immersion from drifting away from scholarship, we formalized a proposed analytical construct called the Evidence-Linked Learning Object (ELLO)—a reusable, versioned instructional unit joining subject, evidence, and pedagogy:',
            ],
            formula: {
              label: 'ELLO Construct',
              expression: 'L = (e, c, s, m, a, q, f, v)',
            },
            afterListParagraphs: [
              'Each unit binds a heritage entity (e), a historical claim (c), its source record (s), authorized media (m), a learning activity (a), an assessment rubric (q), feedback (f), and review/version metadata (v).',
              'Two governance rules sit at the heart of ELLO. First, content is published only after source, media-rights, human-review, and accessibility checks. Second, every historical claim carries both a source and an explicit epistemic status—documented, inferred, reconstructed, or unresolved. When evidence is missing, we mark it unresolved rather than letting an AI manufacture a smooth answer. In history education, showing students where verified scholarship stops is not a UX flaw; it is how historical thinking actually begins.',
            ],
          },
          {
            heading: 'From passive spinning to a five-step inquiry loop',
            paragraphs: [
              'How does ELLO actually feel in class? Take an illustrative scenario: How can a river motif on a bronze urn be identified and interpreted using a historical source?',
              'Rather than rewarding rapid clicking, badge collecting, or passive 3D rotation, we structured our LMS lessons and teacher-mediated activities around five deliberate steps:',
            ],
            list: {
              ordered: true,
              items: [
                {
                  lead: 'Orient:',
                  text: 'Introduce the specific urn and frame the historical question.',
                },
                {
                  lead: 'Observe:',
                  text: 'Locate the motif on the bronze surface and describe strictly what is directly visible.',
                },
                {
                  lead: 'Check Sources:',
                  text: 'Cross-check the proposed identification against a documented historical account or map.',
                },
                {
                  lead: 'Justify:',
                  text: 'Write a short explanation citing the source—explicitly distinguishing direct observation from inference and acknowledging uncertainty.',
                },
                {
                  lead: 'Revise:',
                  text: 'Use rubric criteria and teacher feedback to sharpen the claim.',
                },
              ],
            },
            afterListParagraphs: [
              'Across the reported experience appraisals (n = 1,502), reception was strongly positive: 94.1% (1,413/1,502) found the content interesting, 94.5% rated their self-assessed understanding clear, 95.5% (1,435/1,502) perceived school implementation as effective, 97.5% (1,465/1,502) felt their heritage awareness improved, and 92.7% were willing to share the resources.',
            ],
          },
          {
            heading: 'Drawing the line of honesty—what our data proves and what comes next',
            paragraphs: [
              'Winning First Prize at both the Hue City Science & Engineering Fair (2025–2026) and the 19th Hue City Youth and Children’s Innovation Contest (2026) meant a great deal to our team. Still, whether I am working on health-AI governance or digital heritage, the same rule of intellectual honesty applies: never claim more than your study design can support.',
              'In our HCMUS 2026 poster, we drew that evidence boundary explicitly:',
            ],
            list: {
              items: [
                {
                  text: 'The 1,502-student questionnaire dataset is a descriptive secondary analysis of aggregated Google Forms frequencies—separate needs and appraisal items without individual respondent matching, linked pre/post tests, or random assignment.',
                },
                {
                  text: 'It demonstrates strong student demand for digital access despite low baseline familiarity, alongside favorable perceptions of the resources.',
                },
                {
                  text: 'It cannot prove causal improvement in historical reasoning, isolate the individual effect of 3D versus AR versus the LMS, or serve as independently timed mesh-fidelity or loading-time benchmarks.',
                },
              ],
            },
            afterListParagraphs: [
              'That clarity directly shapes our next evaluative study: comparing equivalent source-based inquiry tasks across 2D and 3D representations using a pre-specified rubric, blinded marking, and classroom-aware analysis.',
              'Cultural heritage does not need technology to make it louder. It needs disciplined design—traceable sources, accessible fallbacks, and structured inquiry—to step quietly out of the way so a new generation can look closely for themselves.',
            ],
          },
        ],
      },
    },
  },
];
