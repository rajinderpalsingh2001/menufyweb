'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c38394379a03d0294b60cc8aac8a52ab",
".git/config": "e52fd5847716ab37a1af90217ab67b80",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "56a65c52b4b2809213d196d0de258836",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c35c325daf5f1a551f1551c0577fc2a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c68f46ebd4a439d746456658ee6770d",
".git/logs/refs/heads/master": "47e50999ce60300c5fecfbd47bc5a13c",
".git/logs/refs/heads/webfiles": "c3263603b5d6a7425fd8f4c7544eabf3",
".git/logs/refs/remotes/origin/master": "6be300fa40849c35ae45ed2b178ce763",
".git/logs/refs/remotes/origin/webfiles": "ffd017cfb5f42d0c4fc19a0a9fb8e034",
".git/objects/02/9cd99c093c035a2352f626e83bfe4007b625b3": "d67472636c7f2056e3857351685d3a31",
".git/objects/04/66ad533ca096ba3bdbf88591c013038fd1c761": "ad4519738c9c98c4af994744136b2dd2",
".git/objects/06/043a6b414bebd5fb3778eae7306989fa19ffbe": "9ab624330761535628943705e1d0ca6c",
".git/objects/07/af5706c2687c556ec513dbd3c730ad720db42e": "1c4a0815a48c7448a366b7f0f20caf34",
".git/objects/09/388ae15aa22e3e71ebedcea3cfc992143619c6": "b7c65235de0771b4d834e61c50edd26d",
".git/objects/09/7a9b3a4b5f5d34415108233a38382b424fad57": "cda2a6cb6c35d1d54042827eeb0cda4e",
".git/objects/0b/1d8787c367955452ef0b026e22d276b80b225e": "5216425be3c58d91f8f211e8a5cf4fc8",
".git/objects/0c/6a8b8df3214cd1c17c00f35f1c77b20ebf22d7": "0415cd3abb87deee159a0871676b4f32",
".git/objects/0c/a8bda10ef5064b4395265e1540349cdf216239": "908598446eeaf56550939c8214329383",
".git/objects/0d/6cf0ab9159cf6995fda45aafcfe3cdb465d991": "d9c9ed8487cdf9038646b7508a285ea6",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/18/199a96d0850a512df3f35c8bc46d9047e9a139": "adac0f8856e6d7c659fb186871652bcb",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/8b0f34437e139382f592b43c00418c7af11b32": "904ed6a68fce24e9a727e476fd3bebde",
".git/objects/23/23733fac4b7264c825994f8f23fa20525c0c49": "de22f800ba9d097112981a04af37df5a",
".git/objects/23/a22bf793d066c356b55ab31729f7e934fee409": "b480decbb661e58c774bb603bee9d648",
".git/objects/24/04d8be9df2342af72c4ea2bd45f3c065e8050b": "13d1e2e2230f1aef8d57e231d588c7fc",
".git/objects/26/652abe87571ec6b664b911f07bc7b59150a583": "e357194f7751bc4439478e0c8056cf39",
".git/objects/27/1051c394cfb5a95b3b594373f97aee4df67447": "1745b9c160b4628269d5065e368de60f",
".git/objects/29/598600916c2943a6561291da92d5a7f7baf917": "fefe9e64e0fc2bbf93c4728df59bbee2",
".git/objects/2b/c8ae41702672dd9b466449989dfabfd6a84f52": "b5c9e3b14781c2eee719a989c80d4898",
".git/objects/31/96c2397ebe29a6a0c0464d9652551f538ee428": "ba705890812dedf0754b79001684dc0d",
".git/objects/32/2d2e806306a501d98b2419c99600fcb8097f39": "f727162a554057aec194851efdef677f",
".git/objects/32/719aa85a27d4b05af06f020ade440f2ad0db75": "ebf17b7d1b1dd6a0b64298a313014a98",
".git/objects/33/22ff8743dd3ee97f3909163dac2ca1c97e521f": "46d2fe5e9de5f273f528284815c086eb",
".git/objects/34/6627a482abcf78abbcb21f7abbb7e09a7cb101": "b06dc256e6a6cfa771eb1b8f981515d3",
".git/objects/34/f8d307e2c8bb14a9350eca1b9efaa15c44b216": "9a19b7b8e4c3c389b30bcabcc8eb0b20",
".git/objects/37/4868ffb7e050c1e7d1e013cdddbae674e09356": "56aa88ad4b1881eaf8bbde2fb2aeda1d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/3b/6eb5e4e0e58ba39147066adeec1096afe56648": "66765226d3eb6ae3a1ebdf873c89545d",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/d95c0b1c7cbe5c04aa6f11da18be50d692b4cc": "761dc918c2f649616ca52b72d2b3ab0e",
".git/objects/3c/139645488108aa98ea7f3c77d80765e0bbe4db": "543218f7e1a25008675285af5324afb3",
".git/objects/3e/96900785b039416afbbc4d5f958f7573bec910": "3817f824f170a403dcdaa20549851880",
".git/objects/40/21620b36b8df2afa16823a22be2503721b1cf5": "bd0c284e74272800427c124a0026e122",
".git/objects/40/826bec7f02a9ab96061774703f76d3a153dce2": "9186e12701c52e6d5703bc0eea34332f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/7575024904a4312ccbbbfa9505a30ac183e42c": "1c528732da617f7e0ccffed5e4b18063",
".git/objects/44/7b832225d5adbb40f2813475f4913d118ad688": "47c840407df893acdde97d8001fcb468",
".git/objects/45/edaa22e2174fa7016cc0c31f97461b31275067": "e5f0ce04044c1a7e39fead865ea670fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3109827c1554a6d4dd9f84ef7d22d35bb31f32": "52369dd6ce54eeca4d23590bc04f0b6d",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/2a267e185e8ee7b67cc5f43e5ecca961d4b0a2": "811ab4be6fe5349dfc3a63dfb9e4175e",
".git/objects/4b/6e222ca5089141c75c9f16a1ecaa6dce6e6d41": "0fb83f4fb0cbb3852daa65db9284735d",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/2f90a3b2472f08f355485e80180a03ee76ee8b": "cba64b9050ce753a3c4b9aeb0e19d9d5",
".git/objects/4d/e17f6df1e6c0e9c600ab05e1c4d79a25c8aee0": "d4117e6d6c4bc362249c5bf8103219b0",
".git/objects/4f/1ffd2121d2bdc875806551e9659381930eda7c": "a53ca7900feab1c1c767d5c62d9323fb",
".git/objects/54/23c6deb2da9186f61bcba002cf2fd200887709": "39281649764ed83ded7af90342944f13",
".git/objects/55/5c5d31d4942d4b15d1a42d79d1c96d7eadc214": "21862d18fa31dea18d824b188cb148ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/8beedc1ea6017ba0acdc24dec7150b16c8d547": "28217f769ff8edce26423cbaf381ebe4",
".git/objects/5e/83f92e657a08ad8199f8a694797c45bebd0e0d": "c3f3613f2e575a23c4927c4b5501035f",
".git/objects/5f/d8f027edc49ffafd5432ea80bdcb24e6ba31e6": "b85b62c81d0ca6e79c39e1c99d890476",
".git/objects/61/0766b629a913afc69d7cabeb399815436ee65c": "12832101001b9ae9780868d4d3e68f0a",
".git/objects/62/6cb1e78424409b1623f0c2a1e78d1441b80d4d": "c7f26b984689a376b5b1e2c4aaeefd17",
".git/objects/63/a73c0581cc0aaaaa8895ac87ed0cfc2f88e926": "4451cbb1cea4e73e132eeee2b54bbc6c",
".git/objects/64/719fc112abe13d8ca22a1b2760a12358971e0f": "83d1aa66784d3b49c5a78dc90cc41135",
".git/objects/65/7f7112af6ddc8daad007b89cdb34a0f9fb4230": "62a8747f1d8eefae9aeb93fd307deb24",
".git/objects/66/9aee996f6025f2d7750972a81b4e5022898d1e": "c1d57f3873bf61eb6bd49f2e46e0c179",
".git/objects/66/e7ec9d1d8222c1f768e760bfaa1b73bc2459eb": "276607c87ef2c95c5d381e3a085d0ad9",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/6673ba4548d75ac3d21f771454a27b9425630c": "ab93c8eb54ffdedea47f2b7cbb15de39",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/56c9e5adc65cfa5df5f1944bb5130dcc3c7287": "c59512ae5c833ae933c6798c717192c4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/37a8229da5ade7272af61759280ae5dd83e0d5": "4dd84ae3ba56bdfb41f3cd06436d4e35",
".git/objects/7b/44039d70590431bd13e29857e88e04cc9e176c": "632d3bc609b2d77b367bf23c58dd040b",
".git/objects/7c/ee6cd17854eb65bb8c02b825be43c413a3a7fd": "99f2fa43f5f392978d4b4ab200871de8",
".git/objects/7d/351505c9afaaea21db92529c74771f7e152d41": "c4fb236aa7a7c1e2c65eb2964fbe4e1f",
".git/objects/7e/631cc2f8373ef303a99c517efa191e6cf5959a": "19ab026cb084f4224806065300a7498a",
".git/objects/82/189a81018c232c7b2f63d80a9ffceaf970b474": "d926c34510e2fff5bb4eccaa46f4c618",
".git/objects/84/bf8ced9b85146055df24c128feb53776e21710": "9f01f12c4c0a497023c9eea4955e2a13",
".git/objects/86/11ed296d5ab8a6d054b8a17a6e09af88a42a0e": "8af28f74579c02215462be4843ad6925",
".git/objects/87/11d0ef6bf73c763608178d9ea63975a05afe51": "ebf006c01313f1efd91411c173f9fe80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/130551fc19002e6f8464ad5b0efdf7e64d2b3c": "a4c385e5d7067a072964851e54730f04",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2d87291cc5175c843134338ee1233ca2a9a65a": "b220ae3c97f6f0ef6b408f37c6d67c81",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/ec0b3b0979e86add5ac077f74322ee67c10c65": "495ae80dbb12b213123940544ab8c724",
".git/objects/90/20a0ed9e2d1c5ca9622c774b0a66e5f4ac6fc4": "31e5a2655fd1b814b26c604067bf11ee",
".git/objects/91/836c31a74f9ccd4f2595ac638418180a1f4d08": "2c214912c7a53c1fab3463600d965e5b",
".git/objects/93/49b9ba25a8bb7d9d4fc96174ece711b5beb2bd": "3e584004532903ed5973fc825449afc0",
".git/objects/93/5ab14a527791f06f5c209b7d024a1f8ea9036a": "36efe1393bf2e71ebfa4cf926071a10e",
".git/objects/95/357a7bc1cc2a2f886ab60d6526a9e7ed25be41": "feff211d03c58a7d70308bfbfea4ef23",
".git/objects/98/1a4394a4eb9748b8b40a31fb9c57d5c9a15ad3": "bd0a728727b285d01aadfd28deb0a842",
".git/objects/99/ae1295fb39a3fda0a521a69915de5f551678b2": "83f78f8d4908c3db64f64c499bc22e4d",
".git/objects/99/b5ce36f5bebe11de9a93da7fdf8710e42dab18": "a3ae3411571e7931709fe2eea39c61cf",
".git/objects/9f/66461677bdbc979541dc3396920cf4a4b55671": "7b23df17a6cdc0dadc620eaf7c4d9498",
".git/objects/9f/c328d6fb0ad419c566533d552fd1a6ab10a655": "d6e41d7cbddb1cf6eb4c95c6077e9aaa",
".git/objects/a0/d5d912f051a4ef3703502ed30c42e5061aebdd": "577689e2f99cb7b7cfb8c2b579d9370c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/cb6f4e1b3ca2611090b796476f4a6b7c5ca74b": "4bac1c7113b048570331be76e3bbc7b3",
".git/objects/a4/bde703f8278aa12251b7251070c4acd762ce71": "f81401c8a31165666f4f50fbd2c35bec",
".git/objects/a6/1e4724bfc3bc2fcbcbc12c49610c7317c7781b": "ccfa2bd328b4e1b7e0b0ed08c268f30f",
".git/objects/a6/e4b746f829ec7fc3cb9b066e846597d19401ac": "81afd4b698955482690d9c231226e5fe",
".git/objects/a7/78fa614f1f3557e656d987072901ff5dfb9cf9": "0fd229bdd910cdf19f2f5b8400dd1bce",
".git/objects/a7/bd5ec0d2afb54911c4906899904962427b9d3d": "733510fbd1b6dc713104208578b4a430",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/18903d15be73673ea4e565cea476ace5a81178": "10f63ace443056121ae45ffc74985e07",
".git/objects/b0/6556690101ebf0dbc322ece8b28cca59c4097a": "6e4a1657644bd60e63d22120562979d1",
".git/objects/b4/ae0cbb8cb1a1dffda652382eeb3b109afe6ddc": "82139abb29600467ce2d63d8c84d20db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/e04332cbcb131588faaf2541f95e2cfca5fcba": "06fcd4f41066a75e2d0a3234c2a7a322",
".git/objects/bd/3d92aa91d905a85872d2952bfceb1ade84fd50": "9f906f82db24faea1c4a236639c6e1d4",
".git/objects/be/ed43be0e0e49a98f0e0b14e63d6ee335d51bf3": "1f6340e6e356b43dd703da882bed2c17",
".git/objects/c2/6f7a39e100e28c42a31ee314a0de18bf85f2c5": "56d5d79c39248870c7d3b2a41d2e43e1",
".git/objects/c9/1ad558febca1a1c2950cb2926f058f98364500": "e93ab5a5e5ddf3160537eed0ce790443",
".git/objects/c9/efc258a9fc3513e323adebe890fb8c9692d82c": "07c11d5ba0d6e374d1de3fb3be042607",
".git/objects/cb/2ca065493bf8cc3c05b683e9db92b0fc55f50c": "6540040a72a6c5bede3f6134d264d581",
".git/objects/cc/cfae9c984523c0e658c28dd2b558008e45fb8f": "c78f52515055296f6c6d16c3e44e72f7",
".git/objects/d0/3373d29f199f328a76f767da58d3201939e963": "42f0ad699e13ed5b428b3e2019aef5cd",
".git/objects/d6/1bcd1cc8fe99faaed64220fb36c910773b2fbb": "8b3f332117c5ced432fded59f6ca26ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b17c0fb0d24dfdd653dc850bb618e3fd6d53c3": "fe05d0dc1fc68f6246f8ab309d5695d2",
".git/objects/db/054bd76f2c5dad0dbbe86c0a48bccc1b4c4293": "0564306ea4517fa82855ed98b7ac74fa",
".git/objects/dd/166d54b2390a4b7e8df0a4e6ab106c13865be2": "5a960974b3d41002c89983e9cb05ff31",
".git/objects/df/3f73c959c3b29bbcbca40e9f792e86d8053062": "40b514e3d844e66056584c7f15ab2720",
".git/objects/e3/a59f3fa0b20282a4d2282e12fb8dfd1facc86b": "132a18c698732c6fb82d10c063e6caf4",
".git/objects/e5/06dbd4c009ea9dcb406ebda94dde10c0236b75": "7fe080b05b853fa760f138e8dffab3a8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ea/d442c81a87a22e56e18b4b8b9d087f8b6f3ab4": "cfff31a4eac9540c93eb9021217fc88b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/c60fbf0b0fc9369c6e94779137c5e06022fb5c": "9fa84cd4273471b51e7e85a725fbad49",
".git/objects/fe/ba9f0225150d807407df35283f30c62e684de7": "1a45191970d401ef1181b916eb7a9e12",
".git/refs/heads/master": "717811f7cac6bca0c1c54301d75aa6d7",
".git/refs/heads/webfiles": "8481afab0b0d7975df626e065c14f0bc",
".git/refs/remotes/origin/master": "717811f7cac6bca0c1c54301d75aa6d7",
".git/refs/remotes/origin/webfiles": "8481afab0b0d7975df626e065c14f0bc",
".vscode/settings.json": "19751b2a32e46d1ba1477f357123a898",
"assets/AssetManifest.json": "eaefd123124555fdc3910f054c78d7de",
"assets/assets/images/logo.png": "635b6365f82c85b56e6a8d1a33ecc9d3",
"assets/assets/images/nonveg.png": "18251caaf58ad794904374bca21c9d94",
"assets/assets/images/veg.png": "02b20c50bba5639434a124d111ba22e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "47388aaeafe591adc3201aea0e1f4d97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e089136822671aefb6505279fe865a06",
"/": "e089136822671aefb6505279fe865a06",
"main.dart.js": "c3182ece1027a2609971f4a802914f72",
"manifest.json": "66e3da1928d70662fd50bda840c1365c",
"splash/img/dark-1x.png": "f5e34f04a25bceee9b15531cdcb78487",
"splash/img/dark-2x.png": "aeb507bd3463360fa36c56b497fdee27",
"splash/img/dark-3x.png": "f73969ecc0fcdb5f84444d4bf23c1c6d",
"splash/img/dark-4x.png": "cadb82d03e31026aaa6ea5ce00cc6223",
"splash/img/light-1x.png": "f5e34f04a25bceee9b15531cdcb78487",
"splash/img/light-2x.png": "aeb507bd3463360fa36c56b497fdee27",
"splash/img/light-3x.png": "f73969ecc0fcdb5f84444d4bf23c1c6d",
"splash/img/light-4x.png": "cadb82d03e31026aaa6ea5ce00cc6223",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "73c6046ea5ceb0220ea78b76becf8a0b",
"version.json": "a2a4a5afb36d940c85a2a446682b9a52"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
