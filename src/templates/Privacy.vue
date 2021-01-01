<template>
  <q-page padding class="fit scroll q-px-md" id="privacy_page">
    <h1 class="text-h3 text-wrap">{{$t('navigation.PrivacyPageTitle')}}</h1>
    <p class="text-justify">{{$t('privacy.p1')}}</p>
    <p class="text-justify">{{$t('privacy.p2')}}<span @click="openURL.open(`mailto:info@${this.companyUrl}?subjuct=EMail%20from%20${this.companyurl}`)">{{$t('privacy.here')}}</span></p>
    <p class="text-justify">{{$t('privacy.p3')}}</p>
    <h2 class="text-h3">{{$t('privacy.consent')}}</h2>
    <p class="text-justify">{{$t('privacy.p4')}}</p>
    <h2 class="text-h3">{{$t('privacy.collect')}}</h2>    
    <p class="text-justify">{{$t('privacy.p5')}}</p>
    <p class="text-justify">{{$t('privacy.p6')}}<span @click="openURL.open(`mailto:info@${this.companyUrl}?subjuct=EMail%20from%20${this.companyUrl}`)">{{$t('privacy.here')}}</span></p>
    <p class="text-justify">{{$t('privacy.p7')}}</p>
    <h2 class="text-h3">{{$t('privacy.how')}}</h2>
    <p class="text-justify">{{$t('privacy.p8')}}</p>
    <ul>
      <li>{{$tc('privacy.p8ul1')}}</li>
      <li>{{$tc('privacy.p8ul2')}}</li>
      <li>{{$tc('privacy.p8ul3')}}</li>
      <li>{{$tc('privacy.p8ul4')}}</li>
      <li>{{$tc('privacy.p8ul5')}}</li>
      <li>{{$tc('privacy.p8ul6')}}</li>
      <li>{{$tc('privacy.p8ul7')}}</li>
    </ul>
    <h2 class="text-h3">{{$tc('privacy.log')}}</h2>
    <p>{{$tc('privacy.p10')}}</p>
    <h2 class="text-h3">{{ $tc('privacy.Advertising')}}</h2>
    <p>{{ $tc('privacy.p11') }}</p>
    <p>{{ $tc('privacy.p12') }}</p>
    <p>{{ $tc('privacy.p13') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.third') }}</h2>
   <p>{{ $tc('privacy.p14') }}</p>
   <p>{{ $tc('privacy.p15') }}</p>  
    <h2 class="text-h3">{{ $tc('privacy.ccpa') }}</h2>
    <p>{{ $tc('privacy.p16') }}</p>
    <p>{{ $tc('privacy.p17') }}</p>
    <p>{{ $tc('privacy.p18') }}</p>
    <p>{{ $tc('privacy.p19') }}</p>
    <p>{{ $tc('privacy.p20') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.gdpr') }}</h2>
    <p>{{ $tc('privacy.21') }}</p>
    <p>{{ $tc('privacy.22') }}</p>
    <p>{{ $tc('privacy.23') }}</p>
    <p>{{ $tc('privacy.24') }}</p>
    <p>{{ $tc('privacy.25') }}</p>
    <p>{{ $tc('privacy.26') }}</p>
    <p>{{ $tc('privacy.27') }}</p>
    <p>{{ $tc('privacy.28') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.children') }}</h2>
    <p>{{ $tc('privacy.29') }}</p>
    <p>{{ $tc('privacy.30') }}</p>
  </q-page>
</template>

<script>
import { meta } from 'waelio-utils'
import { openURL } from 'quasar'
export default {
  name: 'Privacy',
  props:{
    companyName:{
      type: String,
      required: true,
      default: 'NorthWestMeta'
    },
    companyUrl: {
      type: String,
      required: true,
      default: 'northwestmeta.com'
    }
  },
  data(){
    return {
      metaTags: {
        title: `${this.companyName} | ${$t('navigation.PrivacyPageTitle')}`,
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: `https://${this.companyUrl}`,
        image: 'nwm_logo.png'
      }
    }
  },
  meta,
  i18n: {
    messages: {
      en:{
        general: {
          SiteTitle: `${this.companyName}`,
        },
        navigation:{
          PrivacyPageTitle: "Privacy Page",
        }, 
        privacy: {
          p1: `At ${this.companyName}, accessible from https://${this.companyUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${this.companyName} and how we use it.`,
          p2: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
          here: "Here",
          p3: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ${this.companyName}. This policy is not applicable to any information collected offline or via channels other than this website.`,
          consent: "Consent",
          p4: "By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit the <router-link to='/terms'>Terms & Conditions</router-link>.",
          collect: "Information we collect",
          p5: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
          p6: "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
          p7: "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.",
          how: "How we use your information",
          p8: "We use the information we collect in various ways, including to:",
          p8ul1: "Provide, operate, and maintain our website",
          p8ul2: "Improve, personalize, and expand our website",
          p8ul3: "Understand and analyze how you use our website",
          p8ul4: "Develop new products, services, features, and functionality",
          p8ul5: "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
          p8ul6: "Send you emails",
          p8ul7: "Find and prevent fraud",
          log: "Log Files",
          p10: `${this.companyName} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
          Advertising: "Advertising Partners Privacy Policies",
          p11: `You may consult this list to find the Privacy Policy for each of the advertising partners of ${this.companyName}.`,
          p12: "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ${this.companyName}, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
          p13: `Note that ${this.companyName} has no access to or control over these cookies that are used by third-party advertisers.`,
          third:"Third Party Privacy Policies",
          p14: `${this.companyName}'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.`,
          p15: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
          ccpa:"CCPA Privacy Rights (Do Not Sell My Personal Information)",
          p16:"Under the CCPA, among other rights, California consumers have the right to:",
          p17:"Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
          p18:"Request that a business delete any personal data about the consumer that a business has collected.",
          p19:"Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
          p20:"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
          gdpr:"GDPR Data Protection Rights",
          p21: "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:",
          p22: "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.",
          p23: "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
          p24: "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
          p25: "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
          p26: "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
          p27: "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
          p28: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
          children: "Children's Information",
          p29: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
          p30: `${this.companyName} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`
        }
      },
      ru:{
        navigation:{
          PrivacyPageTitle: "Privacy Page",
        }, 
        privacy: {
          p1: `At ${this.companyName}, accessible from https://${this.companyUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${this.companyName} and how we use it.`,
          p2: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."
        }
      },
      he:{
        navigation:{
          PrivacyPageTitle: "פרטיות",
        }, 
        privacy: {
          p1: `At ${this.companyName}, accessible from https://${this.companyUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${this.companyName} and how we use it.`,
          p2: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."
        }
      },
      ar:{
        navigation:{
          PrivacyPageTitle: "الخصوصية",
        }, 
        privacy: {
          p1: `في ${this.companyName}, يمكن الوصول إليه من https://${this.companyUrl} , إحدى أولوياتنا الرئيسية هي خصوصية زوارنا. تحتوي وثيقة سياسة الخصوصية هذه على أنواع المعلومات التي يتم جمعها ومسجلة بواسطة ${this.companyName} وكيف نستخدمها.`,
          p2: "إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة الخصوصية الخاصة بنا , فلا تتردد في الاتصال بنا.",
          here: "هنا",
          p3: "تنطبق سياسة الخصوصية هذه فقط على أنشطتنا عبر الإنترنت وهي صالحة لزوار موقعنا على الويب فيما يتعلق بالمعلومات التي شاركوها و / أو يجمعوها في ${this.companyName}. لا تنطبق هذه السياسة على أي معلومات تم جمعها في وضع عدم الاتصال أو عبر قنوات أخرى غير هذا الموقع.",
          consent: "الموافقة",
          p4: "باستخدام موقعنا , فإنك توافق بموجب هذا على سياسة الخصوصية الخاصة بنا وتوافق على شروطها. للحصول على الشروط والأحكام الخاصة بنا , يرجى زيارة <router-link to='/terms'>البنود والشروط</router-link>.",
          collect: "المعلومات التي نجمعها",
          p5: "سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها , وأسباب مطالبتك بتقديمها , عند النقطة التي نطلب منك فيها تقديم معلوماتك الشخصية.",
          p6: "إذا اتصلت بنا مباشرة , فقد نتلقى معلومات إضافية عنك مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومحتويات الرسالة و / أو المرفقات التي قد ترسلها إلينا وأي معلومات أخرى قد تختار تقديمها .",
          p7: "عند التسجيل للحصول على حساب , قد نطلب معلومات الاتصال الخاصة بك , بما في ذلك عناصر مثل الاسم واسم الشركة والعنوان وعنوان البريد الإلكتروني ورقم الهاتف.",
          how: "كيف نستخدم معلوماتك",
          p8: "نستخدم المعلومات التي نجمعها بطرق مختلفة , بما في ذلك:",
          p8ul1: "توفير وتشغيل وصيانة موقعنا الإلكتروني",
          p8ul2: "تحسين موقع الويب الخاص بنا وتخصيصه وتوسيعه",
          p8ul3: "فهم وتحليل كيفية استخدامك لموقعنا على الويب",
          p8ul4: "تطوير منتجات وخدمات وميزات ووظائف جديدة",
          p8ul5: "التواصل معك , إما مباشرة أو من خلال أحد شركائنا , بما في ذلك لخدمة العملاء , لتزويدك بالتحديثات والمعلومات الأخرى المتعلقة بالموقع ولأغراض تسويقية وترويجية",
          p8ul6: "إرسال رسائل بريد إلكتروني إليك",
          p8ul7: "البحث عن الاحتيال ومنعه",
          log: "ملفات السجل",
          p10: `${this.companyName}ت تبع إجراءً قياسيًا لاستخدام ملفات السجل. تسجل هذه الملفات الزائرين عند زيارتهم لمواقع الويب. تقوم جميع الشركات المضيفة بذلك وهي جزء من تحليلات خدمات الاستضافة. تتضمن المعلومات التي يتم جمعها بواسطة ملفات السجل (عناوين IP) ,ونوع المتصفح , وموفر خدمة الإنترنت (ISP) ,وطابع التاريخ والوقت , وصفحات الإحالة الخروج , وربما عدد النقرات. وهذه ليست مرتبطة بأي معلومات يمكن التعرف عليها شخصيًا.والغرض من المعلومات هو تحليل الاتجاهات وإدارة الموقع وتتبع حركة المستخدمين على الموقع وجمع المعلومات الديموغرافية.`,
          Advertising: "سياسات خصوصية شركاء الإعلانات" ,
          p11: `يمكنك الرجوع إلى هذه القائمة للعثور على سياسة الخصوصية لكل من شركاء الإعلان في ${this.companyName}.`,
          p12: "تستخدم خوادم الإعلانات الخارجية أو شبكات الإعلانات تقنيات مثل ملفات تعريف الارتباط أو جافا سكريبت أو إشارات الويب المستخدمة في الإعلانات والروابط الخاصة بكل منها والتي تظهر على ${this.companyName} , والتي يتم إرسالها مباشرة إلى متصفح المستخدمين. تلقي عنوان IP الخاص بك عند حدوث ذلك. تُستخدم هذه التقنيات لقياس فعالية حملاتهم الإعلانية و / أو لتخصيص محتوى الإعلان الذي تراه على مواقع الويب التي تزورها. ",
          p13: `لاحظ أن ${this.companyName} ليس له حق الوصول أو التحكم في ملفات تعريف الارتباط هذه التي يستخدمها معلنون من جهات خارجية.`,
          third: "سياسات خصوصية الطرف الثالث",
          p14: `لا تنطبق سياسة خصوصية ${this.companyName} على المعلنين الآخرين أو مواقع الويب. وبالتالي , فإننا ننصحك بالرجوع إلى سياسات الخصوصية الخاصة بخوادم إعلانات الجهات الخارجية هذه للحصول على مزيد من المعلومات التفصيلية. وقد تتضمن ممارساتهم وإرشادات حول كيفية إلغاء الاشتراك في بعض الخيارات.`,
          p15: "يمكنك اختيار تعطيل ملفات تعريف الارتباط من خلال خيارات المستعرض الفردية الخاصة بك. لمعرفة المزيد من المعلومات التفصيلية حول إدارة ملفات تعريف الارتباط مع متصفحات الويب المحددة , يمكن العثور عليها في مواقع الويب الخاصة بالمتصفحات.",
          ccpa: "حقوق خصوصية CCPA (لا تبيع معلوماتي الشخصية)" ,
          p16: "بموجب CCPA , من بين حقوق أخرى , يحق للمستهلكين في كاليفورنيا:" ,
          p17: "اطلب أن تكشف الشركة التي تجمع البيانات الشخصية للمستهلك عن فئات وأجزاء معينة من البيانات الشخصية التي جمعتها الشركة عن المستهلكين." ,
          p18: "اطلب من شركة ما حذف أي بيانات شخصية عن المستهلك جمعتها الشركة." ,
          p19: "اطلب ذلك",
          p20: "إذا قدمت طلبًا ، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في ممارسة أي من هذه الحقوق ، فيرجى الاتصال بنا." ,
          gdpr: "حقوق حماية البيانات في اللائحة العامة لحماية البيانات" ,
          p21: "نود التأكد من أنك على دراية كاملة بجميع حقوق حماية البيانات الخاصة بك. يحق لكل مستخدم ما يلي:" ,
          p22: "الحق في الوصول - يحق لك طلب نسخ من بياناتك الشخصية. قد نفرض عليك رسومًا رمزية مقابل هذه الخدمة." ,
          p23: "الحق في التصحيح - يحق لك أن تطلب منا تصحيح أي معلومات تعتقد أنها غير دقيقة. كما يحق لك طلب إكمال المعلومات التي تعتقد أنها غير كاملة." ,
          p24: "الحق في الحذف - يحق لك طلب مسح بياناتك الشخصية ، في ظل ظروف معينة." ,
          p25: "الحق في تقييد المعالجة - يحق لك طلب تقييد معالجة بياناتك الشخصية ، في ظل ظروف معينة." ,
          p26: "الحق في الاعتراض على المعالجة - يحق لك الاعتراض على معالجتنا لبياناتك الشخصية ، في ظل ظروف معينة." ,
          p27: "الحق في نقل البيانات - يحق لك أن تطلب منا نقل البيانات التي جمعناها إلى مؤسسة أخرى ، أو إليك مباشرةً ، في ظل ظروف معينة." ,
          p28: "إذا قدمت طلبًا ، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في ممارسة أي من هذه الحقوق ، فيرجى الاتصال بنا." ,
          children: "معلومات الأطفال" ,
          p29: "جزء آخر من أولويتنا هو إضافة الحماية للأطفال أثناء استخدام الإنترنت. نشجع الآباء والأوصياء على مراقبة نشاطهم عبر الإنترنت والمشاركة فيه و / أو مراقبته وتوجيهه." ,
          p30: `لا تجمع ${this.companyName} عن قصد أي معلومات تعريف شخصية من الأطفال دون سن 13 عامًا. إذا كنت تعتقد أن طفلك قدم هذا النوع من المعلومات على موقعنا الإلكتروني ، فنحن نشجعك بشدة على الاتصال بنا على الفور وسنقوم بذلك نبذل قصارى جهدنا لإزالة هذه المعلومات على الفور من سجلاتنا`
        }
      }
    }
  }
}
</script>
