<template>
  <q-page padding class="fit scroll q-px-md" id="terms_page">
    <h1 class="text-h2"><strong>{{$t('navigation.TermsPageTitle')}}</strong></h1>
    <p class="text-justify">{{ $t('terms.caption') }}</p>
    <p class="text-justify">{{$t('terms.para1')}}</p>
    <p class="text-justify">{{$t('terms.para2')}}</p>
    <p class="text-justify">{{$t('terms.para3')}}</p>
    <h3><strong>{{$t('terms.Cookies')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para4')}}</p>
    <p class="text-justify">{{$t('terms.para5')}}</p>
    <h3><strong>{{$t('terms.Licence')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para6')}}</p>
    <p class="text-justify">{{$t('terms.para7')}}</p>
    <ul>
      <li>{{$t('terms.li1')}}</li>
      <li>{{$t('terms.li2')}}</li>
      <li>{{$t('terms.li3')}}</li>
      <li>{{$t('terms.li4')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para8')}}</p>
    <p class="text-justify">{{$t('terms.para9')}}</p>
    <p class="text-justify">{{$t('terms.para10')}}</p>
    <p class="text-justify">{{$t('terms.para11')}}</p>
    <ul>
      <li>{{$t('terms.li5')}}</li>
      <li>{{$t('terms.li6')}}</li>
      <li>{{$t('terms.li7')}}</li>
      <li>{{$t('terms.li8')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para12')}}</p>
    <h3><strong>{{$t('terms.para13')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para14')}}</p>
    <ul>
      <li>{{$t('terms.li9')}}</li>
      <li>{{$t('terms.li10')}}</li>
      <li>{{$t('terms.li11')}}</li>
      <li>{{$t('terms.li12')}}</li>
      <li>{{$t('terms.li13')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para17')}}</p>
    <p class="text-justify">{{$t('terms.para15')}}</p>
    <ul>
      <li>{{$t('terms.li14')}}</li>
      <li>{{$t('terms.li15')}}</li>
      <li>{{$t('terms.li16')}}</li>
      <li>{{$t('terms.li17')}}</li>
      <li>{{$t('terms.li18')}}</li>
      <li>{{$t('terms.li19')}}</li>
      <li>{{$t('terms.li20')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para16')}}</p>
    <p class="text-justify">{{$t('terms.para17')}}</p>
    <p class="text-justify">{{$t('terms.para18')}}</p>
    <p class="text-justify">{{$t('terms.para19')}}</p>
    <ul>
      <li>{{$t('terms.li21')}}</li>
      <li>{{$t('terms.li22')}}</li>
      <li>{{$t('terms.li23')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para20')}}</p>
    <h3><strong>{{$t('terms.iFrames')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para21')}}</p>
    <h3><strong>{{$t('terms.Liability')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para22')}}</p>
    <h3><strong>{{$t('terms.Reservation')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para23')}}</p>
    <h3><strong>{{$t('terms.Removal')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para24')}}</p>
    <p class="text-justify">{{$t('terms.para25')}}</p>
    <h3><strong>{{$t('terms.Disclaimer')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para26')}}</p>
    <ul>
      <li>{{$t('terms.li24')}}</li>
      <li>{{$t('terms.li25')}}</li>
      <li>{{$t('terms.li26')}}</li>
      <li>{{$t('terms.li27')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para27')}}</p>
    <p class="text-justify">{{$t('terms.para28')}}</p>
  </q-page>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
const defaultName = 'TestApp'
const defaultUrl = 'TestApp.COM'
import { meta } from 'waelio-utils'
export default {
  name: 'Terms',
  props:{
    companyName:{
      type: String,
      default: defaultName
    },
    companyUrl: {
      type: String,
      default: defaultUrl
    }
  },
  data(){
    return {
      metaTags: {
        title: `${defaultName} | ${this.$t('navigation.TermsPageTitle')}`,
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: `https://${defaultUrl}`,
        image: 'nwm_logo.png'
      }
    }
  },
  meta,
  I18n: {
    messages: {
      en:{
        general: {
        SiteTitle: defaultName,
        },
        navigation:{
          TermsPageTitle:"Terms & Conditions"
        }, 
        terms:{
          iFrames: "iFrames",
          Liability: "Content Liability",
          Reservation: "Reservation of Rights",
          Removal: "Removal of links from our website",
          Disclaimer: "Disclaimer",
          caption:  "Welcome to ${this.companyName}!",
          para1:  "These terms and conditions outline the rules and regulations for the use of ${this.companyName}'s Website, located at {{ `https://${companyUrl}`.}}", 
          para2:  "By accessing this website we assume you accept these terms and conditions. Do not continue to use ${this.companyName} if you do not agree to take all of the terms and conditions stated on this page.",
          para3:  "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 'Client', 'You' and 'Your' refers to you, the person log on this website and compliant to the Company’s terms and conditions. 'The Company', 'Ourselves', 'We', 'Our' and 'Us', refers to our Company. 'Party', 'Parties', or 'Us', refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.",
          Cookies:  "Cookies",
          para4:  "We employ the use of cookies. By accessing ${this.companyName}, you agreed to use cookies in agreement with the ${this.companyName}'s Privacy Policy.",
          para5:  "Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          Licence:  "License",
          para6:  "Unless otherwise stated, ${this.companyName} and/or its licensors own the intellectual property rights for all material on ${this.companyName}. All intellectual property rights are reserved. You may access this from ${this.companyName} for your own p terms and conditions.",
          para7:  "You must not:",
          li1: "Republish material from ${this.companyName}",
          li2: "Sell, rent or sub-license material from ${this.companyName}",
          li3: "Reproduce, duplicate or copy material from ${this.companyName}",
          li4: "Redistribute content from ${this.companyName}",
          para8:  "This Agreement shall begin on the date hereof.",
          para9: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. ${this.companyName} does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of ${this.companyName},its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, ${this.companyName} shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
          para10: "${this.companyName} reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
          para11: "You warrant and represent that:",
          li5: "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so",
          li6: "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party",
          li7: "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
          li8: "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
          para12: "You hereby grant ${this.companyName} a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.",
          para13: "Hyperlinking to our Content",
          para14: "The following organizations may link to our Website without prior written approval:",
          li9: "Government agencies.",
          li10: "Search engines.",
          li11: "News organizations.",
          li12: "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and",
          li13: "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.",
          para15: "We may consider and approve other link requests from the following types of organizations:",
          li14: "commonly-known consumer and/or business information sources;",
          li15: "dot.com community sites;",
          li16: "associations or other groups representing charities;",
          li17: "online directory distributors;",
          li18: "internet portals;",
          li19: "accounting, law and consulting firms; and", 
          li20: "educational institutions and trade associations.",
          para16: "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of ${this.companyName}; and (d) the link is in the context of general resource information.",
          para17: "These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.",
          para18: "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to ${this.companyName}. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.",
          para19: "Approved organizations may hyperlink to our Website as follows:",
          li21: "By use of our corporate name; or",
          li22: "By use of the uniform resource locator being linked to; or",
          li23: "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.",
          para20: "No use of ${this.companyName}'s logo or other artwork will be allowed for linking absent a trademark license agreement.",
          para21: "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.",
          para22: "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
          para23: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
          para24: "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.",
          para25: "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.",
          para26: "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:",
          li24: "limit or exclude our or your liability for death or personal injury;",
          li25: "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
          li26: "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
          li27: "exclude any of our or your liabilities that may not be excluded under applicable law.",
          para27: "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.",
          para28: "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."
        }
      },
      ar:{
        general:{
          SiteTitle: "نورث وست ميتا",
        },
        navigation:{
          TermsPageTitle: "الشروط والأحكام"
        },
        terms: {
          iFrames:"iFrames",
          Liability:"المسؤولية عن المحتوى",
          Reservation:"حجز الحقوق",
          Removal:"إزالة الروابط من موقعنا",
          Disclaimer:"إخلاء المسؤولية",
          caption: "(مرحبا بك في (نورثيستيما",
          para1: "وتحدد هذه الأحكام والشروط القواعد والأنظمة المتعلقة باستخدام الموقع الشبكي لشركة ${this.companyName} على العنوان التالي : {{ `https://${companyUrl}`.}}",
          para2: "ومن خلال الوصول إلى هذا الموقع نفترض أنك تقبل هذه الشروط والأحكام. لا تقم بالاستمرار في استخدام ${this.companyName} اذا كنت لا توافق على أخذ كل الشروط والأحكام التي تم تحديدها بهذه الصفحة.",
          para3: "وتنطبق المصطلحات التالية على هذه الأحكام والشروط ، وبيان الخصوصية وكل الاتفاقات : 'الوحدة التابعة' ، و 'أنت' و 'ك' تشير إليك ، وسجل الشخص المعني على هذا الموقع وممتثل لأحكام الشركة وشروطها. 'الشركة' ، 'أنفسنا' ، 'نحن' ، 'نحن' و 'نحن' ، يحيل إلى شركتنا. 'Party' ، 'Parties' ، أو 'Us' ، تشير الى كل من Client وأنفسنا. وتشير جميع المصطلحات إلى عرض وقبول وبحث المبلغ اللازم للقيام بعملية مساعدتنا للعملاء بأنسب طريقة للوفاء بالغرض الصريح المتمثل في تلبية احتياجات العميل فيما يتعلق بتقديم الخدمات التي تقدمها الشركة ، وفقا للقانون الهولندي السائد ورهنا بأحكامه. وأي استخدام للمصطلحات الواردة أعلاه أو أي كلمات أخرى في المفرد أو الجمع أو الرسملة و / أو هو أو هي أو هي ، تتخذ باعتبارها قابلة للتبادل ، وبالتالي فهي تشير إلى نفسها.",
          Cookies: "Cookies",
          para4: "نحن نوظف استعمال الكعك ومن خلال الوصول إلى نورثيستيما ، وافقت على استخدام الكوكيز بالاتفاق مع سياسة الخصوصية في نورثيستيما.",
          para5: "معظم المواقع الشبكية التفاعلية تستخدم الكوكيز للسماح لنا باستعادة تفاصيل المستخدم لكل زيارة. يتم استخدام Cookies بواسطة موقعنا الالكتروني لاتاحة وظائف بعض المناطق لجعلها أسهل للأشخاص الذين يقومون بزيارة موقعنا الالكتروني. بعض شركائنا المنتسبين للإعلانات قد يستخدمون الكعك أيضا",
          Licence: "الترخيص",
          para6: "وما لم يذكر خلاف ذلك ، فإن نورثيستيما و / أو المرخصين لديهم يملكون حقوق الملكية الفكرية لجميع المواد الموجودة في نورثيستيما. جميع حقوق الملكية الفكرية محفوظة. يمكنك التوصل الى هذا من ${this.companyName} للحصول على شروط وأحكام الصفحة الخاصة بك.",
          para7: "يجب أن لا :",
          li1: "نشر مواد من نورثيستيما",
          li2: "مواد لبيع أو تأجير أو ترخيص من الباطن من نورثيستيما",
          li3: "المواد المعاد إنتاجها أو استنساخها أو نسخها من نورثيستيما",
          li4: "اعادة توزيع المحتويات من NorthWesteta",
          para8: "يبدأ هذا الاتفاق في تاريخه.",
          para9: "وتتيح أجزاء من هذا الموقع الشبكي فرصة للمستعملين لنشر وتبادل الآراء والمعلومات في مجالات معينة من الموقع الشبكي. ${this.companyName} لا تقوم بترشيح أو تحرير أو نشر أو مراجعة التعقيبات قبل وجودها في موقع الانترنت. ولا تعبر التعليقات عن آراء وآراء ${this.companyName} و / أو وكلائها و / أو المنتسبين إليها. وتعكس التعليقات آراء وآراء الشخص الذي نشر آرائه وآرائه. وبقدر ما تسمح به القوانين المعمول بها ، لا تكون شركة ${this.companyName} مسئولة عن التعليقات أو عن أي مسؤولية أو أضرار أو نفقات تسببت فيها و / أو تعرضت لها نتيجة لأي استخدام و / أو نشر و / أو ظهور التعليقات على هذا الموقع الشبكي.",
          para10: "تحتفظ NorthWestetaa بحق مراقبة كل التعقيبات ولازالة أي تعقيبات يمكن اعتبارها غير مناسبة أو هجومية أو تتسبب في حدوث انتهاك لهذه الأحكام والشروط.",
          para11: "أنت تضمن وتمثل ذلك :",
          li5: "ويحق لكم نشر التعليقات على موقعنا على شبكة الإنترنت والحصول على جميع التراخيص والموافقات اللازمة للقيام بذلك",
          li6: "ولا تغزو التعليقات أي حق من حقوق الملكية الفكرية ، بما في ذلك دون قيود على حقوق التأليف والنشر أو براءات الاختراع أو العلامات التجارية لأي طرف ثالث.",
          li7: "ولا تحتوي التعليقات على أي مواد تشهيرية أو شائية أو مهينة أو غير لائقة أو غير مشروعة ، وهو ما يشكل غزوا للخصوصية.",
          li8: "ولن تستخدم التعليقات للتماس أو ترويج أنشطة تجارية أو أنشطة تجارية عادية أو أنشطة غير قانونية.",
          para12: "يمكنك منح NorthWestWesta رخصة غير حصرية لاستخدام واعادة نسخ وتحرير ومنح الآخرين لاستخدام واعادة انتاج وتحرير أي من التعقيبات الخاصة بك في أي من النماذج أو النسق أو وسط التخزين.",
          para13: "وصلة مرجعية للمحتويات الخاصة بنا",
          para14: "ويمكن للمنظمات التالية أن ترتبط بموقعنا على الإنترنت بدون موافقة كتابية مسبقة :",
          li9: "الوكالات الحكومية.",
          li10: "محركات البحث",
          li11: "منظمات أخبار.",
          li12: "ويمكن لموزعي الأدلة على الإنترنت الربط بموقعنا على الإنترنت بنفس الطريقة التي يتم بها ربطهم بالمواقع الشبكية للأعمال التجارية المسجلة الأخرى ؛",
          li13: "الأعمال التجارية المعتمدة على نطاق النظام ، باستثناء طلب المنظمات غير الربحية ، المجمعات التجارية الخيرية ، ومجموعات جمع التبرعات الخيرية التي قد لا ترتبط بموقعنا على شبكة الإنترنت. ويمكن لهذه المنظمات أن ترتبط بصفحة وطننا ، أو بالمنشورات أو بمعلومات أخرى على الموقع الشبكي طالما أن الرابط : (أ) لا يكون بأي حال من الأحوال مخادعا ؛ (ب) لا يعني ضمنا تقديم الرعاية أو التظهير أو الموافقة على الربط بين الطرف ومنتجاته و / أو خدماته ؛ و (ج) تناسب سياق موقع الطرف الذي تربطه به صلة.",
          para15: "ويجوز لنا أن ننظر في طلبات الربط الأخرى من الأنواع التالية من المنظمات وأن نوافق عليها :",
          li14: "(و) مصادر معلومات المستهلكين و / أو المعلومات التجارية المعروفة عموما ؛",
          li15: "dot.com مواقع على مستوى المجتمع المحلي ؛",
          li16: "(و) الجمعيات أو المجموعات الأخرى التي تمثل الجمعيات الخيرية ؛",
          li17: "(و) موزع الأدلة على الإنترنت ؛",
          li18: "portals انترنت ؛",
          li19: "-شركات المحاسبة والقانون والاستشارة ؛",
          li20: "المؤسسات التعليمية والرابطات التجارية.",
          para16: "وسنوافق على طلبات الربط من هذه المنظمات إذا قررنا ما يلي : (أ) الرابط لا يجعلنا نبدو لأنفسنا أو للأعمال التجارية المعتمدة لدينا ؛ و (ب) لا توجد لدى المنظمة أي سجلات سلبية معنا ؛ (ج) أن المنفعة لنا من رؤية الوصلة المرجعية تعوض غياب نورثيستيما ؛ و (د) أن الرابط في سياق المعلومات المتعلقة بالموارد العامة.",
          para17: "ويمكن لهذه المنظمات أن تربط ما بين صفحة وطننا ما دامت الصلة : (أ) ليست خادعة بأي شكل من الأشكال ؛ (ب) لا تعني ضمنا تقديم الرعاية أو التظهير أو الموافقة من جانب الطرف الرابط أو منتجاته أو خدماته ؛ و (ج) تناسب سياق موقع الطرف الذي تربطه به صلة.",
          para18: "وإذا كنت أحد المنظمات المدرجة في الفقرة 2 أعلاه وكانت مهتمة بربطها بموقعنا الإلكتروني ، فيجب عليك إبلاغنا بإرسال رسالة بالبريد الإلكتروني إلى نورثيستيلا. برجاء تضمين اسمك واسم المؤسسة الخاصة بك ومعلومات الاتصال بالاضافة الى عنوان URL الخاص بالموقع الخاص بك ، وهو كشف بعناوين URL التي تريد ربطها بموقع الانترنت الخاص بنا ، وكشف بعناوين URL الموجودة بالموقع الخاص بنا التي تريد الاتصال بها. انتظر لمدة 2-3 أسابيع للحصول على رد.",
          para19: "ويمكن للمنظمات المعتمدة أن ترتبط بموقعنا الشبكي على النحو التالي :",
          li21: "(ب) باستخدام اسم شركتنا ؛ أو",
          li22: "(ب) باستخدام الموقع الموحد للموارد الذي يرتبط به ؛ أو",
          li23: "وباستخدام أي وصف آخر لموقعنا على شبكة الإنترنت يرتبط بهذا المعنى في سياق وشكل المحتوى في موقع الطرف الذي يربط بين الطرفين.",
          para20: "لن يتم السماح باستخدام شعار ${this.companyName} أو غيره من الأعمال الفنية لربط عدم وجود اتفاقية ترخيص العلامات التجارية.",
          para21: "وبدون الحصول على موافقة مسبقة وإذن كتابي ، قد لا تقوم بإنشاء أطر حول صفحات موقعنا على شبكة الإنترنت التي تغير بأي شكل من الأشكال العرض أو الظهور المرئي لموقعنا على الإنترنت.",
          para22: "ولن نتمسك بالمسؤولية عن أي محتوى يظهر على موقعكم على الإنترنت. أنت توافق على حماية والدفاع عننا ضد كل الإدعاءات التي ترتفع على موقعك ولا ينبغي أن تظهر أي صلة (راصلات) على أي موقع شبكي يمكن أن يفسر على أنه انتهاك أو فاحش أو جنائي ، أو ينتهك ، أو ينتهك ، أو يدافع عن انتهاك أو أي انتهاك آخر لحقوق طرف ثالث.",
          para23: "ونحتفظ بحق طلب نقل جميع الوصلات أو أي رابط معين إلى موقعنا على الإنترنت. توافق على أن تزيل على الفور جميع الروابط إلى موقعنا على الإنترنت بناء على طلب. كما أننا نحتفظ بحق آمين لهذه الشروط والشروط وأنها تربط بين السياسة في أي وقت. ومن خلال الربط بشكل مستمر مع موقعنا على الإنترنت ، فإنكم توافقون على الالتزام بهذه الأحكام والشروط التي تربطكم بها ومتابعتها.",
          para24: "إذا وجدت أي رابط على موقعنا على الإنترنت مهين لأي سبب من الأسباب ، فأنت حر في الاتصال وإبلاغنا في أي لحظة. وسننظر في طلبات إزالة الصلات ، ولكننا لسنا ملزمين بها أو نرد عليها بشكل مباشر أو بالرد عليها.",
          para25: "ولا نكفل أن تكون المعلومات في هذا الموقع على هذا الموقع صحيحة ، ولا تسوغ كمالها أو دقتها ؛ كما أننا لا نعد بضمان بقاء الموقع الشبكي متاحا أو أن يتم الاحتفاظ بالمواد الموجودة على الموقع الشبكي حتى الآن.",
          para26: "ونحن نستثني ، إلى أقصى مدى يسمح به القانون المنطبق ، جميع العروض والضمانات والشروط المتعلقة بموقعنا الشبكي واستخدام هذا الموقع الشبكي. لا يوجد شيء في هذا التنازل سيقوم بما يلي :",
          li24: "الحد من مسؤوليتنا عن الوفاة أو الإصابة الشخصية أو استبعادها ؛",
          li25: "(د) الحد من مسؤوليتنا عن الغش أو التحايل الاحتيالي ، أو استبعاد مسؤوليتنا عن ذلك ؛",
          li26: "الحد من أي من التزاماتنا أو التزاماتك بأي شكل من الأشكال غير مسموح بها بموجب القانون المعمول به ؛ أو",
          li27: "استبعاد أي من التزاماتنا أو التزاماتك التي قد لا يتم استبعادها طبقا للقانون الواجب التطبيق.",
          para27: "وتخضع القيود والمحظورات المتعلقة بالمسؤولية المنصوص عليها في هذا القسم وفي مواضع أخرى من هذا التنصل : (أ) للفقرة السابقة ؛ و (ب) أن تحكم جميع الخصوم الناشئة في إطار التنازل ، بما في ذلك الالتزامات الناشئة عن العقد ، وفي الضرر وفي حالة الإخلال بالواجب القانوني.",
          para28: "وطالما أن الموقع الشبكي والمعلومات والخدمات المتاحة على الموقع الشبكي تقدم مجانا ، فإننا لن نكون مسؤولين عن أي خسارة أو ضرر من أي نوع."
        }
      },
      he:{
        general:{
          SiteTitle: "צפון מערב Meta"
        },
        navigation:{
          TermsPageTitle: "תנאים והתניות"
        },
        terms: {
          iFrames:"iFrames",
          Liability:"אחריות על תוכן",
          Reservation:"שמירת זכויות",
          Removal:"הסרת קישורים מאתרנו",
          Disclaimer:"הצהרת אחריות",
          caption: "ברוך הבא ל - \"נורת ' ווסטמטטה\"!",
          para1: "תנאים והתניות אלה מתארים את הכללים והתקנות לשימוש באתר האינטרנט של נורת ' ווסטמטה, הממוקם בכתובת {{ `https://${companyUrl}`.}}",
          para2: "באמצעות גישה לאתר זה אנו מניחים שאתם מקבלים את התנאים והתנאים האלה. אל תמשיכו להשתמש בנורת ' ווסטמטטה אם אינכם מסכימים לקחת את כל התנאים והתניות שצוינו בדף זה.",
          para3: "המינוח שלהלן חל על תנאים והתניות אלה, הצהרת פרטיות והודעה על כתב ויתור וכל הסכמי ההסכמים: 'הלקוח', 'אתה' ו 'מתייחס אליך', יומן האדם באתר זה ועומד בדרישות לתנאים והתניות של החברה. \"החברה\", \"אנחנו\", \"אנחנו\" ו \"אנחנו\", מתייחסים לחברה שלנו. \"מסיבות\", \"מסיבות\", או \"אנחנו\", מתייחסים גם ללקוחה וגם לעצמנו. כל התנאים מתייחסים להצעה, קבלה והתחשבות של תשלום הנחוצות על מנת לבצע את תהליך הסיוע שלנו ללקוח באופן המתאים ביותר לצורך עמידה בישיבת צרכי המזמין בגין מתן השירותים כאמור של החברה, בהתאם לנבדק ובכפוף לחוק בהולנד. כל שימוש במטרמינולוגיה הנ \" ל או במילים אחרות ביחיד, בלשון רבים, הקפיטליקציה ו/או הם, נלקחים כניתנים להחלפה, ולכן מתייחסים לאותו הדבר.",
          Cookies: "קובצי Cookie",
          para4: "אנו מעסיקים את השימוש בעוגיות. על ידי גישה לנורת 'ווסטמטטה, הסכמת להשתמש בעוגיות בהסכם עם מדיניות הפרטיות של נורת' ווסטמיתה.",
          para5: "רוב האתרים האינטראקטיביים משתמשים בעוגיות כדי לאפשר לנו לאחזר את פרטי המשתמש עבור כל ביקור. קובצי Cookie משמשים את האתר שלנו כדי לאפשר את הפונקציונליות של אזורים מסוימים כדי להקל על אנשים מבקרים באתר שלנו. חלק מהשותפים שלנו עם פרסום/פרסום עשויים גם להשתמש בעוגיות.",
          Licence: "רישיון",
          para6: "אלא אם כן נאמר אחרת, נורת 'ווסטמטטה ו/או למעניקי הרישיונות שלו יש את זכויות הקניין הרוחני של כל החומרים בנורת' ווסטמטטה. כל זכויות הקניין הרוחני שמורות. אתה יכול לגשת זה מנורת ' ווסטמטטה לתנאים שלך p ותניות.",
          para7: "אינכם חייבים:",
          li1: "פרסום חומר מ-${this.companyName}",
          li2: "למכור, שכר דירה או חומר תת-רישיון מצפון ווסטמטטה",
          li3: "להפיק מחדש, לשכפל או להעתיק חומר מ-נורת ' ווסטמטטה.",
          li4: "הפצת תוכן מ-נורת ' ווסטמטטה",
          para8: "הסכם זה יתחיל בתאריך זה.",
          para9: "חלקים באתר זה מספקים הזדמנות למשתמשים לפרסם ולהחליף דעות ומידע באזורים מסוימים באתר האינטרנט. נורת ' ווסטמטטה לא לסנן, לערוך, לפרסם או לסקור הערות לפני נוכחותם באתר האינטרנט. הערות אינן משקפות את התצוגות והדעות של נורת ' ווסטמטה, סוכניה ו/או שותפים. הערות משקפות את התצוגות והדעות של האדם שמפרסם את התצוגות והדעות שלהם. ככל שניתן על פי החוקים החלים, לא יהיו אחראים על העמלה או בגין כל חבות, נזקים או הוצאות שנגרמו ו/או סבלנו כתוצאה מכל שימוש ו/או פרסום ו/או הופעה של ההערות באתר זה.",
          para10: "נורת ' ווסטמטטה שומרת לעצמה את הזכות לנטר את כל ההערות ולסלק כל הערות אשר יכולות להיחשב בלתי הולמות, פוגעניות או גורמות להפרה של תנאים והתניות אלה.",
          para11: "אתה צו ומייצג את זה:",
          li5: "אתם רשאים לפרסם את ההערות באתר האינטרנט שלנו, ויש לכם את כל הרישיונות והרשיונות הדרושים לביצוע.",
          li6: "ההערות אינן פולות זכות קניין רוחני, לרבות ללא הגבלה של זכויות יוצרים, פטנט או סימן מסחרי של כל צד שלישי",
          li7: "ההערות אינן מכילות כל defamatory, libelous, פוגע, מגונה או חומר לא חוקי אשר הוא פלישה לפרטיות",
          li8: "ההערות לא ישמשו לאיתור או לקדם עסקי או מותאם או להציג פעילויות מסחריות או פעילות לא חוקית.",
          para12: "בזאת אתם מעניקים לנורת ' ווסטמיטה רישיון לא בלעדי להשתמש בו, לשכפל, לערוך ולאשר לאחרים להשתמש, לשכפל ולערוך כל אחד מההערות שלכם בכל צורה, מבנים או מדיה.",
          para13: "היפר-קישור אל התוכן שלנו",
          para14: "הארגונים הבאים עשויים לקשר לאתר שלנו ללא אישור מראש ובכתב:",
          li9: "סוכנויות הממשלה.",
          li10: "חיפוש במנועים.",
          li11: "ארגוני חדשות.",
          li12: "מפיצי מדריכים מקוונים עשויים לקשר לאתר שלנו באותו אופן שבו הם היפר-קישור לאתרים של עסקים רשומים אחרים.",
          li13: "עסקים ברחבי המערכת, למעט שידול לארגונים ללא מטרות רווח, קניונים למטרות צדקה, וקבוצות גיוס כספים אשר אינן יכולות להיפר-קישור לאתר האינטרנט שלנו. ארגונים אלה עשויים לקשר לדף הבית שלנו, לפרסומים או למידע של אתר אינטרנט אחר כל עוד קישור: (א) אינו בשום דרך מטעה; (ב) אינו רומז על חסות, תמיכה או אישור של צד קישור והמוצרים ו/או השירותים שלה, ו - (c) מתאים בהקשר של אתר הקישור של צד הקישור.",
          para15: "אנו עשויים לשקול ולאשר בקשות קישור אחרות מהסוגים הבאים של ארגונים:",
          li14: "צרכן ו/או מקורות מידע עסקיים ידועים.",
          li15: "dot.com אתרי קהילה;",
          li16: "שיוכים או קבוצות אחרות שמייצגות ארגוני צדקה.",
          li17: "מפיצי מדריכים מקוונים:",
          li18: "פורטלים אינטרנט;",
          li19: "חשבונאי, משרדי עורכי דין ויעוץ.",
          li20: "מוסדות חינוך ושיוכי סחר.",
          para16: "אנו מאשרים את בקשות הקישור מארגונים אלה אם נחליט כי: (א) הקישור לא יגרום לנו להיראות לא טובים לעצמנו או לעסקים; (ב) לארגון אין כל רשומות שליליות איתנו; (ג) התועלת לנו מהנראות של ההיפר-קישור מפצה על ההיעדרות של נורת ' ווסטמט; ו - (ד) הקישור הוא בהקשר של מידע משאבים כללי.",
          para17: "ארגונים אלה עשויים לקשר לדף הבית שלנו כל זמן שהקישור: (א) אינו בשום דרך מטעה; (ב) אינו רומז באופן כוזב על חסות, תמיכה או אישור של צד הקישור והמוצרים או השירותים שלו, ו - (ג) מתאים בהקשר של אתר המקשר.",
          para18: "אם אתם אחד מהארגונים המפורטים בסעיף 2 מעל ומעוניינים בקישור לאתר האינטרנט שלנו, עליכם להודיע לנו ע \"י שליחת דוא\" ל לנורת ' ווסטמטה. נא לכלול את שמכם, את שם הארגון שלכם, את פרטי הקשר וכן את ה-URL של האתר שלכם, רשימה של כתובות URL שבהן אתם מתכוונים לקשר לאתר שלנו, ורשימה של כתובות URL באתר שלנו שאליו ברצונכם לקשר. המתן 2-3 שבועות לתגובה.",
          para19: "ארגונים מאושרים עשויים להיפר-קישור לאתר שלנו באופן הבא:",
          li21: "בשימוש בשם התאגיד שלנו, או",
          li22: "באמצעות מאתר המשאבים האחיד המקושר ל; או",
          li23: "השימוש בכל תיאור אחר של אתר האינטרנט שלנו מקושר לזה הגיוני בתוך ההקשר ומבנה התוכן באתר של מסיבת הקישור.",
          para20: "אין שימוש בלוגו של נורת ' ווסטמטה או יצירות אמנות אחרות לצורך קישור ללא הסכם רישיון סימן מסחרי.",
          para21: "ללא אישור מראש ובכתב הרשאה בכתב, ייתכן שלא תוכלו ליצור מסגרות סביב הרשת שלנו ולשנות בכל דרך את התצוגה החזותית או המראה של אתר האינטרנט שלנו.",
          para22: "לא נהיה אחראים לכל תוכן המופיע באתר האינטרנט שלכם. אתה מסכים להגן ולהגן עלינו מפני כל הטענות כי הוא עולה באתר שלך. אין קישור (ים) להופיע בכל אתר אינטרנט שעשוי להתפרש כ-libelous, מגונה או פושע, או שהפרה, אחרת מפר את הפרה או הפרה אחרת של, כל זכויות צד שלישי.",
          para23: "אנו שומרים את הזכות לבקש שתסיר את כל הקישורים או כל קישור מיוחד לאתר שלנו. אתם מאשרים באופן מיידי לסלק את כל הקישורים אל אתר האינטרנט שלנו לפי בקשה. אנחנו גם שומרים את הזכות אמן במונחים ולתניות אלה וזה מקשר מדיניות בכל עת. באמצעות קישור רציף לאתר שלנו, אתם מסכימים להיות מחוייבים ולעקוב אחר תנאי הקישור והתנאים האלה.",
          para24: "אם אתה מוצא כל קישור באתר שלנו כי הוא פוגע מכל סיבה, אתה חופשי ליצור קשר ולהודיע לנו בכל רגע. אנו נשקול בקשות לסילוק קישורים אבל אנחנו לא מחוייבים או כך או כדי להגיב אליכם ישירות.",
          para25: "אנחנו לא מוודאים שהמידע באתר זה נכון, אנחנו לא צווים את השלמות או הדיוק שלו, ולא נבטיח להבטיח שהאתר יישאר זמין או שהחומר באתר יישמר עד לתאריך.",
          para26: "בהתאם לחוק המקסימלי המורשה, אנו לא כוללים את כל הייצוגים, האחריות והתנאים הקשורים לאתר האינטרנט שלנו ובשימוש באתר זה. שום דבר בכתב ויתור זה לא יהיה:",
          li24: "להגביל או לשלול שלנו או את אחריותך למוות או לפציעה אישית.",
          li25: "להגביל או לשלול את אחריותנו או את אחריותך להונאה או להונאת שווא.",
          li26: "להגביל את כל שלנו או ליכולות שלך בכל דרך שהיא אינה מותרת תחת שלי; או",
          li27: "לא לכלול את כל הליכויות שלנו או שלך שלא ייכללו תחת החוק החל.",
          para27: "ההגבלות והאיסורים של אחריות שנקבעו בסעיף זה ובמקומות אחרים ב-שיח זה: (א) כפופים לפיסקה הקודמת, ו - (ב) למשול בכל התחייבויות הנובעות כתב ויתור, לרבות התחייבויות הנובעות חוזה, דיני נזיקין ובהפרת חובת קטין.",
          para28: "כל עוד האתר והמידע והשירותים באתר יימסרו ללא תשלום, לא נהיה אחראים לאובדן או נזק כלשהו מהטבע."
        }
      },
      ru:{
        general: {
          SiteTitle: "Северо-Западная Мета"
        },
        navigation:{
          TermsPageTitle: "Условия и условия"
        },
        terms: {
          iFrames:"iFrames",
          Liability:"Ответственность за содержание",
          Reservation:"Сохранение прав",
          Removal:"Удаление ссылок с нашего сайта",
          Disclaimer:"Заявление об ограничении ответственности",
          caption: "Добро пожаловать в НортВестМета!",
          para1: "Эти правила и условия обрисовывали правила и правила использования веб-сайта НортВестМеты, расположенного по адресу {{ `https://${companyUrl}`.}}",
          para2: "При обращении к этому веб-сайту мы предполагаем, что вы принимаете эти условия. Не используйте ${this.companyName}, если вы не согласны принять все условия, изложенные на этой странице.",
          para3: "К этим Положению и условиям, Заявлении о конфиденциальности и уведомлению об отказе и всем соглашениям: 'Клиент', 'Вы' и 'Ваше' относятся следующие термины: \"Вы\" и \"Ваше\", человек регистрирутся на этом веб-сайте и соответствует условиям и условиям Компании. 'Компания', 'Мы', 'Мы', 'Наши' и 'Мы', относится к нашей Компании. 'Сторона', 'Стороны' или 'Сша', относится как к клиенту, так и к самим себе. Все термины относятся к предложению, акцепту и рассмотрению платежа, необходимого для того, чтобы осуществить процесс оказания нашей помощи Клиенту наиболее подходящим образом для конкретной цели удовлетворения потребностей Клиента в отношении предоставления заявленных услуг Компании в соответствии с действующим законодательством Нидерландов и с учетом действующего законодательства. Любое использование вышеуказанной терминологии или других слов в единственном, множественном числе, капитализации и/или он/она или они принимаются как взаимозаменяемые и поэтому имеют в виду одно и то же.",
          Cookies: "Cookie",
          para4: "Мы используем печенье. Получив доступ к ${this.companyName}, вы согласились использовать cookie в согласии с политикой конфиденциальности ${this.companyName}.",
          para5: "Большинство интерактивных веб-сайтов используют cookie для получения сведений о пользователе для каждого посещения. Cookies используются нашим веб-сайтом, чтобы обеспечить функциональность определенных областей, чтобы облегчить людям, посещающих наш сайт. Некоторые из наших партнеров по рекламе могут также использовать cookies.",
          Licence: "Лицензия",
          para6: "Если не указано иное, ${this.companyName} и/или ее лицензиары владеют правами на интеллектуальную собственность для всех материалов на ${this.companyName}. Все права на интеллектуальную собственность зарезервированы. Вы можете получить доступ к этому из ${this.companyName} в своих собственных условиях и условиях.",
          para7: "Вы не должны:",
          li1: "Переиздавать материал из ${this.companyName}",
          li2: "Продажа, аренда или сублицензионный материал из ${this.companyName}",
          li3: "Воспроизведение, дублирование или копирование материала из ${this.companyName}",
          li4: "Перераспределение содержимого с ${this.companyName}",
          para8: "Настоящее Соглашение начинается с даты его принятия.",
          para9: "Части этого веб-сайта предоставляют пользователям возможность размещать и обмениваться мнениями и информацией в определенных областях веб-сайта. ${this.companyName} не фильтрует, не редактирует, не публикует и не рассматривает комментарии до их присутствия на сайте. Комментарии не отражают мнения и мнения ${this.companyName}, ее агентов и/или филиалов. Комментарии отражают мнения и мнения человека, который выкладывает свои взгляды и мнения. В той мере, в какой это допускается применимыми законами, ${this.companyName} не несет ответственности за замечания или за какую-либо ответственность, убытки или расходы, вызванные и/или понесенные в результате любого использования и/или размещения Комментариев на этом веб-сайте.",
          para10: "${this.companyName} оставляет за собой право отслеживать все комментарии и удалять любые комментарии, которые могут быть сочты несоответствующими, оскорбительными или приводящим к нарушению настоящих Условий.",
          para11: "Вы орент и представляете, что:",
          li5: "Вы имеете право размещать Комментарии на нашем сайте и иметь все необходимые лицензии и соглас",
          li6: "Комментарии не вторгаются в какое-либо право интеллектуальной собственности, в том числе без ограничения авторских прав, патента или товарного знака любой третьей стороны",
          li7: "Комментарии не содержат клеветнической, клеветнической, оскорбительной, непристойной или иной противоправной деятельности, которая является вторжением в частную жизнь",
          li8: "Комментарии не будут использоваться для того, чтобы запрашивать или поощрять коммерческую деятельность или обычай или представлять коммерческую деятельность или незаконную деятельность.",
          para12: "Настоящим вы предоставляете ${this.companyName} неэксклюзивную лицензию на использование, воспроизведение, редактирование и авторизацию других, чтобы использовать, воспроизводить и редактировать любые ваши комментарии в любых формах, форматах или носителях.",
          para13: "Гиперссылка на наш контент",
          para14: "Следующие организации могут перейти на наш Веб-сайт без предварительного письменного утверждения:",
          li9: "Правительственные учреждения.",
          li10: "Поисковые системы.",
          li11: "Новостные организации.",
          li12: "Дистрибьюторы онлайн-справочника могут подключится к нашему Веб-сайту таким же образом, как и гиперссылка на сайты других компаний, перечисленных в списке; и",
          li13: "Общесистемные аккредитованные предприятия, за исключением благотворительных некоммерческих организаций, благотворительных торговых центров и благотворительных групп по сбору средств, которые могут не гиперссылки на наш веб-сайт. Эти организации могут перейти к нашей домашней странице, к публикациям или к другой информации на веб-сайте, если ссылка: a) не является каким-либо образом обманчивой; b) не означает, что спонсорство, одобрение или одобрение связывающей стороны и ее продуктов и/или услуг не являются спонсорской; и c) вписывается в контекст сайта связующей стороны.",
          para15: "Мы можем рассмотреть и утвердить другие запросы на связь от следующих типов организаций:",
          li14: "-общеизвестные источники информации о потребителе и/или деловой информации;",
          li15: "сайты сообщества dot.com;",
          li16: "-ассоциаций или других групп, представляющих благотворительные организации;",
          li17: "Интернет-дистрибьюторы каталогов",
          li18: "интернет порталы;",
          li19: "бухгалтерские, юридические и консалтинговые фирмы; и",
          li20: "-учебные заведения и торговые ассоциации.",
          para16: "Мы утвердим ссылки на ссылки этих организаций, если мы решим, что: а) ссылка не заставит нас выглядеть неблагосклонно к себе или нашему аккредитованному бизнесу; b) организация не имеет каких-либо негативных записей с нами; c) преимущество для нас в связи с видимостью гиперссылки компенсирует отсутствие ${this.companyName}; и d) связь находится в контексте общей информации о ресурсах.",
          para17: "Эти организации могут связываться с нашей домашней страницей так долго, как ссылка: а) не является каким-либо образом обманным путем; b) не подразумевает под ложным подразумевать поручительство, одобрение или одобрение связывающей стороны и ее продуктов или услуг; и c) вписывается в контекст сайта связующей стороны.",
          para18: "Если вы одна из организаций, перечисленных в пункте 2 выше и заинтересованы в том, чтобы связать с нашим сайтом, вы должны сообщить нам, отправив сообщение по электронной почте в ${this.companyName}. Пожалуйста, включите ваше имя, название вашей организации, контактную информацию, а также URL вашего сайта, список URL, из которого вы собираетесь связать с нашим Веб-сайтом, и список URL на нашем сайте, на который вы хотите связать. Подождите 2-3 недели для ответа.",
          para19: "Утвержденные организации могут гиперссылку на наш Веб-сайт следующим образом:",
          li21: "Используя наше корпоративное название; или",
          li22: "-с использованием унифицированный указатель ресурсов, с которым связывается; или",
          li23: "С помощью любого другого описания нашего веб-сайта, связанного с этим, имеет смысл в контексте и формате контента на сайте связывания.",
          para20: "Ни логотип ${this.companyName}, ни другие произведения искусства не будут разрешены для связывания отсутствующего лицензионного соглашения о товарном знаке.",
          para21: "Без предварительного разрешения и письменного разрешения вы не можете создавать фреймы вокруг наших веб-страниц, которые каким-либо образом изменяют визуальное представление или внешний вид нашего Веб-сайта.",
          para22: "Мы не будем нести ответственность за содержание, которое появляется на вашем сайте. Вы согласны защищать и защищать нас от всех претензий, которые растут на вашем сайте. Никакие ссылки (ссылки) не должны появляться на любом веб-сайте, который может быть истолковано как непристойный, непристойный или преступный или который нарушает, в противном случае нарушает, или выступает за нарушение или иное нарушение прав третьих сторон.",
          para23: "Мы оставляем за собой право требовать, чтобы вы удаливали все ссылки или какую-либо конкретную ссылку на наш сайт. Вы можете немедленно удалить все ссылки на наш сайт по запросу. Мы также оставляем за собой право на то, чтобы полюбоваться этими терминами и условиями, и в любое время она увязывать политику. Постоянно связывая с нашим Веб-сайтом, вы обязуетесь быть связанными и следовать этим условиям связывания.",
          para24: "Если вы находите какую-либо ссылку на нашем сайте, которая является оскорбительной по какой-либо причине, вы можете связаться и сообщить нам в любой момент. Мы будем рассматривать просьбы об удалении ссылок, но мы не обязаны или не обязаны отвечать на вас напрямую.",
          para25: "Мы не гарантируем, что информация на этом сайте верна, мы не гарантируем ее полноту или точность; не обещаем, что сайт остается доступным или что материал на сайте хранится на сегодняшний день.",
          para26: "В максимальной степени, разрешенной применимым законодательством, мы исключаем все представления, гарантии и условия, касающиеся нашего веб-сайта и использования этого веб-сайта. Ничто в этом отказе не будет:",
          li24: "ограничить или исключить нашу или вашу ответственность за смерть или личную травму;",
          li25: "b) ограничить или исключить нашу или вашу ответственность за мошенничество или мошенническое недопредставленность;",
          li26: "b) ограничить любые наши или ваши обязательства любыми способами, которые не допускаются в соответствии с применимым правом; или",
          li27: "исключить любые наши или ваши обязательства, которые не могут быть исключены в соответствии с применимым правом.",
          para27: "Ограничения и запреты, установленные в настоящем разделе и в других статьях этого заявления об оговорках: a) подпадают под действие предыдущего пункта; и b) регулируются все обязательства, возникающие в связи с оговоркой, включая обязательства, возникающие в связи с контрактом, в факте и в связи с нарушением установленных законом обязанностей.",
          para28: "Пока сайт и информация и услуги на сайте предоставляются бесплатно, мы не будем нести ответственность за какие-либо потери или повреждения какой-либо природы."
        }
      }
    }
  }
}
</script>
