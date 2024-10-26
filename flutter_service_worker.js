'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "af57622e8150c16fc4489ab3f9fc68f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d7764edc8c794d461959e78841dbd538",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5003c19cf9b8766d3735286fa240edbd",
".git/logs/refs/heads/main": "9e4f7bc968f0ea506b7f9ad8c1c5091a",
".git/logs/refs/remotes/origin/main": "571a2544d91bc349abf12f2985d615b2",
".git/objects/06/948aebdabe0fbb8b3b589b8f8e80327eee0b3c": "da61c4aecf30c3c4b990ac71539ac372",
".git/objects/06/96ae10acf0e2ca54c751c57b543261f8bf5412": "0fc7b223090c72f831a6983386909474",
".git/objects/07/69e0297e26b50ccbc295558a7c332c0019c441": "10f28bba03b2e31a500bac9784272f7f",
".git/objects/08/1c0ca60a4d6132e1ba5ffb65075ce3d04e71ba": "b1ed134a476e414adde72e51ff38816f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/f2e56ee11bdffc387db464385b39921b8081a3": "5aea45c118fe5a6473e65ad13eb94d98",
".git/objects/09/6b657925dd01d9a0bf88859940b0d5800e5d57": "e82fdd75af2686be1e3b9295274cfe9f",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/b549b6b93831f02ae4b6d304070241da38bba0": "1096e559907cdd58c2a0e27ba5e22f68",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/12/2bef2d08beb4f46d05f7855cce066d221f7ea6": "e15b86ccd53beb2b307270a3a124964d",
".git/objects/15/c7f30ebede87fae4c383024169bf1845d00699": "2fd34e56dda6b334f96205c0178f22db",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/19/5e42a89d42346f596fd9eb8a453707071ccae9": "68a9537d5fb81e65f9d5157f8173f048",
".git/objects/1c/76a4613d31189aec848f256589422f3d26a5a0": "c4cae9f676e55604b7c837012a07af2f",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1e/3f68b24acd2060bf0995eb393ae42291396523": "8b373522c3508f05178640406fa272bb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/467ba5b5723dba2ae9230ed9d53f8851130fc5": "a592a5b4577d59418e7d52553bd3b45e",
".git/objects/20/69486a7ca3dd7ce08119e8a8dca9630aa3b67b": "f7c2dd51f158eb3c69227eac0c699e8f",
".git/objects/23/2a3d1871cf94abb573c4f0859d708444fb188f": "449faa56d356ed43f1716e8eb344414f",
".git/objects/27/60cd421c3bab74b0605a3273d41175b90d727a": "69bc7fdf33ead0d4c044e6fce1a9b7be",
".git/objects/28/136621bb9c90e49b254b8454cb2cc39ddf5c95": "43650d04945fe61ed25e6403730bb0da",
".git/objects/28/39f263ffd008e4cb8f9efa2a9e01bbb54947af": "46ddd42e5c7ec57a865a14a1471d87f6",
".git/objects/2a/669f3d186cb1b3d0ae4688b413b2cea3324500": "2e08f529410cc01cacafa27c143a91fb",
".git/objects/2e/26228f5d47e6844c6ca5afe1764aa3b2e2f732": "5bc76a4d9d642eb879ce94ea75cbc92d",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/30/2773e026bc8cce73faf881be90669b41b96819": "bd66091b9d3b14a2b513a76641efb7ad",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/57d588cfb89f9531875ffbeeee153cc3f72871": "3601fc05332dd2edc23f45ccf4d88c85",
".git/objects/39/82168a7654564a299a8450099f535c4cf82bcb": "5721e380b09aac3eb95c35072f1580c6",
".git/objects/3a/21413a3f54535e596263910a440bc3583a9c3e": "db552466458434b70fa4737c86da6523",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/3e627171da172c81269facbe5376d8d1625aa6": "a5d7f5e4734d9f4d2bec186e4ee506a3",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/d53c7be912542c11f328990f5243e6b3b80448": "f3f38af89456ee4305ef941708b847b6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/c8ecad0c482af982caa86705e48ecfbd8c8b7d": "59aab1a4ccac56a86f1f454dfbe0e5c9",
".git/objects/4f/2a00e443bd2a92e692a04a42fe6aa982a2f436": "625c62a9c1d637f71e5f1e191baf7e92",
".git/objects/50/62feef44f1a93eedeadeaccff6282f196c1b64": "ff3601516ea60260022ed1a3e7a69036",
".git/objects/52/0b6e03e5e04bd6cab2db4bedbcd42b9ef45619": "0ca7135352591340d409636a422f74af",
".git/objects/54/74000636e1845e2461a72dc08bc5c51da42fa2": "46791313d90c09cb8597f1f007d1165b",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/5c/309e0b2cda8a563ba92c680dc581d9905de986": "24fe408e1d2eaa604f80b573dd18ba26",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/63/65a889d0aec563269ab2d7e59da6de632e1d96": "e2527dad4dc696ba7df2e0dd6d2f7ff3",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/68/f00d10a7e507781d2a95ded970010d5d6aab89": "45ef67093b1a60aa5ec297ef894c319d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/2d80ee8d3696f6d33723c4282812dba1fc9354": "3877bc26696af5035b17396243dfebb6",
".git/objects/6d/3fad72990cc059cfa06bccdba42808410de859": "fa89826e153a435445bb1a2164b75446",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/77/13f29be8f656d1ae56934e042d7545e3f26cad": "7160d421e2ec655fbe378aa4d1a57050",
".git/objects/77/f9d00df486ebe23f80044a315896ce3fa49a3f": "a8381d2ac8eac859bc1d03425bd8b730",
".git/objects/7a/f4e3b72dc3bb92bec20e25f9a2ba11129864a2": "0ced2126c71e01d70c0983960fb4477a",
".git/objects/7b/d7bc36efb6625c7296391b384aec75b9596bde": "15760b70b1f42df2056229758a5799c7",
".git/objects/7d/29076005722c5ee24a33e58d9e455e138ef2ab": "6cc42cc8de9052cb97053d9fd34b7afb",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d602e61e2e8727b3def54d526cc6b05b8d6183": "0b0c6b73ad2f92b903348986f4ec5a10",
".git/objects/85/eb3a1321425e908ed5ba0964a45bfd36c33e58": "39d6ee8fe48e5c25c864309395129c79",
".git/objects/8a/21d4d90f6a97278805c94aa5988fb4e4e0a4a2": "66e312acc6052d0972de61425f5aece7",
".git/objects/8c/c62554e79427d946f22a298014337295cc95d9": "a03b3b4611853462a8a1e27fd9dd5a46",
".git/objects/8e/1b607d2cf352bfcf744147375fffba1ec7014e": "970108445da4755de8a79025517d4745",
".git/objects/8e/93d7a08643441e5c0c49dad869df3dcb26bc2b": "5c13636e2bbf1ba234161c5ed14cc95d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/b03ddfcad150acc8c034bc972bc57333bcb033": "da70478cfea70dc4c4fc5f59e580bf92",
".git/objects/93/d7a5071d35b369cae190de8a048b255f0057a2": "a55b8da51fce0a8b5ca66b92701389fd",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/6ca7cd48d3684727122ff0c9f86cdac99ed362": "5a1271390db796a92c30b3cd58e8dfc5",
".git/objects/9a/8f135f38696af70407fafd95a0977b837db5ef": "5e95001bbcedf104536fbeb7b96ac622",
".git/objects/a1/8a8b81987c34afba5d987544210a314710aaf0": "913941bf7b5bd2456e4a1a8b2e2d92cb",
".git/objects/a8/962bb6393f9f2b1e10b50c0661edc8999eb4e7": "24346a3adad6a523a219ed5c49455959",
".git/objects/ab/64a68fe0cb141a76263ec513c7050baf5b31fb": "5ee40dc7cd6e6d4afe66d0927d148387",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ec4784e0ef623092a72d379249d5f7e83eb761": "90591d6a1742887e62db6fb59055ace0",
".git/objects/be/4b2a920a005cba66bd4647d91931a9e929c8c8": "723aaf73d9d6b20363a64fa26a2036cc",
".git/objects/c4/b2efae8dada81ad04a8c166c37d7ca0fe0339f": "426e2cb3d9a24905532b1d53f95b199e",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/37c0721793555200b2457987ca0ea53164e13c": "90c6e051cec89da4458d2a0bbbb1cd09",
".git/objects/d5/a9dc8be404bcb7407ed011e352314c9e6d62ae": "8755771f7c9b7f603e064f4f91f56862",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d8/bc100f69bf46d67dcf53847f308efee74a70c0": "2b9a0b6c226d2be04009baf4c25dc78b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/de/19ad8efc4b2ea2f98f7c64832fd3f9b96e2e35": "de31e147bcedf5e993871629be2afc6c",
".git/objects/df/e7f8d8d5af90d9e049a24cf4c2b4fc179aa11b": "68dbfb1bbe93d35744862cf231b72f44",
".git/objects/e0/187c5f32f6c69e94f26164fb7415a5bf12bf06": "922f212905a3f63b12b80667654ee9a5",
".git/objects/e0/67e98b0278a25ba3202c15fe0b4e147537e2e5": "4c552555ae70795f7037038e1c687360",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/ec/e5c5c8ace12ecb07c2f36a19ec0d58e55952a0": "5914746b4d281862649e79e2a9b2bd57",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/df6a90ba25a1435b2dadad0b76db6d7348452e": "9a633241c4871acaa462715f30beeb63",
".git/objects/f3/15f6cfba9811d88ca4df6b7291ba42926dd1ba": "ebe367902a8fb8c2b736c53684bdabe0",
".git/objects/f8/7bfbe9781ad127d24eee17923a8b2c65f18a5c": "a2107a156f1bd4bcccb3756578097a06",
".git/objects/fc/7631a16e8e9eb6131112143b257e0718ea7cd3": "8c35de0eb063ee976b38d66082a3d8fd",
".git/objects/fd/5a4d30a269ff1b0f6267d3b97a656d5f10b250": "0df733f717498f0c5b4866d8dbabb9b8",
".git/objects/fe/755fe5a1053508176dd64a9fa43c169548c9a6": "ae0288c733bf449ca5f5594e2316568b",
".git/objects/ff/c93d76066f15043671796c8cfed1a68b3b599c": "966b2facc560e9177c010f5ff62ac2dc",
".git/refs/heads/main": "1c6fc2307635b767ec95af7182fa70c4",
".git/refs/remotes/origin/main": "1c6fc2307635b767ec95af7182fa70c4",
"assets/AssetManifest.bin": "73ae363dffbd38da1a9162bda54aea0a",
"assets/AssetManifest.bin.json": "a89cfd2a7e5b3c5e2b76db2088775a75",
"assets/AssetManifest.json": "7d80d8eb67544efaf59dfeb4bb132c63",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "08a31ef0bcf2a4985204fdf3172ba582",
"assets/images/afaq-Logo%255B1%255D.png": "1a3e58266639bd9a5f621ed2b0303f7b",
"assets/images/afaq-Logo.png": "bc0b6ffd8a2e53345521bb9f6aa9958f",
"assets/images/afaq_event/photo_5796200955027507363_y.jpg": "dfed91f7ac715a33d4edc023fb16fc2f",
"assets/images/afaq_event/photo_5796200955027507366_y.jpg": "e26eadbe95a04d08451be9e2521e440d",
"assets/images/afaq_event/photo_5796200955027507368_y.jpg": "f9fa666d0c71adcd18fb240a021e996a",
"assets/images/afaq_event/photo_5796200955027507372_y.jpg": "722df138ae56c17a07914432ca6ff6a2",
"assets/images/afaq_event/photo_5796200955027507393_y.jpg": "909a0287d9c5f7dbb25679811ddb1836",
"assets/images/afaq_event/photo_5803315718677184857_y.jpg": "ba2732078d16b4924143990e8f92bcdf",
"assets/images/afaq_event/photo_5812398775644307803_y.jpg": "6e47f4c92908044609d76d182b04c661",
"assets/images/afaq_event/photo_5812398775644307805_y.jpg": "e07895730a092035a3483d2e8a8f3887",
"assets/images/afaq_event/photo_5812398775644307806_y.jpg": "c2c5085a6facac3a362808cb2903712c",
"assets/images/afaq_event/photo_5839078910623597153_y.jpg": "abf21f2f46b1dcba678dfdabaf36d706",
"assets/images/afaq_event/photo_5839078910623597162_y.jpg": "b66b5713d4fa52164df2dc73c998df40",
"assets/images/afaq_event/photo_5870462163641024962_y.jpg": "8d791c046c33c3c8b54be8e0a3019ed3",
"assets/images/afaq_event/photo_5904325073077125561_y.jpg": "f29607e048a5c925092cd6b124207cce",
"assets/images/afaq_event/photo_5904325073077125573_y.jpg": "732e262d7383732796bcdc43f9fb275e",
"assets/images/afaq_event/photo_5904325073077125576_y.jpg": "57a5726802bcd83be37c586b00687818",
"assets/images/afaq_event/photo_5904385507561948189_y.jpg": "ae20b4c9c4a1b518a620debf76107354",
"assets/images/afaq_event/photo_5913734139536852350_y.jpg": "dd176f54c1aad085e02a1de59ec2ece4",
"assets/images/afaq_event/photo_5915842405838473835_y.jpg": "62353a73f215857c01f6d29624b5dbeb",
"assets/images/afaq_event/photo_5971819285837890575_y.jpg": "5f446fa82a9293d38812fcda7a98c2fd",
"assets/images/book.PNG": "82b7512e879a657823bdefdaac121e0f",
"assets/images/Calculate_the_average.png": "9110554703c13a766724c73eb1019397",
"assets/images/college/college_map/photo_5823287505582147389_y.jpg": "4cb1bf2e3394e44079db91302ecc9a33",
"assets/images/college/college_map/photo_5823287505582147390_y.jpg": "226093d3f43a8ba55ecf00a2efe4c909",
"assets/images/college/college_map/photo_5823287505582147391_y.jpg": "14bdd7e06105d03cf992a4b5c4cd2887",
"assets/images/college/photo_5825796432202942126_y.jpg": "fe4e2dc341b9997f1c62f66127873b90",
"assets/images/college/photo_5825796432202942127_y.jpg": "efdfa136323e2570f2887fa62fd10e77",
"assets/images/college/photo_5825796432202942132_y.jpg": "0957881ab7fa2d42829bc4fd6d749a58",
"assets/images/college/photo_5825796432202942134_y.jpg": "7374d5620e78cc2215c51a6fe9c593cc",
"assets/images/college/photo_5825796432202942135_y.jpg": "03f5f7dcd6e9ccf4a81269bb99ec4b8e",
"assets/images/college/photo_5825796432202942137_y.jpg": "1e677ce7b6c8ab2c4ee959a2273964da",
"assets/images/college/photo_5825796432202942140_y.jpg": "3cef0d241fdc0f62ca503790fec9012b",
"assets/images/college/photo_5825796432202942145_y.jpg": "1632859212979ae398fd22cb6bdb4ecc",
"assets/images/college/photo_5825796432202942147_y.jpg": "ee3b3eb3fe0ec7b916a5ad895f2ec190",
"assets/images/college/photo_5825796432202942148_y.jpg": "c1879a356c7053138d016f1d06593244",
"assets/images/college/photo_5825796432202942150_y.jpg": "4b7e7cd3ee8b0f890bde485265368de1",
"assets/images/college/photo_5825796432202942151_y.jpg": "ce89a5557179477f1838d242aee310aa",
"assets/images/college.png": "898661666d8739563b9d02cf0f63174d",
"assets/images/Email.png": "456b5b1c02e307d3ee0eaaab35f1a0e4",
"assets/images/eye_slash.png": "db5ab2e340b3f597c96b20f095b4b4d4",
"assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/images/icon_app.jpeg": "84bc3d3e61ed7ada9b35131d98fd9550",
"assets/images/icon_app.png": "2f201fb5a08dc13c52e7da354b244867",
"assets/images/Instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/images/linkein_logo.png": "cda9eebfa551b8252a0c01e9696b8c4c",
"assets/images/major.png": "5faecee99c5430d550124a193ac1a918",
"assets/images/photo_college_rel.jpg": "d15e33c4e997809f5779b3b1502a7ef0",
"assets/images/remove_red_eye.png": "b95af9ff5af2eed8aeac9abe91a45bb7",
"assets/images/whatsapp.png": "ba4abe2ff4561d005e46b4cee3d4d62a",
"assets/NOTICES": "6305417c4f249e441733a9229544411b",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "767606eae14b34c662b2227a1afde02d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1e71f2884107ffa86188829a4bd3a292",
"icons/Icon-192.png": "0c2b3c6ed401663720afd16653f7170f",
"icons/Icon-512.png": "501a0035406b21037901ff6bf0640709",
"icons/Icon-maskable-192.png": "0c2b3c6ed401663720afd16653f7170f",
"icons/Icon-maskable-512.png": "501a0035406b21037901ff6bf0640709",
"index.html": "b7b9f395c10bcfb4267d5c7be0b6448c",
"/": "b7b9f395c10bcfb4267d5c7be0b6448c",
"main.dart.js": "f5e520026c60399cd4db7d29f8c7c101",
"manifest.json": "0f021758f581d9600c41de1ab8315ee4",
"version.json": "132168629b4f5aeca8ff3c7bf28c6daa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
