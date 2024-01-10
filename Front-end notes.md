## 前端語言紀錄

### div
	
>DIV 可以解釋為區塊，用DIV標籤包起來的東西，瀏覽器會視為一個物件，大致長成這樣`<div>`內容`</div>`，你可以用div將網頁內容的各區塊包起來，再去做CSS排板，目前所有的主流瀏覽器都支援DIV標籤。
>
>DIV標籤在瀏覽器中是一個獨立的區塊，會獨自佔用一行，如果你使用了兩個div區塊，類似上方範例這樣，則兩個 div 區塊會呈現為由上往下排列，與span標籤可以由左而右排列不同，這個原因是瀏覽器自動為每個 div 結尾後面加上換行的動作


### table：
>`<table>` 元件代表表格數據 ── 換句話說，就是透過二維資料表來呈現資訊

### thead：
>`<thead>`是說明這一個區塊的內容是表格欄位標題，<thead> 元素內部必須包含一個或者多個<tr> 標籤

### tr：
>`<tr>` (table row) 用來定義表格有幾個橫列 (row)，<tr> 裡面有 <td> (table data) 用來定義表格有幾個直行 (cloumn)

### td：
>`<td>` 裡面就是放實際單元格的資料

### th：
>`<th>` (table header) 用來表示表格欄位的標題，<th> 可以用來替代 <td> 使用，用來在語意上更明確的聲明這一格是一個標題

### tbody：
>`<tbody>` 是說明這一個區塊是放表格的主要內容

### scope：
>定義和用法
>scope 屬性定義將表頭單元與資料單元相關聯的方法。
>
>scope 屬性標識某個單元是否是列、行、列組或行組的表頭。
>
>scope 屬性不會在普通瀏覽器中產生任何視覺變化。
螢幕閱讀器可以利用該屬性。
>			
```
EX：在第一行的<th>加上值為col的scope屬性，聲明他們是下面資料單元格的表頭。同樣的，給每行的開頭<th>加上值為row的scope屬性聲明他們是右邊資料單元格的表頭
			<tr>
				<th scope="col">Month</th>
				<th scope="col">Savings</th>
			</tr>
			<tr>
				<td scope="row">1</td>
				<td>January</td>
				<td>$100.00</td>
			</tr>
```
### footer：
>
>`<footer>` 是 HTML 裡作為定義頁尾的元素，頁尾區塊裡面可以放入文字、logo、導覽連結、作者訊息或版權宣告...等內容，通常會將`<footer>`放在頁面的最下方，或某的區塊的最下方作為「頁尾」使用。`<footer>` 屬於「容器元素」，需要有「起始標籤」以及「結束標籤」，也因為是容器元素，裡頭可以放入其他的子元素。
>
>`<footer>` 的顯示類型為「block 塊級元素」，預設會強制換行。
>`<footer>` 不可以作為 `<header>`、`<footer>` 和 `<address>` 的子元素。
```
		EX：
			<footer>
			  <h4>copyright 2022</h4>
			  <address>oxxo.studio@gmail.com</address>
			</footer>
```
### container：
>[容器 (Containers)](https://bootstrap5.hexschool.com/docs/5.0/layout/containers/)
>
>容器是Bootstrap的基本建構區塊，在給定的設備或是視區中包含、填充和對齊你的內容
.container類別用於固定寬度並支援響應式佈局的容器
```
			EX
			<div class="container">
			  <!-- Content here -->
			</div>
```
>Bootstrap 本身自帶三種不同的容器：
>>* .container, 每一個響應式斷點都會設置一個 max-width
>>* .container-fluid, 所有斷點都是 width: 100%
>>* .container-{breakpoint}, 直到指定斷點之前，都會是 width: 100%
>
>container-fluid
>>* .container-fluid類別用於100% 寬度，佔據全部視窗`viewport`的容器。
>>* 針對容器使用 .container-fluid, 它將橫跨可視區域的整個寬度

### Grid system：
>
>#### [網格系統](https://bootstrap5.hexschool.com/docs/5.0/layout/grid/)
>
>[40行實施響應式的佈局系統 — 告訴你col-sm-12、col-md-6如何實現]( https://realdennis.medium.com/40%E8%A1%8C%E5%AF%A6%E4%BD%9C%E9%9F%BF%E6%87%89%E5%BC%8F%E7%9A%84%E4%BD%88%E5%B1%80%E7%B3%BB%E7%B5%B1-%E5%91%8A%E8%A8%B4%E4%BD%A0col-sm-12-col-md-6-%E6%98%AF%E5%A6%82%E4%BD%95%E5%AF%A6%E7%8F%BE-4490a65b1a0)
>
>* 網格系統支援六個響應式斷點：
>>斷點主要是基於 min-width 來設置 media queries, >>這代表著它們將會影響該斷點及其上的所有斷點（例如，.col-sm-4 適用於sm，md，lg，xl 和 >>xxl）。 這也意味著您可以通過每個斷點控制容器和欄的大小以及行為
>
>* 容器水平居中並填滿內容：
>>使用 .container 作為響應式的固定寬度, .container-fluid 的寬度在所有的設備上均為 width: 100%, 而響應式容器 (例如. .container-md) 主要用於搭配流體容器以及固定寬度容器的組合
>
>* Rows 與 Columns 的組合：
>>每個欄位之間的水平 padding (稱為 gutter)是用來控制兩者之間的間距。 然後在每個列上加上負值抵消這個 padding，以確保每一列中的內容在視覺上沿左側向下對齊
>
>* 欄的靈活性非常高：
>>每一行總共有 12 欄，你可以建立一個任意跨越欄的組合。 Column 代表著要跨越的欄數 (例如：col-4 跨越四欄)。 width 將會以百分比作為基準，因此可以確保尺寸的正常
>
>* Gutters 可以響應式也可以自定義：
>>Gutter 類別可用於任何斷點， 其大小會與 margin 和 padding 的間隔相同. 使用 .gx-* 類別來更改水平方向的 Gutters、用 .gy-* 更改垂直方向的 Gutters，或是用 .g-* 更改所有方向的 Gutters。也可以使用 .g-0 來移除所有 Gutters

#### 網格選項
>Bootstrap 的網格系統預設會自動適應六個斷點以及您自定義的任何斷點。而這六個斷點如下：
>>* 極小 (xs)
>>* 小 (sm)
>>* 中 (md)
>>* 大 (lg)
>>* 特大 (xl)
>>* 超級大 (xxl)
```
			EX：
			<div class="container">
			  <div class="row">
				<div class="col">
				  1 of 3
				</div>
				<div class="col-6">
				  2 of 3 (wider)
				</div>
				<div class="col">
				  3 of 3
				</div>
			  </div>
			  <div class="row">
				<div class="col">
				  1 of 3
				</div>
				<div class="col-5">
				  2 of 3 (wider)
				</div>
				<div class="col">
				  3 of 3
				</div>
			  </div>
			</div>
```
### Carousel：
#### [輪播 (Carousel)](https://bootstrap5.hexschool.com/docs/5.0/components/carousel/)
>用於循環顯示圖片元素、幻燈片或包含文本的輪播元件
>需要將 .active 添加到其中一個輪播元素上，否則輪播將不可見。
>
>另外一定要在 .carousel 上為控制項元件設置一個唯一的 id，特別是當你在一個頁面上使用多個輪播的時候					
>控制項和指示器元素必須具有與 .carousel 元素之 id 符合的 data-bs-target 屬性 (或是連結的 href)。
>
>EX：
>>* .slide 添加了 CSS 過渡和動畫效果，使項目在顯示新項目時滑動。如果您不想要這種效果，請忽略此類
>>
>>* 在 .carousel 上添加 .carousel-dark 以獲得暗色系的控制項、指示器及字幕
>>
>>* .carousel-inner代表此處為幻燈片內容，每張投影片的內容都在`<div>`with 類別中定義.item。這可以是文字或圖像。
>>
>>* d-none d-lg-block 僅在 lg尺寸以上可見
>>
>>* 在 .carousel-item 上添加 data-bs-interval="" 以更改自動循環至下一個項目的延遲時間。data-bs-interval="false"因此它不會自動播放
```
			<div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 d-none d-lg-block' data-bs-interval='false'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<div className='row d-flex justify-content-center align-items-center'>
							<ReturnBook/>
							<ReturnBook/>
							<ReturnBook/>
						</div>
					</div>
					// 加入上一個與下一個控制項時，我們建議使用 <button> 元素，當然你也可以使用 <a> 來當作 button 使用，記得要替 <a> 元素加上 role="button"
					// data-slide屬性接受關鍵字"prev"或"next"，這會變更投影片相對於其目前位置的位置
					<button className='carousel-control-prev' type='button'
						data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button className='carousel-control-next' type='button'
						data-bs-target='#carouselExampleControls' data-bs-slide='next'>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</div>	
```
### Spacing：
#### [間隔 (Spacing)](https://bootstrap5.hexschool.com/docs/5.0/utilities/spacing/)
>賦予一個縮寫 class 使 margin 或 padding 值在一個元素上或其中一個邊緣上 (包含響應式)。包含支援單一個邊緣屬性或全部邊緣、垂直邊緣、水平邊緣。
```
			property 設定:
				m - 設定 margin 的類別
				p - 設定 padding 的類別
			
			sides 設定:
				t - 設定 margin-top 或是 padding-top 的類別
				b - 設定 margin-bottom 或是 padding-bottom 的類別
				s - (start) 在 LTR 設定 margin-left 或是 padding-left， RTL 設定 margin-right 或是 padding-right
				e - (end) 在 LTR 設定 margin-right or padding-right， RTL 設定 margin-left 或是 padding-left
				x - 同時設定 *-left 和 *-right
				y - 時設定 *-top 和 *-bottom
				blank(空白) - 同時設定 margin 或 padding 在元素的四個邊緣
			
			size 設定:
				0 - 設定 margin 或是 padding 為 0
				1 - (預設) 設定 margin 或是 padding 為 $spacer * .25
				2 - (預設) 設定 margin 或是 padding 為 $spacer * .5
				3 - (預設) 設定 margin 或是 padding 為 $spacer
				4 - (預設) 設定 margin 或是 padding 為 $spacer * 1.5
				5 - (預設) 設定 margin 或是 padding 為 $spacer * 3
				auto - 設定 margin 為 auto
```
```
			EX：
			<div class="p-2 bg-light border">Grid item 1</div> => p-2
			<div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 d-none d-lg-block' data-bs-interval='false'> => mt-5
```
### Display：
#### [Display 通用類別](https://bootstrap5.hexschool.com/docs/5.0/utilities/display/)
```
		// Display 通用類別，可用於切換元件的顯示與否，並且可以包含響應式設定
			* d-none	不顯示也不佔空間
			* d-inline	行內並排容器，大小以內容物判定
			* d-inline-block	行內塊狀容器，大小以內容物判定，可設定寬高、上下外距等屬性
			* d-block	塊狀容器，大小以空間判定，可設定寬高、上下外距等屬性
			* d-table	表格容器
			* d-table-cell	表格元素容器
			* d-flex	塊級伸縮容器
			* d-inline-flex	行內級伸縮容器
```
#### 隱藏元素：
>
>為了更快速且友善的進行移動設備開發，請使用響應式的 display class 來顯示和隱藏元件。避免創建完全不同版本的同一個網站，而是按照每個螢幕尺寸隱藏元素。
				要隱藏元素，只需對任何響應式畫面使用 .d-none 或是 .d-{sm,md,lg,xl,xxl}-none 其中之一。
>
>如果只想在給定的螢幕區間上顯示元素，您可以將一個 .d-*-none class 和一個 .d-*-* class 組合，例如 .d-none .d-md-block .d-xl-none .d-xxl-none 將隱藏所有屏幕尺寸的元素，但中型和大型設備除外。
```
			全部隱藏		=>	.d-none
			僅在 xs 上隱藏	=>	.d-none .d-sm-block
			僅在 md 上隱藏	=>	.d-md-none .d-lg-block
			僅在 lg 上隱藏	=>	.d-lg-none .d-xl-block
			僅在 lg 上可見	=>	.d-none .d-lg-block .d-xl-none
			僅在 xl 上可見	=>	.d-none .d-xl-block .d-xxl-none
			僅在 xxl 上可見	=>	.d-none .d-xxl-block
```
### Flex：
>[Flex](https://bootstrap5.hexschool.com/docs/5.0/utilities/flex/)
>
>[css flexbox 一維排列教學](https://medium.com/%E5%B0%8F%E9%83%AD-%E0%B9%80%E0%B8%88%E0%B8%99/%E8%8F%9C%E9%B3%A5%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%AD%86%E8%A8%98-css-flexbox-%E4%B8%80%E7%B6%AD%E6%8E%92%E5%88%97%E6%95%99%E5%AD%B8-dd646feb682b)
>
>flexbox 通用類別的套件包管理網格欄的排版、對齊、尺寸縮放，以及導覽、元件等
>#### 調整內容
>
>>使用 flexbox 容器上的 justify-content 通用類別改變 flex 物件在主軸上的對齊 (x 軸開始，如果 flex-direction: column 則為 y 軸)。
>>
>>從 start (瀏覽器預設)，end、center、between、 around 或 evenly 中做選擇。
```
			EX：
			<div class="d-flex justify-content-start">...</div> 	/* 從行首開始排列*/
			<div class="d-flex justify-content-end">...</div>  		/* 從行尾開始排列*/
			<div class="d-flex justify-content-center">...</div> 	/* 居中排列*/
			<div class="d-flex justify-content-between">...</div> 	/* 均勻排列每個元素首個元素放置於起點，末尾元素放置於終點*/
			<div class="d-flex justify-content-around">...</div> 	/* 均勻排列每個元素每個元素周圍分配相同的空間*/
			<div class="d-flex justify-content-evenly">...</div> 	/* 均勻排列每個元素每個元素之間的間隔相等*/
```
### 按鈕(Button)
>[https://bootstrap5.hexschool.com/docs/5.0/components/buttons/](https://bootstrap5.hexschool.com/docs/5.0/components/buttons/)
>
>[https://www.runoob.com/bootstrap/bootstrap-buttons.html](https://www.runoob.com/bootstrap/bootstrap-buttons.html)
>```
			<button type="button" class="btn btn-primary">Primary</button> // 基本(藍) 
			<button type="button" class="btn btn-secondary">Secondary</button>	// 次要(灰)
			<button type="button" class="btn btn-success">Success</button>	// 成功(綠)
			<button type="button" class="btn btn-danger">Danger</button>	// 危險(紅)
			<button type="button" class="btn btn-warning">Warning</button>	// 警告(黃)
			<button type="button" class="btn btn-info">Info</button>	// 資訊(淡藍)
			<button type="button" class="btn btn-light">Light</button>	// 光(白)
			<button type="button" class="btn btn-dark">Dark</button>	// 黑暗(黑)
			<button type="button" class="btn btn-link">Link</button>	// 鏈結(藍字底線)
>```
>#### Outline 按鈕樣式
>```
// 用 .btn-outline-* 替換預設修飾用的 Class，以移除任何按鈕上的所有背景色及背景圖。
<button type="button" class="btn btn-outline-primary">Primary</button> 
// 語法與填滿相同，只是多了-outline
>```
>
> #### 尺寸 按鈕樣式
>```
// 想要較大或較小的按鈕？加入 .btn-lg 或 .btn-sm 來套用尺寸。
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>
>```

### aria-hidden：
#### [aria-hidden屬性](https://www.cnblogs.com/hellohui/p/17663823.html)
>aria-hidden是一個用於輔助功能（Accessibility）的HTML屬性，用於指示元素是否對輔助技術（如螢幕閱讀器）隱藏。
>
>輔助功能是一種設計和開發網頁的方法，旨在使網頁對於殘障人士和使用輔助技術的人更容易訪問。aria-hidden屬性可以應用於任何HTML元素，用於指示該元素是否應該在輔助技術中隱藏或忽略。
>
>當一個元素具有aria-hidden="true"時，輔助技術將忽略該元素及其內容，不會將其讀取給使用者。這對於一些不需要被螢幕閱讀器讀取的元素非常有用，例如純裝飾性的圖像或隱藏的輔助文字。
				透過將這些元素標記為隱藏，可以減少輔助科技使用者在瀏覽頁面時遇到的冗餘資訊
>
>要注意的是，aria-hidden屬性只影響輔助技術，對一般使用者來說，這個屬性並不會對元素的可見度產生影響。此外，使用aria-hidden屬性時，需要確保在其他方面提供了足夠的可訪問性，以確保
				輔助技術使用者能夠理解頁面的內容和功能。

### Visually hidden：
>[視覺隱藏](https://bootstrap5.hexschool.com/docs/5.0/helpers/visually-hidden/)
>
>可在視覺上隱藏元素，但仍允許其透過 .visually-hidden 呈現給輔助技術（例如螢幕閱讀器）。

### 讀取圖示 (Spinners)：
>[https://bootstrap5.hexschool.com/docs/5.0/components/spinners/](https://bootstrap5.hexschool.com/docs/5.0/components/spinners/)
>
>Bootstrap`讀取圖示 (spinners)` 可用於您的專案中來顯示載入狀態。它們僅使用 HTML 和 CSS 來建構，這意味著您不需要任何 JavaScript 來創建它。
>
>但您仍需要客製 JavaScript 來切換它們的顯示狀況。
它們的外觀、對齊以及尺寸都可以透過我們驚人的通用類別來自定義
>```
			<div class="spinner-border text-primary" role="status"> // 藍
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-secondary" role="status"> // 灰
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-success" role="status">	// 綠
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-danger" role="status">	// 紅
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-warning" role="status">	// 黃
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-info" role="status">	// 淡藍
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-light" role="status">	// 白
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-dark" role="status">	// 黑
			  <span class="visually-hidden">Loading...</span>
			</div>
>```
### aria-label：
>[前端的基礎修養：aria-label](https://lepture.com/zh/2015/fe-aria-label)
>
>aria-label 是一個 HTML attribute，用來告訴讀屏軟件某個元素是什麼。例如一個關閉按鈕「×」，視覺上看來都能理解，但是讀屏軟件並不能正確讀出，這時就可以用 aria-label 告訴它
>```
		EX：
			// 讀屏軟件（比如說 Voice Over）就會讀出「按鈕，關閉」
			<button aria-label="關閉">&times;</button>
>```
### aria-labelledby 屬性：
>[https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
>
>aria-labelledby屬性用來表示某些元素的id 是某一物件的標籤。它被用來確定控制項或控制項組與它們標籤之間的聯繫。
>
>使用諸如螢幕閱讀器等輔助技術的使用者通常會使用tabbing 在頁面的不同區域間進行導航。
>如果一個輸入元素、控制項或控制項群組沒有被指派一個label 標籤，那麼螢幕閱讀器就無法對其進行讀取。

### 導覽列 (Navbar)：
>[https://bootstrap5.hexschool.com/docs/5.1/components/navbar/](https://bootstrap5.hexschool.com/docs/5.1/components/navbar/)
>
>導覽列需要使用 .navbar 包裝，並透過 .navbar-expand{-sm|-md|-lg|-xl} 給予響應式的折疊以及使用 color scheme class。
>
>* 導覽列預設的內容寬度是浮動的，更改 containers 以不同的方式來限制水平寬度。
>* 使用 spacing 及 flex 通用類別來控制物件在導覽列的間隔及對齊。
>* 導覽列預設是響應式的，但也可以輕易的修改這個選項。響應式行為會使用到折疊的 JavaScript 插件。
>* 使用 `<nav>` 元素確保親和性，或者如果使用更通用的元素，如 `<div>`，在每一個導覽列中添加 role="navigation" 為輔助技術的使用者明確標識導覽區域。
透過設置 aria-current="page" 於當前頁面，或將 aria-current="true" 設置於群組中的當前項目來指示目前位置。
>```
		EX：
			<!-- As a link -->
			<nav class="navbar navbar-light bg-light">
			  <div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
			  </div>
			</nav>
			<!-- As a heading -->
			<nav class="navbar navbar-light bg-light">
			  <div class="container-fluid">
				<span class="navbar-brand mb-0 h1">Navbar</span>
			  </div>
			</nav>
>```
### 導覽與頁籤 (Navs and tabs)：
>[Bootstrap標籤頁（Tab）插件(菜鳥教程)](https://www.runoob.com/bootstrap/bootstrap-tab-plugin.html)
>[https://bootstrap5.hexschool.com/docs/5.0/components/navs-tabs/](https://bootstrap5.hexschool.com/docs/5.0/components/navs-tabs/)
>
>Bootstrap 中提供的導覽共用通用標記和樣式，從基礎的 .nav 到啟用與禁用的狀態。交換使用修飾符 class 以在各個樣式之間切換。
>
>基礎的 .nav 元件使用 flexbox 構建，並提供了堅實的基礎以構建所有類型的導覽元件。它包括一些樣式覆寫（為了與列表一同使用）、用於提供更大點擊範圍的連結 padding，以及基本的禁用樣式。
>
>基礎的 .nav 元件不包含任何 .active 狀態。以下範例包含了 active 類別，主要是為了說明這個 class 不會觸發任何特殊的樣式。如果要將啟用狀態傳遞給輔助技術，請使用 aria-current 屬性 - 為當前的頁面賦予 page 屬性，或賦予目前所指向的項目 true 屬性。
>```
		EX：
			<ul class="nav">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#">Active</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
			  </li>
			</ul>
>```
### 表單控制 (Form controls)
>[https://bootstrap5.hexschool.com/docs/5.0/forms/form-control/](https://bootstrap5.hexschool.com/docs/5.0/forms/form-control/)
>
>使用自定義的樣式，尺寸，focus 狀態等為文本形式控制元件如 `<input>`、`<textarea>` 進行升級
>```
		EX：
			<input className="form-control mt-2" type="search"
			placeholder="Search" aria-labelledby="Search"
			onChange={e => setSearch(e.target.value)} />
>```
### 下拉選單 (Dropdowns)
>[https://bootstrap5.hexschool.com/docs/5.0/components/dropdowns/](https://bootstrap5.hexschool.com/docs/5.0/components/dropdowns/)
>
>下拉選單是可切換的內文 overlay，用於顯示連結列表或其他內容。這些交互功能於 Bootstrap JavaScript 下拉選單插件提供。透過點擊切換，而不是滑入的方式
>	
>在 .dropdown 中包裝下拉選單的切換（你的按鈕或連結）和下拉式功能表，或者另外一個聲明 `position：relative;` 的元素。 可以從`<a>` 或`<button>` 元素裡觸發下拉選單，以適應您的潛在需求。
>
>底下的範例是在適合的地方使用語義化標籤 `<ul> `元素，但它也可以自己決定要放什麼
>任何單個 .btn 可以變成帶有一些標記的下拉式切換。以下是您如何使用 `<button>`元素：
>```
		EX：
			<div class="dropdown">
			  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Dropdown button
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li><a class="dropdown-item" href="#">Action</a></li>
				<li><a class="dropdown-item" href="#">Another action</a></li>
				<li><a class="dropdown-item" href="#">Something else here</a></li>
			  </ul>
			</div>
		// 或者是透過 <a> 元素:
		EX：
			<div class="dropdown">
			  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
				Dropdown link
			  </a>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
				<li><a class="dropdown-item" href="#">Action</a></li>
				<li><a class="dropdown-item" href="#">Another action</a></li>
				<li><a class="dropdown-item" href="#">Something else here</a></li>
			  </ul>
			</div>
>```
### 文字 (Text)：
>[https://bootstrap5.hexschool.com/docs/5.0/utilities/text/](https://bootstrap5.hexschool.com/docs/5.0/utilities/text/)
>
>文字通用類別的文檔和示例，用於控制對齊、環繞、粗細等。
>
>#### [文字變換](https://bootstrap5.hexschool.com/docs/5.0/utilities/text/#text-transform)
>```
		 // 使用文字大寫字母類別將元件中的文字內容轉大寫
		 EX：
			<p class="text-lowercase">Lowercased text.</p>
			<p class="text-uppercase">Uppercased text.</p>
			<p class="text-capitalize">CapiTaliZed text.</p>
>```
>#### [文字大小](https://bootstrap5.hexschool.com/docs/5.0/utilities/text/#font-size)
>```
		 // 快速的改變文字的 font-size 
		 EX：
			<p class="fs-1">.fs-1 text</p>
			<p class="fs-2">.fs-2 text</p>
			<p class="fs-3">.fs-3 text</p>
			<p class="fs-4">.fs-4 text</p>
			<p class="fs-5">.fs-5 text</p>
			<p class="fs-6">.fs-6 text</p>
>```
>#### [文字粗細和斜體](https://bootstrap5.hexschool.com/docs/5.0/utilities/text/#font-weight-and-italics)
>
>使用這些通用類別來快速地改變文字內容的 font-weight 或 font-style。font-style 通用類別的縮寫為 `.fst-*`， `font-weight`通用類別的縮寫為 `.fw-*`
>```
		 EX：
			<p class="fw-bold">Bold text.</p>
			<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
			<p class="fw-normal">Normal weight text.</p>
			<p class="fw-light">Light weight text.</p>
			<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
			<p class="fst-italic">Italic text.</p>
			<p class="fst-normal">Text with normal font style</p>
>```
### 文字排版 (Typography)：
>[https://bootstrap5.hexschool.com/docs/5.0/content/typography/](https://bootstrap5.hexschool.com/docs/5.0/content/typography/)
>
>用於 Bootstrap 文字排版的文件和範例，包括全域設定、標題、主體文本、列表和更多。
>```
		EX：
			# 標題
			<h1>h1. Bootstrap heading</h1>
			<h2>h2. Bootstrap heading</h2>
			<h3>h3. Bootstrap heading</h3>
			# 前導主題 
			// 使用 .lead 讓一個段落脫穎而出。
			<p class="lead">
			  This is a lead paragraph. It stands out from regular paragraphs.
			</p>
>```
### 顏色 (Colors)：
>[https://bootstrap5.hexschool.com/docs/5.0/utilities/colors/](https://bootstrap5.hexschool.com/docs/5.0/utilities/colors/)
>
>借助一些顏色通用類別讓顏色的表達具有意義。這也包括支援有 hover 狀態的樣式連結。
>
>[Colors](https://bootstrap5.hexschool.com/docs/5.0/utilities/colors/#colors)
>
>使用 color 通用類別為文字上色。如果要為連結上色，你可以使用 `
.link-* helper classes`。它們具有 `:hover` and `:focus` 的狀態。
>```
		 EX：
			<p class="text-primary">.text-primary</p>
			<p class="text-secondary">.text-secondary</p>
			<p class="text-success">.text-success</p>
			<p class="text-danger">.text-danger</p>
			<p class="text-warning bg-dark">.text-warning</p>
			<p class="text-info bg-dark">.text-info</p>
			<p class="text-light bg-dark">.text-light</p>
			<p class="text-dark">.text-dark</p>
			<p class="text-body">.text-body</p>
			<p class="text-muted">.text-muted</p>
			<p class="text-white bg-dark">.text-white</p>
			<p class="text-black-50">.text-black-50</p>
			<p class="text-white-50 bg-dark">.text-white-50</p>
>```
### 卡片 (Cards)：
[https://bootstrap5.hexschool.com/docs/5.0/components/card/](https://bootstrap5.hexschool.com/docs/5.0/components/card/)
>
>卡片是一個有彈性且可擴展的內容容器。它包含了頁首和頁尾的選項、多樣化的內容、上下文的背景顏色以及強大的展示選項。
>
>卡片被設計成盡可能的少用一些標記和樣式，但它仍然可以提供許多的控制項和自定義。使用 flexbox 構建，它們可以更方便的對齊，並與其它的 Bootstrap 元件良好混合
>
>#### [頁首和頁尾](https://bootstrap5.hexschool.com/docs/5.0/components/card/#header-and-footer)
>```
		 // 在卡片內添加選擇性的頁首和/或頁尾。
		 // 卡片頁首的樣式可以透過在 <h*> 元素添加 .card-header 來調整。
		 EX：
			<div class="card">
			  <div class="card-header">
				Featured
			  </div>
			  <div class="card-body">
				<h5 class="card-title">Special title treatment</h5>
				<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
>```
### 陰影 (Shadows)：
>使用 box-shadow 通用類別來增加或移除陰影。
>
>[https://bootstrap5.hexschool.com/docs/5.0/utilities/shadows/](https://bootstrap5.hexschool.com/docs/5.0/utilities/shadows/)
>
>雖然在 Bootstrap 中元件上的陰影預設被禁用，且可透過 $enable-shadows 啟用，你也可以使用我們的 box-shadow 通用類別快速增加或移除陰影。包括對 .shadow-none 和其他三個預設大小的支
			持（有相關的變數用以對應）。
>```
		 EX：
			<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
			<div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
			<div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
			<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
>```
### 背景 (Background)：
>通過 background-color 傳達意義並添加漸層樣式。
>
>[背景顏色](https://bootstrap5.hexschool.com/docs/5.1/utilities/background/#background-color)
>
>與上下文文字顏色類別相似，將元素的背景設定為任何上下文類別。背景通用類別 沒有設定 color，所以在某些情況下你需要使用 `.text-*`
>```
		 EX：
			<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
			<div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
			<div class="p-3 mb-2 bg-success text-white">.bg-success</div>
			<div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
			<div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
			<div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
			<div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
			<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
			<div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
			<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
			<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
>```
### 邊框 (Borders)：
>使用 Border 通用類別迅速設計一個元素的 border 和 border-radius。可用於圖像、按鈕、或任何其它元素。
>
>[Border](https://bootstrap5.hexschool.com/docs/5.0/utilities/borders/#border)
>
>使用 border 通用類別增加或移除一個元素的 border。選擇要四邊都使用，或是一次只用一個。
>```
		 // 增加
		 EX：
			<span class="border"></span>
			<span class="border-top"></span>
			<span class="border-end"></span>
			<span class="border-bottom"></span>
			<span class="border-start"></span>
		 // 減少
		 EX：
			<span class="border-0"></span>
			<span class="border-top-0"></span>
			<span class="border-end-0"></span>
			<span class="border-bottom-0"></span>
			<span class="border-start-0"></span>
>```
>[邊框顏色](https://bootstrap5.hexschool.com/docs/5.0/utilities/borders/#border-color)
>
>透過通用類別套用邊框的主題色彩。
>```
		 EX：
			<span class="border border-primary"></span>
			<span class="border border-secondary"></span>
			<span class="border border-success"></span>
			<span class="border border-danger"></span>
			<span class="border border-warning"></span>
			<span class="border border-info"></span>
			<span class="border border-light"></span>
			<span class="border border-dark"></span>
			<span class="border border-white"></span>
>```
>[Border-radius](https://bootstrap5.hexschool.com/docs/5.0/utilities/borders/#border-radius)
>
>將元素加入至 class 可以輕鬆地替邊框增加圓角。
>```
		 EX：
			<img src="..." class="rounded" alt="...">
			<img src="..." class="rounded-top" alt="...">
			<img src="..." class="rounded-end" alt="...">
			<img src="..." class="rounded-bottom" alt="...">
			<img src="..." class="rounded-start" alt="...">
			<img src="..." class="rounded-circle" alt="...">
			<img src="..." class="rounded-pill" alt="...">
>```
### Gutters：
		# https://bootstrap5.hexschool.com/docs/5.0/layout/gutters/

			Gutters 是在欄 (columns) 之間的 padding, 用來響應式的間隔和對齊 Bootstrap 網格系統中的內容。
			
			Gutters 是介於欄位之間的間隙，經水平方向的 padding 產生。 我們在每一欄設置 padding-right 與 padding-left ，並使用負值的 margin 來抵銷每行的開頭與結尾以對齊網格內容。
			Gutters 的寬度為 1.5rem (24px)。 這使我們能將網格與 padding and margin spacers 的比例匹配.
			Gutters 可以進行響應式的調整。 使用特定斷點的 gutter 類別來修改水平 gutter、垂直 gutter、以及所有的 gutter。

		# 水平gutters // https://bootstrap5.hexschool.com/docs/5.0/layout/gutters/#horizontal-gutters
		 // .gx-* 類別可以用來控制水平 gutter 的寬度。若使用較大的 gutters 且要避免不必要的溢出，則需在 .container 或 .container-fluid 的父層使用匹配的 padding。
		 // 例如，在下方範例中我們增加了 .px-4 的 padding:
		 EX：
			<div class="container px-4">
			  <div class="row gx-5">
				<div class="col">
				 <div class="p-3 border bg-light">Custom column padding</div>
				</div>
				<div class="col">
				  <div class="p-3 border bg-light">Custom column padding</div>
				</div>
			  </div>
			</div>
		# 垂直gutters // https://bootstrap5.hexschool.com/docs/5.0/layout/gutters/#vertical-gutters
		 // .gy-* 類別可以控制垂直 gutter 的寬度。與水平 gutters 相同，垂直 gutters 會導致 .row 下方溢出頁尾。如果發生這種情況，請使用 .overflow-hidden 包圍 .row 的外層:
		 EX：
			<div class="container overflow-hidden">
			  <div class="row gy-5">
				<div class="col-6">
				  <div class="p-3 border bg-light">Custom column padding</div>
				</div>
				<div class="col-6">
				  <div class="p-3 border bg-light">Custom column padding</div>
				</div>
				<div class="col-6">
				  <div class="p-3 border bg-light">Custom column padding</div>
				</div>
				<div class="col-6">
				  <div class="p-3 border bg-light">Custom column padding</div>
				</div>
			  </div>
			</div>
		# 水平及垂直 gutters // https://bootstrap5.hexschool.com/docs/5.0/layout/gutters/#horizontal--vertical-gutters
		 // .g-* 類別可以控制水平 gutter 的寬度，下方的範例我們使用了較小的 gutter width，因此我們不需再另外使用 .overflow-hidden 包住其父層。
		 EX：
			<div class="container">
		  <div class="row g-2">
			<div class="col-6">
			  <div class="p-3 border bg-light">Custom column padding</div>
			</div>
			<div class="col-6">
			  <div class="p-3 border bg-light">Custom column padding</div>
			</div>
			<div class="col-6">
			  <div class="p-3 border bg-light">Custom column padding</div>
			</div>
			<div class="col-6">
			  <div class="p-3 border bg-light">Custom column padding</div>
			</div>
		  </div>
		</div>
### 尺寸 (Sizing)：
		# https://bootstrap5.hexschool.com/docs/5.0/utilities/sizing/
		// 使用寬度和高度通用類別，可以輕鬆地將一個元素加寬或增高。
		# 相對於父元素 // https://bootstrap5.hexschool.com/docs/5.0/utilities/sizing/#relative-to-the-parent
		 // 寬度和高度通用類別從 _utilities.scss 中產生。預設包含 25%, 50%, 75%, 100% 和 auto 。按你的需求調整這些值，可產生不同的屬性。
		 EX：
			<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
			<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
			<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
			<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
			<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
		# 相對於視窗 // https://bootstrap5.hexschool.com/docs/5.0/utilities/sizing/#relative-to-the-viewport
		 // 您還可以使用通用類別來設定相對於視窗的寬度和高度。
		 EX：
			<div class="min-vw-100">Min-width 100vw</div>
			<div class="min-vh-100">Min-height 100vh</div>
			<div class="vw-100">Width 100vw</div>
			<div class="vh-100">Height 100vh</div>
### 折疊 (Collapse)：
		# https://bootstrap5.hexschool.com/docs/5.0/components/collapse/

			JavaScript 的摺疊插件被用於顯示和隱藏內容。按鈕、錨點被用作為觸發器，對應到需要被切換的元素上。折疊一個元素會將它的 height 從當前的值轉換為 0。基於 CSS 處理動畫的方式，你不能
			在帶有 .collapse 的元素上使用 padding; 相反的，應該把它作為獨立的包裝元素。

		 // 點擊以下按鈕，透過改變 Class 來顯示及隱藏另一個元素：
		 EX：
			<p>
			  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
				Link with href
			  </a>
			  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
				Button with data-bs-target
			  </button>
			</p>
			<div class="collapse" id="collapseExample">
			  <div class="card card-body">
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
			  </div>
			</div>
### 表單 (Forms)	
		# https://bootstrap5.hexschool.com/docs/5.0/forms/overview/

			用於創建各種表單控制樣式、排版選項和自訂元件的範例和使用指南
			確保在輸入框上使用正確的 type 屬性（例如，email 用於電子郵件地址或 number 用於數字信息），以利用較新的輸入控制，如電子郵件驗證、號碼選擇等

		 EX：
			<form method="POST" action="#">
				<hr />
				<div className="mb-3">
					<label className="form-label">
						Description
					</label>
					<textarea className="form-control" id="submitReviewDescription" placeholder="Optional"
						rows={3} onChange={e => setReviewDescription(e.target.value)}>

					</textarea>
				</div>

				<div>
					<button type="button" onClick={() => props.submitReview(starInput, reviewDescription)} className="btn btn-primary mt-3">Submit Review</button>
				</div>
			</form>
### 列表群組 (List group)
		# https://bootstrap5.hexschool.com/docs/5.0/components/list-group/
		// 列表群組是一個具有彈性的元件，用於顯示一系列內容。可以修改、擴增以支援更多的內容。
		
		# 連結和按鈕

			使用<a>或 <button>，並加入.list-group-item-action 來創建具有 hover、禁用和啟用狀態的動態列表群組。
			我們分離這些偽類別，以確保由非交互元素組成的列表群組（如 <li> 或 <div> ）不提供點擊或觸擊。確保不要在這裡使用標準的 .btn。

		  EX：
			<div class="list-group">
			  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
				The current link item
			  </a>
			  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
			  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
			  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
			  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
			</div>
### 互動視窗 (Modal)
		# https://bootstrap5.hexschool.com/docs/5.0/components/modal/
		// 使用 Bootstrap JavaScript 的互動視窗插件來增加一個對話視窗，用於用戶提示、燈箱或完整的自訂內容。
		EX：
			// "modal fade" => 跳出互動視窗，並使背景淡化
			// data-bs-backdrop="static" => 不特別使用則預設模式，點擊空白處即可關閉視窗，static模式則無法關閉
			// data-bs-keyboard="false" => 不特別使用則預設模式，鍵盤ESC即可關閉視窗，false則無法關閉
			// "list-group-item list-group-item-action inactiveLink"  => 
			
			<!-- Button trigger modal -->
			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
			  Launch static backdrop modal
			</button>

			<!-- Modal -->
			<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			  <div class="modal-dialog">
				<div class="modal-content">
				  <div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				  </div>
				  <div class="modal-body">
					...
				  </div>
				  <div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Understood</button>
				  </div>
				</div>
			  </div>
			</div>
### 警報 (Alerts)
		# https://bootstrap5.hexschool.com/docs/5.0/components/alerts/
		// 使用少量可用及彈性的警報訊息為使用者操作提供上下文的內容回饋。
		
		EX： // 警報適用於任何長度的文本，以及可選的關閉按鈕。為了呈現正確的樣式，請必需使用 8 個內文樣式類別中的其中一個
			<div class="alert alert-primary" role="alert">
			  A simple primary alert—check it out!
			</div>
			<div class="alert alert-secondary" role="alert">
			  A simple secondary alert—check it out!
			</div>
			<div class="alert alert-success" role="alert">
			  A simple success alert—check it out!
			</div>
			<div class="alert alert-danger" role="alert">
			  A simple danger alert—check it out!
			</div>
			<div class="alert alert-warning" role="alert">
			  A simple warning alert—check it out!
			</div>
			<div class="alert alert-info" role="alert">
			  A simple info alert—check it out!
			</div>
			<div class="alert alert-light" role="alert">
			  A simple light alert—check it out!
			</div>
			<div class="alert alert-dark" role="alert">
			  A simple dark alert—check it out!
			</div>
	*/ <script>
		# HTML <script> async Attribute // https://www.w3schools.com/tags/att_script_async.asp
		# [HTML] <script>中defer跟async是什麼? // https://realdennis.medium.com/html-script-%E4%B8%ADdefer%E8%B7%9Fasync%E6%98%AF%E4%BB%80%E9%BA%BC-1166ee88d18
		// HTML <script> 元素能嵌入或引用要執行的程式碼。最常見的用途是嵌入或引用 JavaScript 程式碼。<script> 元素也能執行其他語言
		 EX：
			<script src="myscripts.js"></script>
			<script src="https://js.stripe.com/v3" async></script>

