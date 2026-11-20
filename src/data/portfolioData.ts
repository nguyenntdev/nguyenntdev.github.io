import type { Localized } from '../utils/i18n';
export {
  BLOG_POSTS,
  type BlogCategory,
  type BlogEpigraph,
  type BlogListItem,
  type BlogPost,
  type BlogPostLocaleContent,
  type BlogSectionBlock,
} from './blogData';

export type PerspectiveLens = 'all' | 'research' | 'hospitality';
export type ProjectCategory = 'all' | 'ai-research' | 'edtech-heritage' | 'hospitality-systems';
export type PublicationTrack = 'all' | 'health-ai' | 'digital-heritage';

export interface ProjectMetric {
  value: Localized<string>;
  label: Localized<string>;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: Localized<string>;
  period: Localized<string>;
  role: Localized<string>;
  location: Localized<string>;
  category: Exclude<ProjectCategory, 'all'>;
  lenses: Exclude<PerspectiveLens, 'all'>[];
  hospitalityPriority: number;
  researchPriority: number;
  featuredSpan: 'wide' | 'standard';
  summary: Localized<string>;
  challenge: Localized<string>;
  solution: Localized<string>;
  outcomes: Localized<string[]>;
  metrics: ProjectMetric[];
  stack: string[];
  disclaimer?: Localized<string>;
  links: { label: Localized<string>; href: string }[];
  interactiveType?: 'glhs-simulator' | 'heritage-metrics' | 'sat-engine' | 'hotel-crm' | 'oj-scale';
}

export interface PressFeature {
  id: string;
  outlet: string;
  year: string;
  title: string;
  summary: Localized<string>;
  url: string;
}

export interface PublicationItem {
  id: string;
  year: string;
  venue: string;
  statusLabel: Localized<string>;
  authorship: Localized<string>;
  title: string;
  authors: string;
  details: Localized<string>;
  track: Exclude<PublicationTrack, 'all'>;
  bibtexKey: string;
  note?: string;
}

export interface ExperienceItem {
  id: string;
  organization: Localized<string>;
  role: Localized<string>;
  period: Localized<string>;
  location: Localized<string>;
  group: 'experience' | 'education' | 'community';
  description: Localized<string>;
  highlights: Localized<string[]>;
}

export interface HonorItem {
  id: string;
  year: string;
  award: Localized<string>;
  event: Localized<string>;
  tier: 'headline' | 'provincial';
}

export interface CertificationGroup {
  domain: Localized<string>;
  items: string[];
}

export interface SkillGroup {
  category: Localized<string>;
  items: Localized<string[]>;
}

export const PROFILE = {
  name: {
    vi: 'Nguyễn Ngọc Thiện',
    en: 'Nguyen Ngoc Thien',
  } as Localized<string>,
  location: {
    vi: 'Huế, Việt Nam',
    en: 'Hue, Vietnam',
  } as Localized<string>,
  email: 'kakangocthien109@gmail.com',
  phone: '+84 94 126 5679',
  githubUrl: 'https://github.com/nguyenntdev',
  githubHandle: 'github.com/nguyenntdev',
  linkedinUrl: 'https://linkedin.com/in/nguyenntdev',
  linkedinHandle: 'linkedin.com/in/nguyenntdev',
  facebookUrl: 'https://web.facebook.com/nguyennt.dev/',
  facebookHandle: 'facebook.com/nguyennt.dev',
  vnexpressUrl:
    'https://vnexpress.net/nam-sinh-lop-7-thuc-hien-nhieu-du-an-cong-nghe-4378270.html',
  portraitPath: '/assets/aistudio/HQV_3398_b68e4c23.jpg',
  portraitCaption: {
    vi: 'GDG DevFest MienTrung 2025 · Top 20 Chung kết AI Hackathon',
    en: 'GDG DevFest MienTrung 2025 · Top 20 AI Hackathon Finalist',
  } as Localized<string>,
  researchCvPath:
    '/assets/aistudio/Nguyen_Ngoc_Thien_Research_CS_AI_Scholarship_CV_Credentials_2026_66835f69.pdf',
  hospitalityCvPath:
    '/assets/aistudio/Nguyen_Ngoc_Thien_Luxury_Hospitality_Business_CV_Credentials_2026_1d5c7547.pdf',
  hero: {
    kicker: {
      vi: 'Huế, Việt Nam · Nghiên cứu sinh trẻ, Nhà sáng lập & Kỹ sư AI',
      en: 'Hue, Vietnam · Student Researcher, Founder & AI Engineer',
    },
    headline: {
      vi: 'Xây dựng hệ thống AI đáng tin cậy, ký ức văn hóa và sản phẩm vị nhân sinh.',
      en: 'Building trustworthy AI, cultural memory, and human-centered products.',
    },
    lead: {
      vi: 'Học sinh nghiên cứu và nhà sáng lập trẻ làm việc giao thoa giữa quản trị AI y tế có trách nhiệm, bảo tồn di sản số và chuyển đổi số cho khách sạn boutique 4 sao. Năm bài báo & poster khoa học được chấp nhận, nhiều nền tảng phục vụ hàng nghìn người học và kinh nghiệm xây dựng CRM AI thực tế.',
      en: 'High-school researcher and student founder working across responsible health-AI governance, digital heritage preservation, and luxury boutique hospitality transformation. Five accepted papers and posters, shipped platforms serving thousands of learners, and hands-on CRM engineering for 4-star hospitality operations.',
    },
  },
  proofMetrics: [
    {
      value: { vi: '5', en: '5' },
      label: { vi: 'Bài báo & Poster được chấp nhận', en: 'Accepted Papers & Posters' },
      detail: {
        vi: 'HEALTHINF 2027 · FMC · HCMUS · 2 Kỷ yếu ISBN',
        en: 'HEALTHINF 2027 · FMC · HCMUS · 2 ISBN Books',
      },
    },
    {
      value: { vi: '5.000+', en: '5,000+' },
      label: { vi: 'Học sinh được khảo sát', en: 'Students Surveyed' },
      detail: {
        vi: 'Hệ sinh thái di sản LƯU NIÊN · 300+ học sinh thí điểm',
        en: 'LƯU NIÊN Heritage Ecosystem · 300+ Piloted',
      },
    },
    {
      value: { vi: '93.447', en: '93,447' },
      label: { vi: 'Lượt nộp bài đã chấm', en: 'Code Submissions Judged' },
      detail: {
        vi: 'Nền tảng SQRTOJ · 4.167 người dùng · 413 bài tập',
        en: 'SQRTOJ Platform · 4,167 Users · 413 Problems',
      },
    },
    {
      value: { vi: '205,56M', en: '205.56M' },
      label: { vi: 'VNĐ tài trợ R&D hiện vật', en: 'VND In-Kind R&D Support' },
      detail: {
        vi: 'Project CLARA · Tín dụng API & hạ tầng đám mây',
        en: 'Project CLARA · Documented API & Infra Credits',
      },
    },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-clara',
    index: '01',
    title: 'Project CLARA / CLARA-Care',
    subtitle: {
      vi: 'Quản trị AI y tế theo thời gian & Phê duyệt commit gắn snapshot',
      en: 'Longitudinal Health-AI Governance & Snapshot-Bound Commit Admission',
    },
    period: { vi: '2025–Hiện tại', en: '2025–Present' },
    role: { vi: 'Nhà sáng lập, Trưởng nhóm & Phụ trách AI', en: 'Founder, Team Lead & AI Lead' },
    location: { vi: 'Từ xa', en: 'Remote' },
    category: 'ai-research',
    lenses: ['research', 'hospitality'],
    researchPriority: 1,
    hospitalityPriority: 4,
    featuredSpan: 'wide',
    summary: {
      vi: 'Thiết kế hợp đồng quản trị GLHS tại ranh giới đọc–ghi cho AI y tế theo thời gian—ràng buộc mọi thao tác ghi trạng thái với định danh snapshot (THSS), giới hạn công bố dữ liệu theo mục đích và đồng thuận tường minh, đồng thời giữ trọn nguồn gốc bằng chứng.',
      en: 'Designed the GLHS governance contract across the read-to-write boundary for longitudinal health AI—binding state writes to snapshot versions (THSS), scoping disclosures by explicit purpose and consent, and preserving full evidence provenance.',
    },
    challenge: {
      vi: 'Khi agent AI cập nhật hồ sơ sức khỏe bất đồng bộ theo thời gian, snapshot cũ, kết quả xét nghiệm về muộn và việc công bố dữ liệu ngoài phạm vi đồng thuận có thể âm thầm làm sai lệch lịch sử bệnh án hoặc rò rỉ thông tin nhạy cảm.',
      en: 'When AI agents update longitudinal health records asynchronously, stale snapshots, late-arriving evidence, and unscoped disclosures can silently corrupt patient histories or leak sensitive facts across contexts.',
    },
    solution: {
      vi: 'Hình thức hóa giao thức phê duyệt commit gắn snapshot (THSS → GST) chạy hoàn toàn trên đường dẫn tất định không dùng LLM: kiểm tra phiên bản trạng thái, chính sách, đồng thuận, mã băm nhất quán và tập phụ thuộc bằng chứng trước khi cho phép ghi.',
      en: 'Formulated a deterministic Snapshot-Bound Commit Admission protocol (THSS → GST) off the LLM path—verifying state, policy, and consent versions, SHA-256 snapshot digest, and evidence dependencies before admitting writes.',
    },
    outcomes: {
      vi: [
        'Đạt 112/112 ca kiểm thử tuân thủ hợp đồng tất định và 50/50 kịch bản tranh chấp ghi đồng thời trên PostgreSQL 16.14 (310 lượt ghi, 0 lỗi CSDL).',
        'Trong đánh giá tổng hợp hai mô hình (64 ca, 1.152 lượt đánh giá), Strict THSS đạt 64/64 (100%) trên Gemini và 63/64 (98,44%) trên Claude; vượt qua 68/68 ca bằng chứng muộn và 100/100 ca xung đột ở bộ đánh giá FMC.',
        'Được chấp nhận là Bài báo ngắn tác giả độc lập #97 tại HEALTHINF 2027 và Poster P4 tại FMC 2026.',
        'Nhận 205,56 triệu VNĐ tài trợ R&D dạng hiện vật có chứng từ (tín dụng AI API và hạ tầng đám mây, không phải tiền mặt).',
      ],
      en: [
        'Passed 112/112 deterministic contract conformance cells and 50/50 PostgreSQL 16.14 concurrency races (310 writer attempts, zero DB errors).',
        'On prospective two-model synthetic evaluations (64 cases, 1,152 cells), Strict THSS achieved 64/64 (100%) on Gemini and 63/64 (98.44%) on Claude; passed 68/68 late-evidence and 100/100 conflict cases in earlier GLHS benchmarks.',
        'Accepted as sole-authored Short Paper #97 at HEALTHINF 2027 and Poster P4 at FMC 2026.',
        'Secured VND 205.56 million in documented in-kind R&D sponsorship (AI API credits and cloud infrastructure, not cash).',
      ],
    },
    metrics: [
      { value: { vi: '112/112', en: '112/112' }, label: { vi: 'Ca kiểm thử hợp đồng', en: 'Contract cells passed' } },
      { value: { vi: '50/50', en: '50/50' }, label: { vi: 'Tranh chấp ghi PostgreSQL', en: 'PostgreSQL races clean' } },
      { value: { vi: '64/64', en: '64/64' }, label: { vi: 'Strict THSS (Gemini)', en: 'Strict THSS (Gemini)' } },
      { value: { vi: '63/64', en: '63/64' }, label: { vi: 'Strict THSS (Claude)', en: 'Strict THSS (Claude)' } },
    ],
    stack: ['Python', 'PostgreSQL 16', 'Governance Contracts', 'Provenance Graphs', 'Synthetic Eval'],
    disclaimer: {
      vi: 'Đánh giá trên bộ dữ liệu tổng hợp; không phải kiểm chứng lâm sàng hoặc chứng nhận pháp lý.',
      en: 'Evaluated on synthetic health-AI benchmarks; not clinically validated or legally certified.',
    },
    links: [{ label: { vi: 'Hồ sơ GitHub', en: 'GitHub Profile' }, href: 'https://github.com/nguyenntdev' }],
    interactiveType: 'glhs-simulator',
  },
  {
    id: 'luu-nien',
    index: '02',
    title: 'LƯU NIÊN',
    subtitle: {
      vi: 'Hệ sinh thái học tập di sản số cho Cửu Đỉnh Huế',
      en: 'Digital Heritage Learning Ecosystem for Hue’s Nine Dynastic Urns',
    },
    period: { vi: '2025–2026', en: '2025–2026' },
    role: { vi: 'Đồng tác giả & Trưởng nhóm Kỹ thuật', en: 'Project Author & Technical Lead' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    category: 'edtech-heritage',
    lenses: ['research', 'hospitality'],
    researchPriority: 2,
    hospitalityPriority: 3,
    featuredSpan: 'standard',
    summary: {
      vi: 'Nền tảng bảo tồn văn hóa và giáo dục di sản kết nối bảo tàng ảo 3D, trải nghiệm AR không thẻ đánh dấu, hệ thống LMS, đơn vị học liệu gắn bằng chứng (ELLO) và truy vấn sử liệu có trích dẫn cho Cửu Đỉnh Huế.',
      en: 'An immersive cultural-preservation platform uniting a 3D virtual museum, markerless mobile AR, an LMS, Evidence-Linked Learning Objects (ELLO), and source-grounded historical inquiry on Hue’s Nine Dynastic Urns (Cửu Đỉnh).',
    },
    challenge: {
      vi: 'Các bảo vật quốc gia như Cửu Đỉnh Huế thường xa cách về không gian hoặc chỉ xuất hiện qua ảnh sách giáo khoa thụ động; phân tích khảo sát từ 1.502 học sinh ở 6 trường tại Huế cho thấy 63,8% chưa từng biết đến các hình tượng chạm nổi.',
      en: 'National cultural treasures like Hue’s Nine Dynastic Urns remain physically distant or passively presented in textbooks; secondary analysis of 1,502 students across six Hue schools showed 63.8% had no prior awareness of the bronze reliefs.',
    },
    solution: {
      vi: 'Xây dựng quy trình số hóa 3D/AR tối ưu cho web và di động song hành với phương án dự phòng 2D công bằng, kết hợp mô hình ELLO và vòng lặp truy vấn 5 bước giúp học sinh quan sát hiện vật và lập luận dựa trên nguồn sử liệu.',
      en: 'Engineered optimized web/mobile 3D & markerless AR paired with equitable 2D classroom fallbacks, Evidence-Linked Learning Objects (ELLO), and a five-step inquiry loop anchored to verified historical sources.',
    },
    outcomes: {
      vi: [
        'Khảo sát rộng hơn 5.000 học sinh, phân tích mô tả thứ cấp bộ dữ liệu 1.502 học sinh tại 6 trường ở Huế (94,0% mong muốn tiếp cận di sản số) và thí điểm cùng 300+ học sinh.',
        'Đạt Giải Nhất Hội thi KHKT TP Huế (2025–2026) và Giải Nhất Cuộc thi Sáng tạo Thanh thiếu niên Nhi đồng TP Huế lần thứ 19 (2026).',
        'Công bố trong hai kỷ yếu có chỉ số ISBN (2026) và được chấp nhận Poster P20 tại Hội nghị Khoa học lần thứ 15 ĐH KHTN ĐHQG-HCM.',
      ],
      en: [
        'Surveyed 5,000+ students broadly, conducted descriptive secondary analysis on 1,502 students across six Hue schools (94.0% wanting digital access), and piloted modules with 300+ learners.',
        'Awarded First Prize at Hue City Science & Engineering Fair (2025–26) and First Prize at 19th Hue Youth Creativity Contest (2026).',
        'Published in two ISBN-indexed proceedings volumes (2026) and accepted as Poster P20 at HCMUS 15th Scientific Conference.',
      ],
    },
    metrics: [
      { value: { vi: '5.000+', en: '5,000+' }, label: { vi: 'Học sinh khảo sát', en: 'Students surveyed' } },
      { value: { vi: '1.502', en: '1,502' }, label: { vi: 'Mẫu phân tích 6 trường', en: '6-school study sample' } },
      { value: { vi: '2×', en: '2×' }, label: { vi: 'Giải Nhất cấp TP', en: 'First Prizes won' } },
    ],
    stack: ['Three.js / WebGL', 'WebAR', 'ELLO / Source-Grounded RAG', 'React', 'LMS'],
    links: [{ label: { vi: 'Hồ sơ GitHub', en: 'GitHub Profile' }, href: 'https://github.com/nguyenntdev' }],
    interactiveType: 'heritage-metrics',
  },
  {
    id: 'thong-dong-quan',
    index: '03',
    title: 'Thong Dong Quán Boutique Hotel',
    subtitle: {
      vi: 'Hệ thống AI CRM lấy con người làm trọng tâm cho khách sạn boutique 4 sao',
      en: 'Human-in-the-Loop AI Guest CRM & 4-Star Hospitality Transformation',
    },
    period: { vi: '15/06–15/08/2026', en: '15 Jun.–15 Aug. 2026' },
    role: { vi: 'Thực tập sinh AI & Chuyển đổi số', en: 'AI & Digital Transformation Intern' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    category: 'hospitality-systems',
    lenses: ['hospitality', 'research'],
    researchPriority: 5,
    hospitalityPriority: 1,
    featuredSpan: 'standard',
    summary: {
      vi: 'Đề xuất và xây dựng hệ thống AI CRM nội bộ cho khách sạn boutique 4 sao tại Huế—hợp nhất hồ sơ khách hàng, đường ống theo dõi yêu cầu, bản nháp phản hồi do nhân viên kiểm duyệt và công cụ hỗ trợ chiến dịch marketing theo mùa.',
      en: 'Proposed and built an AI-integrated CRM tailored for a 4-star boutique hotel in Hue—structuring guest profiles, enquiry tracking, follow-ups, staff-reviewed draft replies, and AI-assisted seasonal marketing campaigns.',
    },
    challenge: {
      vi: 'Khách sạn boutique sống bằng sự ấm áp và trí nhớ cá nhân hóa, nhưng yêu cầu của khách, sở thích phòng và lịch theo dõi lại thường bị phân tán qua nhiều kênh tin nhắn, ca trực và bảng tính rời rạc.',
      en: 'Boutique hotels thrive on warmth and personal memory, yet guest enquiries, stay preferences, and follow-ups often fragment across messaging channels, shift handoffs, and manual spreadsheets.',
    },
    solution: {
      vi: 'Thiết kế hệ thống CRM lấy nhân viên làm trung tâm: gom toàn bộ bối cảnh khách về một hồ sơ thống nhất và sinh bản nháp ngắn gọn dừng trước nút gửi để lễ tân chỉnh sửa, duyệt trong vài giây mà không mất đi giọng điệu hiếu khách.',
      en: 'Architected a human-in-the-loop hospitality CRM that centralizes guest dossiers and drafts context-aware responses for staff review, cutting drafting latency without surrendering refined boutique tone.',
    },
    outcomes: {
      vi: [
        'Hợp nhất hồ sơ khách hàng, chuỗi yêu cầu và trạng thái theo dõi vào một quy trình liền mạch giữa các ca trực.',
        'Đưa vào lớp bản nháp AI có nhân viên duyệt giúp giảm thao tác hành chính lặp lại nhưng vẫn giữ trọn chất hiếu khách thủ công.',
        'Ứng dụng công cụ AI hỗ trợ soạn nội dung marketing theo mùa, lịch truyền thông và tổng hợp xu hướng yêu cầu của khách.',
      ],
      en: [
        'Unified guest profiles, enquiry pipelines, and scheduled follow-ups into one structured cross-shift workflow.',
        'Introduced staff-reviewed AI draft replies to preserve human hospitality standards while reducing repetitive admin.',
        'Applied AI tooling to seasonal marketing content, campaign preparation, and cross-team coordination.',
      ],
    },
    metrics: [
      { value: { vi: '4 sao', en: '4-Star' }, label: { vi: 'Môi trường boutique', en: 'Boutique hospitality' } },
      { value: { vi: 'Nhân viên duyệt', en: 'Human-in-Loop' }, label: { vi: 'Cơ chế phản hồi', en: 'Staff-reviewed replies' } },
      { value: { vi: 'Toàn trình', en: 'End-to-End' }, label: { vi: 'CRM & chiến dịch', en: 'CRM & campaign flow' } },
    ],
    stack: ['Guest CRM', 'TypeScript', 'AI Workflows', 'Hospitality Marketing', 'Automation'],
    links: [{ label: { vi: 'CV Lưu trú & Kinh doanh', en: 'Hospitality CV' }, href: PROFILE.hospitalityCvPath }],
    interactiveType: 'hotel-crm',
  },
  {
    id: 'the-clara-sat',
    index: '04',
    title: 'The Clara SAT',
    subtitle: {
      vi: 'Nền tảng luyện thi SAT đa ngôn ngữ tích hợp AI & PWA ngoại tuyến',
      en: 'Multilingual AI-Powered SAT Learning Platform & Offline PWA',
    },
    period: { vi: '2026–Hiện tại', en: '2026–Present' },
    role: { vi: 'Nhà sáng lập & Lập trình viên chính', en: 'Founder & Lead Developer' },
    location: { vi: 'Từ xa', en: 'Remote' },
    category: 'edtech-heritage',
    lenses: ['hospitality', 'research'],
    researchPriority: 3,
    hospitalityPriority: 2,
    featuredSpan: 'standard',
    summary: {
      vi: 'Sáng lập và vận hành nền tảng học SAT bằng AI phục vụ 210 người học (tháng 11/2026) với lộ trình cá nhân hóa 14 ngày, gia sư kiểu Socrates, dự đoán điểm SAT có giải thích, ôn tập giãn cách SM-2 và ứng dụng PWA hỗ trợ 8 ngôn ngữ chạy được ngoại tuyến.',
      en: 'Founded and launched a live AI learning venture serving 210 learners (Nov. 2026) with personalized 14-day study plans, Socratic tutoring, explainable SAT score prediction, SM-2 spaced repetition, and an 8-language offline PWA.',
    },
    challenge: {
      vi: 'Luyện thi SAT chất lượng cao thường tốn kém và nhiều công cụ AI tạo sinh dễ suy diễn sai đáp án hoặc tê liệt khi học sinh ôn bài ở nơi kết nối mạng không ổn định.',
      en: 'High-quality SAT coaching is expensive and often relies on brittle generative outputs that hallucinate answers or fail when students study without reliable connectivity.',
    },
    solution: {
      vi: 'Xây dựng các tính năng AI bám sát dữ liệu có lớp kiểm tra đáp án độc lập và cơ chế dự phòng tất định khi không có kết nối mô hình, đóng gói thành ứng dụng PWA ngoại tuyến hỗ trợ 8 ngôn ngữ.',
      en: 'Engineered data-grounded AI features protected by independent answer verification checks and deterministic fallbacks when model output is unavailable, packaged inside an accessible 8-language offline-capable PWA.',
    },
    outcomes: {
      vi: [
        'Phục vụ 210 người học đang hoạt động (tính đến tháng 11/2026) trên 8 ngôn ngữ giao diện.',
        'Kết hợp đề thi thử thích ứng, chẩn đoán điểm yếu dựa trên bằng chứng, ôn lỗi sai và thẻ ghi nhớ SM-2.',
        'Áp dụng chốt kiểm định đáp án độc lập và cơ chế dự phòng mượt mà khi học ngoại tuyến.',
      ],
      en: [
        'Serving 210 active learners as of November 2026 across 8 supported languages.',
        'Combines adaptive mock exams, evidence-based weakness diagnosis, mistake review, and SM-2 flashcards.',
        'Enforces validation safeguards with independent answer checks and graceful offline fallbacks.',
      ],
    },
    metrics: [
      { value: { vi: '210', en: '210' }, label: { vi: 'Người học (11/2026)', en: 'Users (Nov. 2026)' } },
      { value: { vi: '8', en: '8' }, label: { vi: 'Ngôn ngữ hỗ trợ', en: 'Languages supported' } },
      { value: { vi: '14 ngày', en: '14-Day' }, label: { vi: 'Lộ trình thích ứng', en: 'Adaptive study plans' } },
    ],
    stack: ['React', 'TypeScript', 'Offline PWA', 'SM-2 Algorithm', 'Validated AI Tutoring'],
    links: [{ label: { vi: 'Hồ sơ GitHub', en: 'GitHub Profile' }, href: 'https://github.com/nguyenntdev' }],
    interactiveType: 'sat-engine',
  },
  {
    id: 'sqrt-oj',
    index: '05',
    title: 'SQRT Programming Club / SQRTOJ',
    subtitle: {
      vi: 'Hệ thống chấm bài lập trình thi đấu, Linux sandbox & cố vấn cộng đồng',
      en: 'Competitive Programming Platform, Linux Sandbox & Peer Mentorship',
    },
    period: { vi: '2023–Hiện tại', en: '2023–Present' },
    role: { vi: 'Đồng điều hành; Trưởng ban Công nghệ & Tài chính', en: 'Co-Lead; Head of Technology & Finance' },
    location: { vi: 'Từ xa', en: 'Remote' },
    category: 'hospitality-systems',
    lenses: ['research', 'hospitality'],
    researchPriority: 4,
    hospitalityPriority: 5,
    featuredSpan: 'wide',
    summary: {
      vi: 'Đồng điều hành hệ thống chấm bài trực tuyến SQRT Online Judge (SQRTOJ) và cộng đồng lập trình thi đấu học sinh đạt 4.167 người dùng, 413 bài tập tuyển chọn và 93.447 lượt nộp bài—phụ trách bảo mật Linux sandbox, hạ tầng, ngân sách và vận hành kỳ thi.',
      en: 'Co-lead SQRT Online Judge (SQRTOJ) and a student competitive-programming community spanning 4,167 users, 413 curated problems, and 93,447 judged submissions—overseeing Linux sandbox security, infrastructure, budgets, and contest operations.',
    },
    challenge: {
      vi: 'Tổ chức các kỳ thi thuật toán thời gian thực cho hàng nghìn học sinh đòi hỏi lớp cô lập thực thi mã nguồn chặt chẽ trước đầu vào bất thường, độ ổn định hạ tầng cao và cân đối ngân sách câu lạc bộ bền vững.',
      en: 'Running real-time algorithmic contests for thousands of students requires airtight code-execution isolation against adversarial inputs, reliable infrastructure uptime, and sustainable club budgeting.',
    },
    solution: {
      vi: 'Duy trì sandbox thực thi Linux tăng cường bảo mật, điều phối hạ tầng chấm bài tự động, quản lý tài chính câu lạc bộ và hỗ trợ các bạn học sinh ôn luyện các kỳ thi tin học khu vực và quốc gia.',
      en: 'Maintain hardened Linux execution sandboxes, orchestrate contest infrastructure and automated judging pipelines, manage club finances, and mentor peers across regional and national informatics tracks.',
    },
    outcomes: {
      vi: [
        'Mở rộng lên 4.167 người dùng đăng ký, 413 bài tập thuật toán và 93.447 lượt nộp bài đã chấm (tính đến hiện tại).',
        'Cân bằng giữa độ tin cậy hệ thống (bảo mật Linux sandbox, Docker) với điều phối tài chính và tổ chức kỳ thi.',
        'Đặt nền móng kỹ thuật hệ thống song hành với các dự án di sản số và nghiên cứu quản trị AI sau này.',
      ],
      en: [
        'Scaled to 4,167 registered users, 413 algorithmic problems, and 93,447 total judged code submissions (as of today).',
        'Balanced technical systems reliability (Linux sandbox security, Docker) with financial coordination and operations.',
        'Built systems-engineering foundations that directly informed later digital heritage and AI governance research.',
      ],
    },
    metrics: [
      { value: { vi: '4.167', en: '4,167' }, label: { vi: 'Người dùng đăng ký', en: 'Registered users' } },
      { value: { vi: '413', en: '413' }, label: { vi: 'Bài tập tuyển chọn', en: 'Curated problems' } },
      { value: { vi: '93.447', en: '93,447' }, label: { vi: 'Lượt nộp bài', en: 'Code submissions' } },
    ],
    stack: ['Linux Sandbox', 'Docker', 'Python / C++', 'System Architecture', 'Financial Coordination'],
    links: [{ label: { vi: 'Hồ sơ GitHub', en: 'GitHub Profile' }, href: 'https://github.com/nguyenntdev' }],
    interactiveType: 'oj-scale',
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'healthinf-2027',
    year: '2027',
    venue: 'HEALTHINF 2027',
    statusLabel: { vi: 'Bài báo ngắn #97 được chấp nhận', en: 'Accepted Short Paper #97' },
    authorship: { vi: 'Tác giả độc lập', en: 'Sole Author' },
    title:
      'Snapshot-Bound Commit Admission for Longitudinal Health AI: A Governance Contract Across the Read-to-Write Boundary',
    authors: 'Nguyen Ngoc Thien',
    details: {
      vi: 'Tháng 2/2027 · Chờ xuất bản kỷ yếu',
      en: 'Feb. 2027 · Proceedings publication pending',
    },
    track: 'health-ai',
    bibtexKey: 'nguyen2027snapshot',
  },
  {
    id: 'fmc-2026',
    year: '2026',
    venue: 'FMC 2026',
    statusLabel: { vi: 'Poster P4 được chấp nhận', en: 'Accepted Poster P4' },
    authorship: { vi: 'Tác giả độc lập', en: 'Sole Author' },
    title: 'GLHS: Kiểm soát an toàn khi AI cập nhật hồ sơ sức khỏe',
    authors: 'Nguyen Ngoc Thien',
    details: {
      vi: 'Quản trị AI y tế · Đánh giá tổng hợp; chưa kiểm chứng lâm sàng',
      en: 'Health AI governance · Synthetic evaluation; no clinical validation',
    },
    track: 'health-ai',
    bibtexKey: 'nguyen2026glhs',
  },
  {
    id: 'hcmus-2026',
    year: '2026',
    venue: 'HCMUS 15th Scientific Conference',
    statusLabel: { vi: 'Poster P20 được chấp nhận', en: 'Accepted Poster P20' },
    authorship: { vi: 'Đồng tác giả', en: 'Co-Author' },
    title: 'LƯU NIÊN: Linking Historical Evidence, Immersive Media, and Inquiry in Digital Heritage Education',
    authors: 'Tran Minh Duc, Nguyen Ngoc Thien',
    details: {
      vi: 'ĐHQG-HCM · 13–14/11/2026',
      en: 'VNU-HCM · 13–14 Nov. 2026',
    },
    track: 'digital-heritage',
    bibtexKey: 'tran2026luunien',
  },
  {
    id: 'cuu-dinh-2026',
    year: '2026',
    venue: 'Công nghệ số trong bảo tồn di sản',
    statusLabel: { vi: 'Bài báo kỷ yếu đã xuất bản', en: 'Published Proceedings Paper' },
    authorship: { vi: 'Đồng tác giả', en: 'Co-Author' },
    title:
      'Giải pháp số hóa Cửu Đỉnh và tối ưu hiển thị tương tác 3D/AR trên nền tảng web và thiết bị di động',
    authors: 'Nguyen Dac Quang Minh, Tran Minh Duc, Nguyen Ngoc Thien',
    details: {
      vi: 'tr. 105–126 · ISBN 978-632-607-921-0',
      en: 'pp. 105–126 · ISBN 978-632-607-921-0',
    },
    track: 'digital-heritage',
    bibtexKey: 'nguyen2026cuudinh',
  },
  {
    id: 'di-san-2026',
    year: '2026',
    venue: 'Di sản và chuyển đổi số',
    statusLabel: { vi: 'Bài báo kỷ yếu đã xuất bản', en: 'Published Proceedings Paper' },
    authorship: { vi: 'Đồng tác giả', en: 'Co-Author' },
    title:
      'Tích hợp giáo dục di sản và công nghệ số trong đổi mới phương pháp dạy học Lịch sử ở trường phổ thông',
    authors: 'Nguyen Tat Thang, Tran Minh Duc, Nguyen Ngoc Thien',
    details: {
      vi: 'tr. 419 trở đi · ISBN 978-604-45-4049-8',
      en: 'p. 419 ff. · ISBN 978-604-45-4049-8',
    },
    track: 'digital-heritage',
    bibtexKey: 'nguyen2026disan',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'inseclab',
    organization: {
      vi: 'Phòng thí nghiệm An toàn Thông tin (InSecLab), UIT – ĐHQG-HCM',
      en: 'Information Security Laboratory (InSecLab), UIT – VNU-HCM',
    },
    role: {
      vi: 'Thành viên nghiên cứu · Hướng dẫn: ThS. Nguyễn Hữu Quyền',
      en: 'Student Researcher · Supervisor: MSc. Nguyen Huu Quyen',
    },
    period: { vi: 'Đang tham gia', en: 'Ongoing' },
    location: { vi: 'TP. Hồ Chí Minh, Việt Nam', en: 'Ho Chi Minh City, Vietnam' },
    group: 'experience',
    description: {
      vi: 'Nghiên cứu về AI ứng dụng, học máy, học liên kết (federated learning) và an toàn thông tin, tập trung vào các hệ thống hiệu quả và đáng tin cậy.',
      en: 'Conducting student research across applied AI, machine learning, federated learning, and cybersecurity with an emphasis on efficient, trustworthy systems.',
    },
    highlights: {
      vi: ['AI ứng dụng & Học liên kết', 'An toàn thông tin & Học máy thực tiễn'],
      en: ['Applied AI & Federated Learning', 'Cybersecurity & Practical ML'],
    },
  },
  {
    id: 'thong-dong-exp',
    organization: {
      vi: 'Thong Dong Quán Boutique Hotel (4 sao)',
      en: 'Thong Dong Quán Boutique Hotel (4-Star)',
    },
    role: {
      vi: 'Thực tập sinh AI & Chuyển đổi số',
      en: 'AI & Digital Transformation Intern',
    },
    period: { vi: '15/06–15/08/2026', en: '15 Jun.–15 Aug. 2026' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    group: 'experience',
    description: {
      vi: 'Đề xuất và xây dựng hệ thống AI CRM quản lý hồ sơ khách hàng, yêu cầu, lịch theo dõi và bản nháp phản hồi do nhân viên duyệt; ứng dụng AI cho nội dung marketing và điều phối nội bộ.',
      en: 'Proposed and built an AI-integrated guest CRM for enquiries, records, follow-ups, and staff-reviewed replies; applied AI to hospitality marketing content and internal workflow coordination.',
    },
    highlights: {
      vi: ['AI Guest CRM', 'Vận hành khách sạn Boutique', 'Tự động hóa Marketing'],
      en: ['AI Guest CRM', 'Boutique Service Operations', 'Marketing Automation'],
    },
  },
  {
    id: 'fct-club',
    organization: {
      vi: 'Câu lạc bộ Tài năng CNTT FPT Software (FCT Club)',
      en: 'FPT Software Computer Talents Club (FCT Club)',
    },
    role: {
      vi: 'Thành viên – Đào tạo kỹ thuật & Học tập ứng dụng',
      en: 'Member – Technical Training & Applied Learning',
    },
    period: { vi: '2022–2024', en: '2022–2024' },
    location: { vi: 'Từ xa / Việt Nam', en: 'Remote / Vietnam' },
    group: 'experience',
    description: {
      vi: 'Hoàn thành các khóa MOOC kỹ thuật phần mềm, hội thảo chuyên môn, đánh giá lập trình, hackathon, cố vấn và đào tạo định hướng thực tập.',
      en: 'Completed software-engineering MOOCs, technical workshops, coding assessments, hackathons, mentorship, and internship-oriented training.',
    },
    highlights: {
      vi: ['Hội thảo phần mềm', 'Hackathon & Cố vấn chuyên môn'],
      en: ['Software Workshops', 'Hackathons & Mentorship'],
    },
  },
  {
    id: '3s-intersoft',
    organization: {
      vi: 'Công ty Cổ phần 3S Intersoft',
      en: '3S Intersoft Joint Stock Company',
    },
    role: {
      vi: 'Thực tập sinh Kỹ sư Phần mềm Java',
      en: 'Java Software Engineer Intern',
    },
    period: { vi: '2022', en: '2022' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    group: 'experience',
    description: {
      vi: 'Phát triển và gỡ lỗi các module ứng dụng web Java/Spring/Servlet/Thymeleaf theo quy trình Git Flow và rà soát mã nguồn chéo (peer code review).',
      en: 'Built and debugged Java/Spring/Servlet/Thymeleaf web application modules inside a collaborative Git Flow and peer code-review environment.',
    },
    highlights: {
      vi: ['Java / Spring / Thymeleaf', 'Git Flow & Peer Code Review'],
      en: ['Java / Spring / Thymeleaf', 'Git Flow & Code Reviews'],
    },
  },
  {
    id: 'hai-ba-trung',
    organization: {
      vi: 'Trường THPT Hai Bà Trưng',
      en: 'Hai Ba Trung High School',
    },
    role: {
      vi: 'Ban Khoa học Tự nhiên (Vật lý, Hóa học, Sinh học, Tin học)',
      en: 'Natural Sciences Track (Physics, Chemistry, Biology, Computer Science)',
    },
    period: { vi: '2024–2027', en: '2024–2027' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    group: 'education',
    description: {
      vi: 'Kết quả học tập: GPA lớp 10 đạt 8,2/10 · GPA lớp 11 đạt 8,8/10 · SAT 1350/1600.',
      en: 'Academic record: Grade 10 GPA 8.2/10 · Grade 11 GPA 8.8/10 · SAT 1350/1600.',
    },
    highlights: {
      vi: ['GPA lớp 11: 8,8/10', 'SAT 1350/1600'],
      en: ['Grade 11 GPA 8.8/10', 'SAT 1350/1600'],
    },
  },
  {
    id: 'funix',
    organization: {
      vi: 'FUNiX (Tập đoàn FPT)',
      en: 'FUNiX (FPT Corporation)',
    },
    role: {
      vi: 'Chương trình Kỹ sư Phần mềm Cốt lõi (Core Software Engineer)',
      en: 'Core Software Engineer Program',
    },
    period: { vi: '2021–2027 (Dự kiến)', en: '2021–2027 (Expected)' },
    location: { vi: 'Từ xa', en: 'Remote' },
    group: 'education',
    description: {
      vi: 'Lộ trình kỹ thuật phần mềm bậc đại học gồm Cấu trúc dữ liệu & Giải thuật, Java, Thiết kế phần mềm và Kiến trúc hệ thống.',
      en: 'Structured university-level engineering track covering Data Structures & Algorithms, Java, Software Design, and System Architecture.',
    },
    highlights: {
      vi: ['Cấu trúc dữ liệu & Java', 'Kiến trúc hệ thống'],
      en: ['DSA & Java', 'System Architecture'],
    },
  },
  {
    id: 'pagoda-edu',
    organization: {
      vi: 'Giáo dục mùa hè cộng đồng (Huế)',
      en: 'Community Summer Education (Hue)',
    },
    role: {
      vi: 'Tình nguyện viên giảng dạy Tiếng Anh & Kỹ năng sống',
      en: 'Volunteer English & Life-Skills Instructor',
    },
    period: { vi: '2024–2026', en: '2024–2026' },
    location: {
      vi: 'Chùa Bảo Vân · Tịnh thất An Lạc · Chùa Mỹ Khánh',
      en: 'Bao Van Pagoda · An Lac Hermitage · My Khanh Pagoda',
    },
    group: 'community',
    description: {
      vi: 'Giảng dạy tiếng Anh và kỹ năng sống nền tảng cho thanh thiếu niên địa phương qua ba chương trình hè cộng đồng tại Huế.',
      en: 'Taught English and foundational life skills to local youth across three community temple summer programs in Hue.',
    },
    highlights: {
      vi: ['3 khóa hè cộng đồng', 'Đồng hành cùng học sinh địa phương'],
      en: ['3 Summer Programs', 'Community Mentorship'],
    },
  },
  {
    id: 'digital-historical-site',
    organization: {
      vi: 'Hệ thống tư liệu di tích lịch sử số',
      en: 'Digital Historical-Site Resource System',
    },
    role: {
      vi: 'Đồng tác giả & Trưởng nhóm Kỹ thuật',
      en: 'Co-Author & Technical Lead',
    },
    period: { vi: '2024–2025', en: '2024–2025' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    group: 'community',
    description: {
      vi: 'Đồng tác giả và phụ trách kỹ thuật hệ thống truy xuất tư liệu lịch sử có hỗ trợ AI kết hợp nội dung giáo dục 3D tương tác.',
      en: 'Co-authored and led technical development for AI-assisted historical-resource retrieval and interactive 3D educational content.',
    },
    highlights: {
      vi: ['Truy xuất tư liệu bằng AI', 'Di sản 3D tương tác'],
      en: ['AI-Assisted Retrieval', 'Interactive 3D Heritage'],
    },
  },
  {
    id: 'khoi-nguon-tri-thuc',
    organization: {
      vi: 'Khởi Nguồn Tri Thức IX',
      en: 'Khoi Nguon Tri Thuc IX',
    },
    role: {
      vi: 'Ban Kỹ thuật',
      en: 'Technical Committee',
    },
    period: { vi: '2024–2025', en: '2024–2025' },
    location: { vi: 'Huế, Việt Nam', en: 'Hue, Vietnam' },
    group: 'community',
    description: {
      vi: 'Xây dựng, cấu hình và vận hành máy chủ thi đấu cùng phần mềm câu hỏi thời gian thực cho các vòng thi học thuật trực tiếp.',
      en: 'Built, configured, and operated contest servers and real-time quiz software for live academic competition rounds.',
    },
    highlights: {
      vi: ['Máy chủ thi đấu', 'Vận hành phần mềm thi trực tiếp'],
      en: ['Contest Servers', 'Quiz Software Operations'],
    },
  },
  {
    id: 'cppreference-vn',
    organization: {
      vi: 'CPPReference Tiếng Việt',
      en: 'CPPReference Vietnamese',
    },
    role: {
      vi: 'Dịch giả & Biên tập viên Kỹ thuật',
      en: 'Technical Translator & Editor',
    },
    period: { vi: '2021–2022', en: '2021–2022' },
    location: { vi: 'Từ xa', en: 'Remote' },
    group: 'community',
    description: {
      vi: 'Đóng góp biên dịch và hiệu đính kỹ thuật tài liệu thư viện chuẩn C và C++ sang tiếng Việt cho lập trình viên và học sinh.',
      en: 'Contributed technical translation and editorial review of C and C++ standard library documentation for Vietnamese developers and students.',
    },
    highlights: {
      vi: ['Đặc tả chuẩn C/C++', 'Biên dịch kỹ thuật'],
      en: ['C/C++ Documentation', 'Technical Translation'],
    },
  },
  {
    id: 'kode-hydroos-vnux',
    organization: {
      vi: 'Kode Studio – HydroOS / VNux',
      en: 'Kode Studio – HydroOS / VNux',
    },
    role: {
      vi: 'Lập trình viên Linux & Người duy trì mã nguồn mở',
      en: 'Linux Developer & Open-Source Maintainer',
    },
    period: { vi: '2019–2021', en: '2019–2021' },
    location: { vi: 'Từ xa', en: 'Remote' },
    group: 'community',
    description: {
      vi: 'Tham gia phát triển bản phân phối Linux, đóng gói hệ thống và duy trì dự án mã nguồn mở cùng nhóm lập trình viên Việt Nam tại Kode.',
      en: 'Contributed to Linux distribution development, system packaging, and open-source maintenance with Vietnamese developers in Kode.',
    },
    highlights: {
      vi: ['Phân phối Linux (Arch)', 'Duy trì mã nguồn mở'],
      en: ['Linux Distribution', 'Open-Source Maintenance'],
    },
  },
];

export const HONORS: HonorItem[] = [
  {
    id: 'english-top',
    year: '2026–27',
    award: { vi: 'Giải Nhất (Thủ khoa)', en: 'First Prize (Top Scorer)' },
    event: {
      vi: 'Kỳ thi Học sinh Giỏi Tiếng Anh cấp TP Huế',
      en: 'Hue City English Excellent Student Competition',
    },
    tier: 'headline',
  },
  {
    id: 'regional-informatics',
    year: '2026',
    award: { vi: 'Giải Nhất', en: 'First Prize' },
    event: {
      vi: 'Hội thi Tin học trẻ Khu vực Miền Trung (Bảng D3)',
      en: 'Central Vietnam Regional Youth Informatics Contest (Category D3)',
    },
    tier: 'headline',
  },
  {
    id: 'youth-creativity-2026',
    year: '2026',
    award: { vi: 'Giải Nhất', en: 'First Prize' },
    event: {
      vi: 'Cuộc thi Sáng tạo Thanh thiếu niên Nhi đồng TP Huế lần thứ 19',
      en: '19th Hue Youth Creativity Contest',
    },
    tier: 'headline',
  },
  {
    id: 'science-fair-2026',
    year: '2025–26',
    award: { vi: 'Giải Nhất', en: 'First Prize' },
    event: {
      vi: 'Hội thi Khoa học Kỹ thuật cấp TP Huế',
      en: 'Hue City Science & Engineering Fair',
    },
    tier: 'headline',
  },
  {
    id: 'national-informatics',
    year: '2026',
    award: { vi: 'Giải Khuyến khích Quốc gia', en: 'National Consolation Prize' },
    event: {
      vi: 'Hội thi Tin học trẻ Toàn quốc',
      en: 'Vietnam National Youth Informatics Contest',
    },
    tier: 'headline',
  },
  {
    id: 'devfest-2025',
    year: '2025',
    award: { vi: 'Top 20 / Vòng 2', en: 'Top 20 / Round 2' },
    event: {
      vi: 'GDG DevFest MienTrung AI Hackathon',
      en: 'GDG DevFest MienTrung AI Hackathon',
    },
    tier: 'headline',
  },
  {
    id: 'provincial-2024',
    year: '2024',
    award: { vi: 'Giải Tư', en: 'Fourth Prize' },
    event: {
      vi: 'Hội thi Khoa học Kỹ thuật tỉnh Thừa Thiên Huế',
      en: 'Thua Thien Hue Provincial Science & Engineering Fair',
    },
    tier: 'provincial',
  },
  {
    id: 'provincial-informatics-2023',
    year: '2023',
    award: { vi: 'Hai Giải Nhì', en: 'Two Second Prizes' },
    event: {
      vi: 'Hội thi Tin học trẻ tỉnh Thừa Thiên Huế (Bảng B & D2)',
      en: 'Thua Thien Hue Provincial Youth Informatics Contest (Categories B & D2)',
    },
    tier: 'provincial',
  },
  {
    id: 'creativity-2023',
    year: '2023',
    award: { vi: 'Giải Ba', en: 'Third Prize' },
    event: {
      vi: 'Cuộc thi Sáng tạo Thanh thiếu niên Nhi đồng Huế',
      en: 'Hue Youth Creativity Contest',
    },
    tier: 'provincial',
  },
];

export const CERTIFICATIONS: CertificationGroup[] = [
  {
    domain: { vi: 'AI & Học máy', en: 'AI & Machine Learning' },
    items: [
      'IBM — Machine Learning with Python (2024)',
      'Google Cloud Skill Badges — Prompt Design in Vertex AI (2025)',
      'Google Cloud — Build Real World AI Applications with Gemini and Imagen (2025)',
      'Google Cloud — Automate Data Capture at Scale with Document AI (2025)',
    ],
  },
  {
    domain: { vi: 'Khoa học Máy tính & Nghiên cứu', en: 'Computer Science & Research' },
    items: [
      'UC San Diego — Algorithmic Toolbox (2024)',
      'University of Washington — Programming Languages, Part A (2022)',
      'Coursera — Writing in the Sciences (2022)',
    ],
  },
  {
    domain: { vi: 'Đám mây, Bảo mật & Tiếp thị', en: 'Cloud, Security & Marketing' },
    items: [
      'Google Cybersecurity Professional Certificate V2 (2024)',
      'Meta — Introduction to Social Media Marketing (2025)',
      'Google Cloud Serverless & Kubernetes Skill Badges · AI Study Jam Season 7 (2025)',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: { vi: 'Ngôn ngữ lập trình', en: 'Programming' },
    items: {
      vi: ['Python', 'TypeScript', 'Java', 'C/C++', 'Kotlin', 'Bash'],
      en: ['Python', 'TypeScript', 'Java', 'C/C++', 'Kotlin', 'Bash'],
    },
  },
  {
    category: { vi: 'Web & Đồ họa 3D tương tác', en: 'Web & Interactive 3D' },
    items: {
      vi: ['React', 'Spring Boot', 'Three.js / WebGL', 'PWA hoạt động ngoại tuyến'],
      en: ['React', 'Spring Boot', 'Three.js / WebGL', 'Offline-Capable PWAs'],
    },
  },
  {
    category: { vi: 'AI & Hệ thống', en: 'AI & Systems' },
    items: {
      vi: ['RAG', 'Machine Learning', 'Federated Learning', 'APIs', 'Docker', 'GitHub Actions', 'GCP', 'Firebase'],
      en: ['RAG', 'Machine Learning', 'Federated Learning', 'APIs', 'Docker', 'GitHub Actions', 'GCP', 'Firebase'],
    },
  },
  {
    category: { vi: 'Lưu trú & Sản phẩm', en: 'Hospitality & Product' },
    items: {
      vi: ['Guest CRM', 'Marketing hỗ trợ AI', 'Giao tiếp khách hàng', 'Tự động hóa quy trình', 'Thiết kế sản phẩm', 'Điều phối tài chính'],
      en: ['Guest CRM', 'AI-Assisted Marketing', 'Guest Communications', 'Workflow Automation', 'Product Design', 'Financial Coordination'],
    },
  },
  {
    category: { vi: 'Ngoại ngữ', en: 'Languages' },
    items: {
      vi: ['Tiếng Việt (Bản ngữ)', 'Tiếng Anh (Thành thạo)', 'Tiếng Nhật (Cơ bản · JLPT N5, 2018)'],
      en: ['Vietnamese (Native)', 'English (Advanced)', 'Japanese (Basic · JLPT N5, 2018)'],
    },
  },
];

export const PRESS_FEATURES: PressFeature[] = [
  {
    id: 'vnexpress-2021',
    outlet: 'VnExpress',
    year: '2021',
    title: 'Nam sinh lớp 7 thực hiện nhiều dự án công nghệ',
    summary: {
      vi: 'Bài phóng sự trên báo VnExpress ghi lại hành trình sớm tại Huế—khám phá máy tính từ năm 5 tuổi, tham gia phát triển Linux mã nguồn mở cùng nhóm lập trình viên Việt Nam tại Kode và theo học chương trình kỹ thuật phần mềm tại FUNiX khi đang học lớp 7 trường THCS Nguyễn Tri Phương.',
      en: 'National media feature profiling Nguyen Ngoc Thien’s early journey in Hue—exploring computers from age five, learning Linux and open-source maintenance with Vietnamese developers in Kode, and pursuing structured software engineering mentorship at FUNiX while in Grade 7 at Nguyen Tri Phuong Secondary School.',
    },
    url: PROFILE.vnexpressUrl,
  },
];
