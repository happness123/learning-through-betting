# **审美在线的苹果app个人小店**



- ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/000.png?raw=true)

    # **隐于市,独木成琳**

    为了更好的阅读体验,可以扒拉到文末从「**阅读原文**」进入飞书文档.或者进入文档网址: 

    https://kxv36hgn51.feishu.cn/wiki/VZHHw4kKIipLZkkw7EZc6Ax0nYd?from=from_copylink

    > For a better reading experience, you can scroll to the end of the article from the "read the original text" to enter the Flying Book document. Or you can go to the document website. 

    # **先看效果**

    > Look at the effect first

    今天依旧直接上手苹果app的开发，搞一个小商店，效果如下：

    暂时无法在飞书文档外展示此内容

    完整代码加我微信单独发你，请备注来意。

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/001.png?raw=true)

    # **先看框架和思考**

    > First look at the framework and thinking

    先来看看整体页面的结构:

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/002.png?raw=true)

    标题栏、搜索框&购物车、商品轮播、以及4个页面。在正式排布这些元素之前，先把图片、图标、颜色、logo……这些先导入到“Assets.xcassets(资源)”里面留着待用。

    编程其实不难，基本语法了解之后就可以开始，到实践的时候主要是看做事的逻辑，或者说解决问题的步骤，目前比较主流的就是模块化，每一个代码文档实现一个功能，用在这里就是把每个页面、窗口、功能模块分开来编程，最后把它们串起来完成项目的开发，遵循这个解题思路，咱们就可以开始上手。

    打开Xcode，新建一个项目"Plant"，

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/003.png?raw=true)

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/004.png?raw=true)

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/005.png?raw=true)

    老三步了，创建完之后把所有需要用到的“菜”都洗好放到资源里，点击右键创建组，并按组存放：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/006.png?raw=true)

    这是颜色：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/007.png?raw=true)

    统一是线性的icon图标：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/008.png?raw=true)

    以及各种商品：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/009.png?raw=true)

    这些都是自由发挥，找个人喜欢的素材存放到此，或者直接人文件夹中拖入。需要注意的是，这些名字要与我的一样，否则后面写代码的时候，名字与我的不一样就会造成不必要的困扰，所以这里就先一字不差的模仿。

    然后就是模块和窗口，用文件夹来统一存放：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/010.png?raw=true)

    在“Model”文件夹下新建两个SwiftUI文档，取名叫“Tab”里面包含4个主界面：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/011.png?raw=true)

    这段代码主要用于定义应用程序中可能的选项卡，它为每个选项卡提供了一个易于理解和访问的标识符，也就是主界面。

    然后是“Plant”商品列表：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/012.png?raw=true)

    ```Swift
    struct Plant: Identifiable, Equatable {
        var id: String = UUID().uuidString
        var imageName: String
        var plantName: String
        var price: String
    }
    ```

    定义了一个名为 `Plant` 的结构体（struct）。这个结构体符合 `Identifiable` 和 `Equatable` 协议。

    - `Identifiable` 协议要求有一个叫做 `id` 的属性，用于唯一标识结构体的实例。在这里，`id` 是一个字符串，通过 `UUID().uuidString` 生成一个随机唯一标识符。
    - `Equatable` 协议是用于比较两个实例是否相等的协议，这在数组的操作中很有用。

    结构体包含了三个属性：

    - `imageName`：表示植物的图像名称。
    - `plantName`：表示植物的名称。
    - `price`：表示植物的价格。

    ```Swift
    var plants: [Plant] = [
        Plant(imageName: "Plant 1", plantName: "Leaf Plant", price: "$10.90"),
        Plant(imageName: "Plant 2", plantName: "Decorative Plant", price: "$22.60"),
        Plant(imageName: "Plant 3", plantName: "Potted Plant", price: "$18.90"),
        Plant(imageName: "Plant 4", plantName: "Decorative Plant", price: "$8.90"),
        Plant(imageName: "Plant 5", plantName: "Leaf Plant", price: "$30.90"),
    ]
    ```

    创建了一个包含几个样本数据的数组 `plants`。每个数组元素都是一个 `Plant` 结构体的实例，代表一个植物的信息，包括图像名称、植物名称和价格。这个数组可以用于展示植物列表或其他相关的界面。

    然后在就是“View”窗口文件夹，里面包含：

    - MainView：主页面，也可以理解为app的入口；
    - CustomCarousel：用来定制轮播的方式；
    - CustomCorner：定制圆角，这细节就能看出一个产品是否优雅美观，毕竟优雅是第一生产力，为了追求优雅，诞生了许多传世佳话和伟大的产品；
    - Teb View's：当然还有那4个界面，在这里抛砖引玉，就只创建这两个：
        - Home：首页；
        - DetailView：详情页；

    接下来咱们就来到**ContentView**，把主页面**MainView()**放进来：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/013.png?raw=true)

    然后回到MainView里，同样的进行关联，双向奔赴了算是：

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/014.png?raw=true)

    # **主页视图**

    > Home View

    OK，app的大体结构已经了解，那么现在正式开始构建细节。

    主页视图是这个植物商店应用的核心，它提供了用户首次进入应用时看到的界面。

    #### 1. 欢迎信息和搜索栏：

    完整代码如下

    ```Swift
    @ViewBuilder
    func HeaderView() -> some View {
        HStack {
            VStack(alignment: .leading, spacing: 7) {
                Text("Welcome 🔥")
                    .font(.title)
                Text("zhoukunlinStore")
                    .font(.title.bold())
            }
            .frame(maxWidth: .infinity, alignment: .leading)
    
            Button {
                // 处理通知按钮的点击事件
            } label: {
                Image(systemName: "bell")
                    .font(.title3)
                    .fontWeight(.semibold)
                    .foregroundColor(.black)
                    .padding(17)
                    .background {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .fill(.white)
                    }
                    .overlay(alignment: .topTrailing) {
                        Text("1")
                            .font(.caption)
                            .fontWeight(.semibold)
                            .foregroundColor(.white)
                            .padding(6)
                            .background {
                                Circle()
                                    .fill(Color("Green"))
                            }
                            .offset(x: 5, y: -10)
                    }
            }
        }
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/015.png?raw=true)

    - **欢迎信息：** `HeaderView` 中的 `VStack` 展示了简单的欢迎信息，使用了 SwiftUI 的 `Text` 来显示文字。这里使用了 emoji 表情增添友好感。

    - **搜索栏和通知按钮：** 通过 `HStack` 和 `Button` 实现搜索栏和通知按钮，其中通知按钮显示了未读通知的数量。

    #### 2. 搜索框和过滤按钮：

    完整代码如下

    ```Swift
    @ViewBuilder
    func SearchView() -> some View {
        HStack(spacing: 15) {
            HStack(spacing: 15) {
                Image("Search")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 24, height: 24)
    
                Divider()
                    .padding(.vertical, -6)
    
                TextField("Search", text: .constant(""))
            }
            .padding(15)
            .background {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(.white)
            }
    
            Button {
                // 处理过滤按钮的点击事件
            } label: {
                Image("Filter")
                    .resizable()
                    .renderingMode(.template)
                    .aspectRatio(contentMode: .fit)
                    .foregroundColor(.white)
                    .frame(width: 22, height: 22)
                    .padding(15)
                    .background {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .fill(.black)
                    }
            }
        }
        .padding(.top, 15)
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/016.png?raw=true)

    - **搜索框：** `SearchView` 中的 `TextField` 实现了一个简单的搜索框。用户可以在这里输入搜索关键字。

    - **过滤按钮：** 使用 `Button` 和 `Image` 实现了一个过滤按钮。用户可以点击此按钮以执行特定的过滤操作。

    #### 3. “Most Popular”植物卡片：

    完整代码如下

    ```Swift
    @ViewBuilder
    func PlantsView() -> some View {
        VStack(alignment: .leading, spacing: 15) {
            HStack(alignment: .center, spacing: 15) {
                Image("Grid")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 13, height: 13)
    
                Text("Most Popular")
                    .font(.title3)
                    .fontWeight(.semibold)
                    .frame(maxWidth: .infinity, alignment: .leading)
    
                Button("Show All") {
                    // 处理“Show All”按钮的点击事件
                }
                .font(.caption)
                .foregroundColor(.gray)
            }
            .padding(.leading, 5)
    
            // 使用自定义的 Carousel 展示植物卡片
            CustomCarousel(index: $currentIndex, items: plants, spacing: 25, cardPadding: 90, id: \.id) { plant, size in
                PlantCardView(plant: plant, size: size)
                    .contentShape(Rectangle())
                    .onTapGesture {
                        hideTabBar()
                        withAnimation(.interactiveSpring(response: 0.5, dampingFraction: 0.7, blendDuration: 0.7)){
                            currentDetailPlant = plant
                            showDetailView = true
                        }
                    }
            }
            .frame(height: 380)
            .padding(.top, 20)
            .padding(.horizontal, 10)
        }
        .padding(.top, 22)
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/017.png?raw=true)

    - **“Most Popular”标题：** 使用 `HStack` 展示了一个标题，包含了“Most Popular”文字和一个“Show All”按钮。

    - **自定义的 Carousel：** 通过 `CustomCarousel` 展示了植物卡片。这个自定义 Carousel 支持手势滑动，使得用户可以左右切换卡片。

    # **植物详细信息视图**

    > Plant Detail View

    植物详细信息视图是在点击主页上的植物卡片后展示的页面。

    #### 1. 通过点击植物卡片触发：

    完整代码如下

    ```Swift
    // 在主页视图中，点击植物卡片时触发显示详细信息视图
    CustomCarousel(index: $currentIndex, items: plants, spacing: 25, cardPadding: 90, id: \.id) { plant, size in
        PlantCardView(plant: plant, size: size)
            .contentShape(Rectangle())
            .onTapGesture {
                hideTabBar()
                withAnimation(.interactiveSpring(response: 0.5, dampingFraction: 0.7, blendDuration: 0.7)){
                    currentDetailPlant = plant
                    showDetailView = true
                }
            }
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/018.png?raw=true)

    - **触发显示详细信息视图：** 在主页视图的 `CustomCarousel` 中，每个植物卡片都包含了一个 `onTapGesture`，当用户点击卡片时，会触发显示详细信息视图的操作。同时，通过 `hideTabBar()` 隐藏了底部导航栏。

    #### 2. 使用了共享元素动画：

    完整代码如下

    ```Swift
    struct DetailView: View {
        // ...
        var body: some View {
            GeometryReader {
                let size = $0.size
                
                VStack(spacing: -50) {
                    // 图像的共享元素动画
                    Image(plant.imageName)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .matchedGeometryEffect(id: plant.id, in: animation)
                        .frame(width: size.width - 50, height: size.height / 1.6, alignment: .bottom)
                        .zIndex(1)
    
                    // 其他详细信息
                    VStack(spacing: 20) {
                        // ...
                    }
                    .padding(.top, 30)
                    .padding(.bottom, 15)
                    .padding(15)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
                    .background(content: {
                        CustomCorner(corners: [.topLeft, .topRight], radius: 25)
                            .fill(.white)
                            .ignoresSafeArea()
                    })
                    .offset(y: showContent ? 0 : (size.height / 1.5))
                    .zIndex(0)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
            }
            .padding(.top, 30)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .overlay(alignment: .top, content: {
                HeaderView()
                    .opacity(showContent ? 1 : 0)
            })
            .background {
                Rectangle()
                    .fill(Color("Green").gradient)
                    .ignoresSafeArea()
                    .opacity(showContent ? 1 : 0)
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 0.35).delay(0.05)){
                    showContent = true
                }
            }
        }
    }
    ```

    - **共享元素动画：** 在 `DetailView` 中，植物详细信息的图像使用了 `matchedGeometryEffect` 共享元素动画。这个效果使得图像在两个视图之间平滑过渡，让用户感到流畅和自然。

    # **主视图**

    > MainView

    主视图是整个应用的容器，包含了底部导航栏和各个子视图。

    #### 1. 使用 TabView 实现底部导航栏：

    ```Swift
    struct MainView: View {
        // ...
        var body: some View {
            ZStack(alignment: .bottom) {
                TabView(selection: $currentTab) {
                    // 各个子视图，例如 Home、Scan、Files、Cart
                }
    
                // 自定义的 Tab Bar
                TabBar()
                    .offset(y: showTabBar ? 0 : 130)
                    .animation(.interactiveSpring(response: 0.6, dampingFraction: 0.7, blendDuration: 0.7), value: showTabBar)
            }
            // ...
        }
    
        // ...
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/019.png?raw=true)

    - **TabView：** 使用了 SwiftUI 提供的 `TabView`，通过 `$currentTab` 控制当前选中的 Tab。

    - **各个子视图：** 在 `TabView` 内部，包含了应用的不同页面，比如 Home、Scan、Files、Cart 等。

    #### 2. 包含一个隐藏的系统 Tab Bar，并通过自定义 Tab Bar 替代显示：

    ```Swift
    init(){
        // MARK: For Hiding Native Tab Bar
        // As of Xcode 14.1 Beta .toolbar(.hidden) is broken for Native SwiftUI TabView
        UITabBar.appearance().isHidden = true
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/020.png?raw=true)

    - **隐藏系统** **Tab Bar****：** 在 `MainView` 的初始化中，通过 `UITabBar.appearance().isHidden = true` 隐藏了系统的 Tab Bar。

    ```Swift
    @ViewBuilder
    func TabBar()->some View{
        HStack(spacing: 0){
            // 循环创建自定义 Tab Bar 的各个 Tab 按钮
            // ...
        }
        // ...
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/021.png?raw=true)

    - **自定义** **Tab Bar** **(**`TabBar`)： 在 `MainView` 中包含了一个自定义的 Tab Bar，通过 `HStack` 和循环创建 Tab 按钮的方式实现。

    # **其他辅助性视图和模型**

    > Other auxiliary views and models

    在应用中，有一些辅助性视图和模型，它们负责展示特定信息或提供特定功能。

    #### 1. 搜索框（SearchView）：

    ```Swift
    @ViewBuilder
    func SearchView()->some View{
        HStack(spacing: 15){
            HStack(spacing: 15){
                Image("Search")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 24, height: 24)
    
                Divider()
                    .padding(.vertical,-6)
    
                TextField("Search", text: .constant(""))
            }
            .padding(15)
            .background {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(.white)
            }
    
            Button {
                // 点击搜索按钮的处理逻辑
            } label: {
                Image("Filter")
                    .resizable()
                    .renderingMode(.template)
                    .aspectRatio(contentMode: .fit)
                    .foregroundColor(.white)
                    .frame(width: 22, height: 22)
                    .padding(15)
                    .background {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .fill(.black)
                    }
            }
        }
        .padding(.top,15)
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/022.png?raw=true)

    - **SearchView：** 通过 `HStack` 布局包含了一个搜索图标、文本输入框和一个筛选按钮。

    - **TextField：** 用户可以在文本输入框中输入搜索关键字。

    - **Button****（筛选按钮）：** 提供了一个点击触发筛选功能的按钮。

    #### 2. 植物卡片（PlantCardView）：

    ```Swift
    @ViewBuilder
    func PlantCardView(plant: Plant,size: CGSize)->some View{
        ZStack{
            // 渐变背景
            LinearGradient(colors: [Color("Card Top"),Color("Card Bottom")], startPoint: .topLeading, endPoint: .bottomTrailing)
                .clipShape(RoundedRectangle(cornerRadius: 30, style: .continuous))
    
            VStack{
                // 收藏按钮
                Button {
                    // 处理收藏按钮点击事件
                } label: {
                    Image(systemName: "suit.heart.fill")
                        .font(.title3)
                        .foregroundColor(Color("Green"))
                        .frame(width: 50, height: 50)
                        .background {
                            RoundedRectangle(cornerRadius: 12, style: .continuous)
                                .fill(.white)
                        }
                }
                .frame(maxWidth: .infinity,alignment: .topTrailing)
                .padding(15)
    
                // 植物图片或占位符
                VStack{
                    if currentDetailPlant?.id == plant.id && showDetailView{
                        Rectangle()
                            .fill(.clear)
                    }else{
                        Image(plant.imageName)
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .matchedGeometryEffect(id: plant.id, in: animation)
                            .padding(.bottom,-35)
                            .padding(.top,-50)
                    }
                }
                .zIndex(1)
    
                // 植物信息
                VStack{
                    // 植物名称和价格
                    // ...
                    
                    // 购物车按钮
                    Button {
                        // 处理购物车按钮点击事件
                    } label: {
                        Image("Cart")
                            .resizable()
                            .renderingMode(.template)
                            .aspectRatio(contentMode: .fit)
                            .frame(width: 22, height: 22)
                            .foregroundColor(.white)
                            .frame(width: 45, height: 45)
                            .background {
                                RoundedRectangle(cornerRadius: 12, style: .continuous)
                                    .fill(.black)
                            }
                    }
                }
                .padding([.horizontal,.top],15)
                .frame(maxWidth: .infinity)
                .frame(height: 100)
                .background {
                    RoundedRectangle(cornerRadius: 25, style: .continuous)
                        .fill(.white)
                }
                .padding(10)
                .zIndex(0)
            }
        }
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/023.png?raw=true)

    - **PlantCardView：** 用于展示单个植物的卡片，包含了植物的图片、名称、价格以及收藏和购物车按钮。

    - **按钮处理事件：** 对于收藏按钮和购物车按钮，代码中有注释标明相应的处理事件。

    #### 3. 头部视图（HeaderView）：

    ```Swift
    @ViewBuilder
    func HeaderView()->some View{
        HStack{
            VStack(alignment: .leading, spacing: 7) {
                // 欢迎信息
                Text("Welcome 🔥")
                    .font(.title)
                
                // 店铺名称
                Text("zhoukunlinStore")
                    .font(.title.bold())
            }
            .frame(maxWidth: .infinity,alignment: .leading)
    
            // 消息提醒按钮
            Button {
                // 处理消息提醒按钮点击事件
            } label: {
                Image(systemName: "bell")
                    .font(.title3)
                    .fontWeight(.semibold)
                    .foregroundColor(.black)
                    .padding(17)
                    .background {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .fill(.white)
                    }
                    // 消息提醒小圆点
                    .overlay(alignment: .topTrailing) {
                        Text("1")
                            .font(.caption)
                            .fontWeight(.semibold)
                            .foregroundColor(.white)
                            .padding(6)
                            .background {
                                Circle()
                                    .fill(Color("Green"))
                            }
                            .offset(x: 5, y: -10)
                    }
            }
        }
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/024.png?raw=true)

    - **HeaderView：** 包含了欢迎信息、店铺名称和消息提醒按钮。

    - **消息提醒按钮：** 提供了一个点击触发消息提醒功能的按钮，同时显示未读消息数量的小圆点。

    # **Carousel** **逻辑**

    > Carousel logic

    Carousel 是一个自定义的视图组件，用于展示“Most Popular”植物分类。以下是 Carousel 的核心逻辑和功能解释：

    #### 自定义 Carousel 视图（CustomCarousel）：

    ```Swift
    struct CustomCarousel<Content: View, Item, ID>: View where Item: RandomAccessCollection, ID: Hashable, Item.Element: Equatable {
        // ...
        var body: some View {
            GeometryReader { proxy in
                let size = proxy.size
                
                // 计算卡片的宽度，考虑到间距和填充
                let cardWidth = size.width - (cardPadding - spacing)
                
                HStack(spacing: spacing) {
                    ForEach(items, id: id) { plant in
                        // 卡片内容，传入植物数据和卡片尺寸
                        content(plant, CGSize(width: size.width - cardPadding, height: size.height))
                            .frame(width: size.width - cardPadding, height: size.height)
                            .contentShape(Rectangle())
                            .onTapGesture {
                                // 点击卡片，触发显示详细信息视图的逻辑
                                hideTabBar()
                                withAnimation(.interactiveSpring(response: 0.5, dampingFraction: 0.7, blendDuration: 0.7)) {
                                    currentDetailPlant = plant
                                    showDetailView = true
                                }
                            }
                    }
                }
                .offset(x: offset)
                .contentShape(Rectangle())
                .gesture(
                    DragGesture(minimumDistance: 5)
                        .updating($translation, body: { value, out, _ in
                            out = value.translation.width
                        })
                        .onChanged{onChanged(value: $0, cardWidth: cardWidth)}
                        .onEnded{onEnd(value: $0, cardWidth: cardWidth)}
                )
            }
            .animation(.easeInOut, value: translation == 0)
        }
        
        // ...
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/025.png?raw=true)

    - **横向滚动视图：** 使用 `HStack` 实现横向滚动效果，每个卡片之间有间距（spacing）。

    - **卡片点击事件：** 在卡片上添加了 `onTapGesture`，点击卡片时会触发显示详细信息视图的逻辑。这里使用了 `hideTabBar()` 函数来隐藏底部导航栏，并设置了动画效果。

    - **手势滑动支持：** 使用 `DragGesture` 添加了手势滑动的支持，通过计算位移（translation）来实现卡片的平滑滑动效果。

    - **动画效果：** 使用 `withAnimation` 包裹代码块，使卡片的滑动具有动画效果。

    #### onChanged 和 onEnd 方法：

    ```Swift
    func onChanged(value: DragGesture.Value, cardWidth: CGFloat){
        // 限制超出滚动范围
        var translationX = value.translation.width
        translationX = (index == 0 && translationX > 0 ? (translationX / 4) : translationX)
        translationX = (index == items.count - 1 && translationX < 0 ? (translationX / 4) : translationX)
        offset = translationX + lastStoredOffset
    }
    
    func onEnd(value: DragGesture.Value, cardWidth: CGFloat){
        // 计算当前索引
        var _index = (offset / cardWidth).rounded()
        _index = max(-CGFloat(items.count - 1), _index)
        _index = min(_index, 0)
        
        currentIndex = Int(_index)
        // 更新索引
        index = -currentIndex
        withAnimation(.interactiveSpring(response: 0.4, dampingFraction: 1, blendDuration: 1)){
            // 移除额外的空间
            let extraSpace = index == 0 ? 0 : (cardPadding / 2)
            offset = (cardWidth * _index) + extraSpace
        }
        lastStoredOffset = offset
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/026.png?raw=true)

    - **onChanged 方法：** 在手势滑动过程中，限制了超出滚动范围，并根据当前索引是否为边界来减缓滑动速度。

    - **onEnd 方法：** 在手势滑动结束时，通过计算当前索引来确定最终位置，并使用动画效果实现平滑过渡。

    通过这些逻辑，CustomCarousel 实现了一个流畅的植物卡片展示效果，支持手势滑动和点击卡片显示详细信息。这为用户提供了直观、交互性强的植物浏览体验。

    # **详细信息视图逻辑**

    > Detail view logic

    详细信息视图（DetailView）是在点击植物卡片时弹出的，用于展示选中植物的详细信息。以下是其核心逻辑和功能解释：

    #### DetailView 视图：

    ```Swift
    struct DetailView: View {
        @Binding var showView: Bool
        var animation: Namespace.ID
        var plant: Plant
        @State var showContent: Bool = false
        
        var body: some View {
            GeometryReader { geometry in
                let size = geometry.size
                
                VStack(spacing: -50) {
                    // 图片展示，使用共享元素动画
                    Image(plant.imageName)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .matchedGeometryEffect(id: plant.id, in: animation)
                        .frame(width: size.width - 50, height: size.height / 1.6, alignment: .bottom)
                        .zIndex(1)
                    
                    VStack(spacing: 20) {
                        HStack {
                            // 植物名称
                            Text(plant.plantName)
                                .font(.title)
                                .fontWeight(.bold)
                                .lineLimit(2)
                                .frame(maxWidth: .infinity, alignment: .leading)
                            
                            // 植物价格
                            Text(plant.price)
                                .font(.title3.bold())
                                .padding(.horizontal, 12)
                                .padding(.vertical, 8)
                                .background {
                                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                                        .fill(.green.opacity(0.1))
                                }
                        }
                        
                        // 植物描述
                        Text("Lorem Ipsum is simply dummy text of the printing and typesetting industry")
                            .font(.callout)
                            .foregroundColor(.gray)
                            .multilineTextAlignment(.leading)
                        
                        // 购买按钮
                        Button("Buy Now") {
                            // 添加购买逻辑
                        }
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .overlay(alignment: .leading) {
                            // 购物车图标
                            Image("Cart")
                                .resizable()
                                .renderingMode(.template)
                                .aspectRatio(contentMode: .fit)
                                .frame(width: 26, height: 26)
                        }
                        .foregroundColor(.white)
                        .padding()
                        .background {
                            RoundedRectangle(cornerRadius: 15, style: .continuous)
                                .fill(.black)
                        }
                        .padding(.top, 25)
                    }
                    .padding(.top, 30)
                    .padding(.bottom, 15)
                    .padding(15)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
                    .background(content: {
                        // 自定义圆角
                        CustomCorner(corners: [.topLeft, .topRight], radius: 25)
                            .fill(.white)
                            .ignoresSafeArea()
                    })
                    .offset(y: showContent ? 0 : (size.height / 1.5))
                    .zIndex(0)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
            }
            .padding(.top, 30)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .overlay(alignment: .top, content: {
                // 头部视图
                HeaderView()
                    .opacity(showContent ? 1 : 0)
            })
            .background {
                // 背景渐变
                Rectangle()
                    .fill(Color("Green").gradient)
                    .ignoresSafeArea()
                    .opacity(showContent ? 1 : 0)
            }
            .onAppear {
                // 在视图出现时添加动画
                withAnimation(.easeInOut(duration: 0.35).delay(0.05)){
                    showContent = true
                }
            }
        }
        
        // 头部视图
        @ViewBuilder
        func HeaderView() -> some View {
            Button {
                // 关闭视图，并显示底部导航栏
                withAnimation(.easeInOut(duration: 0.3)){
                    showContent = false
                }
                
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.05){
                    showTabBar()
                    withAnimation(.easeInOut(duration: 0.35)){
                        showView = false
                    }
                }
            } label: {
                Image(systemName: "chevron.left")
                    .font(.title3)
                    .fontWeight(.semibold)
                    .foregroundColor(.white)
            }
            .padding(15)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/027.png?raw=true)

    - **图像展示：** 通过 `GeometryReader` 获取视图的尺寸，展示植物的图片，使用 `matchedGeometryEffect` 实现共享元素动画效果。

    - **详细信息展示：** 展示植物的名称、价格、描述等详细信息，并提供购买按钮。

    - **共享元素动画：** 图片的共享元素动画通过 `matchedGeometryEffect` 实现。该动画让图像在主页和详细信息页之间平滑过渡，提升用户体验。

    - **购买逻辑：** 购买按钮点击后可以添加具体的购买逻辑。

    - **头部视图：** 包含一个返回按钮，点击返回按钮关闭详细信息视图，并显示底部导航栏。添加了动画效果以提升用户体验。

    通过这些逻辑，DetailView 实现了在点击植物卡片时弹出的详细信息展示，同时通过共享元素动画实现了图像的平滑过渡效果。

    # **主页视图逻辑**

    > summarise

    #### 主页视图（Home）：

    ```Swift
    struct Home: View {
        @State var currentIndex: Int = 0
        @State var showDetailView: Bool = false
        @State var currentDetailPlant: Plant?
        @Namespace var animation
        
        var body: some View {
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 15) {
                    // 头部视图
                    HeaderView()
                    
                    // 搜索框
                    SearchView()
                    
                    // 植物分类卡片
                    PlantsView()
                }
                .padding(15)
                .padding(.bottom, 50) // 适应底部 Tab Bar
            }
            .overlay {
                // 弹出详细信息视图
                if let currentDetailPlant, showDetailView {
                    DetailView(showView: $showDetailView, animation: animation, plant: currentDetailPlant)
                        .transition(.asymmetric(insertion: .identity, removal: .offset(x: 0.5)))
                }
            }
        }
        
        // 头部视图
        @ViewBuilder
        func HeaderView() -> some View {
            HStack {
                VStack(alignment: .leading, spacing: 7) {
                    Text("Welcome 🔥")
                        .font(.title)
                    Text("zhoukunlinStore")
                        .font(.title.bold())
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                
                // 提醒图标
                Button {
                    // 添加提醒按钮逻辑
                } label: {
                    Image(systemName: "bell")
                        .font(.title3)
                        .fontWeight(.semibold)
                        .foregroundColor(.black)
                        .padding(17)
                        .background {
                            RoundedRectangle(cornerRadius: 10, style: .continuous)
                                .fill(.white)
                        }
                        // 角标
                        .overlay(alignment: .topTrailing) {
                            Text("1")
                                .font(.caption)
                                .fontWeight(.semibold)
                                .foregroundColor(.white)
                                .padding(6)
                                .background {
                                    Circle()
                                        .fill(Color("Green"))
                                }
                                .offset(x: 5, y: -10)
                        }
                }
            }
        }
        
        // 搜索框视图
        @ViewBuilder
        func SearchView() -> some View {
            HStack(spacing: 15) {
                HStack(spacing: 15) {
                    // 搜索图标
                    Image("Search")
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 24, height: 24)
                    
                    Divider()
                        .padding(.vertical, -6)
                    
                    // 搜索输入框
                    TextField("Search", text: .constant(""))
                }
                .padding(15)
                .background {
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .fill(.white)
                }
                
                // 筛选按钮
                Button {
                    // 添加筛选按钮逻辑
                } label: {
                    Image("Filter")
                        .resizable()
                        .renderingMode(.template)
                        .aspectRatio(contentMode: .fit)
                        .foregroundColor(.white)
                        .frame(width: 22, height: 22)
                        .padding(15)
                        .background {
                            RoundedRectangle(cornerRadius: 10, style: .continuous)
                                .fill(.black)
                        }
                }
            }
            .padding(.top, 15)
        }
        
        // 植物分类卡片
        @ViewBuilder
        func PlantsView() -> some View {
            VStack(alignment: .leading, spacing: 15) {
                HStack(alignment: .center, spacing: 15) {
                    // 网格图标
                    Image("Grid")
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 13, height: 13)
                    
                    Text("Most Popular")
                        .font(.title3)
                        .fontWeight(.semibold)
                        .frame(maxWidth: .infinity, alignment: .leading)
                    
                    // 查看全部按钮
                    Button("Show All") {
                        // 添加查看全部按钮逻辑
                    }
                    .font(.caption)
                    .foregroundColor(.gray)
                }
                .padding(.leading, 5)
                
                // Snap Carousel（植物卡片流）
                CustomCarousel(index: $currentIndex, items: plants, spacing: 25, cardPadding: 90, id: \.id) { plant, size in
                    // 植物卡片视图
                    PlantCardView(plant: plant, size: size)
                        .contentShape(Rectangle())
                        .onTapGesture {
                            hideTabBar()
                            withAnimation(.interactiveSpring(response: 0.5, dampingFraction: 0.7, blendDuration: 0.7)) {
                                currentDetailPlant = plant
                                showDetailView = true
                            }
                        }
                }
                .frame(height: 380)
                .padding(.top, 20)
                .padding(.horizontal, 10)
            }
            .padding(.top, 22)
        }
    }
    ```

    ![img](https://github.com/zhoukunlin/ImageBed/blob/main/配图库/PlantStore/028.png?raw=true)

    - **ScrollView 实现垂直滚动效果：** 使用 `ScrollView` 包裹整个视图，设置 `showsIndicators` 为 `false`，以隐藏滚动条，使得内容可以在垂直方向上滚动。

    - **HeaderView 显示欢迎信息：** 包含欢迎信息和商店名称的头部视图。

    - **SearchView 实现搜索栏：** 包含搜索图标、输入框和筛选按钮，通过 `RoundedRectangle` 绘制圆角背景。

    - **PlantsView 展示植物卡片：** 包含“Most Popular”分类标题、网格、图标和查看全部按钮。使用了自定义的 Snap Carousel（植物卡片流）来展示植物的卡片，实现了流畅的滑动效果。

    #### Snap Carousel 逻辑解释：

    ```Swift
    // CustomCarousel 的定义
    struct CustomCarousel<Content: View, Item, ID>: View where Item: RandomAccessCollection, ID: Hashable, Item.Element: Equatable {
        // ...（省略部分代码）
        var body: some View {
            GeometryReader { proxy in
                let size = proxy.size
                // ...（省略部分代码）
    
                HStack(spacing: spacing) {
                    ForEach(items, id: id) { plant in
                        let index = indexOf(item: plant)
                        content(plant, CGSize(width: size.width - cardPadding, height: size.height))
                            .frame(width: size.width - cardPadding, height: size.height)
                            .contentShape(Rectangle())
                    }
                }
                .offset(x: offset)
                .contentShape(Rectangle())
                .gesture(
                    DragGesture(minimumDistance: 5)
                        .updating($translation, body: { value, out, _ in
                            out = value.translation.width
                        })
                        .onChanged { onChanged(value: $0, cardWidth: cardWidth) }
                        .onEnded { onEnd(value: $0, cardWidth: cardWidth) }
                )
            }
            .animation(.easeInOut, value: translation == 0)
        }
        // ...（省略部分代码）
    }
    ```

    - **Snap** **Carousel** **实现：** 使用了自定义的 `CustomCarousel`，其中 `content` 参数传递了植物卡片的视图，`id` 参数指定了植物的唯一标识符。通过 `GeometryReader` 获取父视图大小，然后使用 `HStack` 包裹 `ForEach` 循环展示植物卡片。拖拽手势实现了卡片的滑动效果。

    - **PlantsView 在点击植物卡片时触发详细信息视图显示：** 在点击卡片时调用 `hideTabBar` 方法隐藏底部导航栏，然后使用 `withAnimation` 显示详细信息视图。

    这样，主页视图的逻辑就实现了欢迎信息、搜索栏以及“Most Popular”分类的植物卡片展示，并通过 Snap Carousel 实现了卡片的流畅切换效果。

    # **主视图逻辑**

    > Main view logic

    ```Swift
    // MainView 的定义
    struct MainView: View {
        @State var currentTab: Tab = .home
        @Namespace var animation
        @State var showTabBar: Bool = true
        
        init() {
            // 隐藏系统 Tab Bar
            UITabBar.appearance().isHidden = true
        }
        
        var body: some View {
            ZStack(alignment: .bottom) {
                TabView(selection: $currentTab) {
                    // ...（省略其他标签页）
                }
                
                // 自定义的 Tab Bar
                TabBar()
                    .offset(y: showTabBar ? 0 : 130)
                    .animation(.interactiveSpring(response: 0.6, dampingFraction: 0.7, blendDuration: 0.7), value: showTabBar)
            }
            .ignoresSafeArea(.keyboard, edges: .bottom)
            .onReceive(NotificationCenter.default.publisher(for: .init("SHOWTABBAR"))) { _ in
                showTabBar = true
            }
            .onReceive(NotificationCenter.default.publisher(for: .init("HIDETABBAR"))) { _ in
                showTabBar = false
            }
        }
        
        // ...（省略部分代码）
    
        // 自定义 Tab Bar
        @ViewBuilder
        func TabBar() -> some View {
            HStack(spacing: 0) {
                ForEach(Tab.allCases, id: \.rawValue) { tab in
                    // ...（省略部分代码）
                }
            }
            .padding(.horizontal, 15)
            .animation(.interactiveSpring(response: 0.5, dampingFraction: 0.65, blendDuration: 0.65), value: currentTab)
            .background {
                // 自定义角落形状
                CustomCorner(corners: [.topLeft, .topRight], radius: 25)
                    .fill(Color("Tab"))
                    .ignoresSafeArea()
            }
        }
    }
    ```

    - **TabView 实现底部导航：** 使用了 SwiftUI 提供的 `TabView`，其中 `selection` 参数绑定了当前选中的标签页，通过 `$currentTab` 进行控制。在 `TabView` 内，展示了不同的标签页，这里省略了其他标签页的代码。

    - **隐藏系统** **Tab Bar****：** 在 `init()` 方法中，通过 `UITabBar.appearance().isHidden = true` 隐藏了系统的 Tab Bar，避免与自定义 Tab Bar 冲突。

    - **自定义** **Tab Bar** **替代系统 Tab Bar：** 使用 `TabBar()` 自定义的 Tab Bar 替代系统的 Tab Bar。`offset` 属性控制了 Tab Bar 的显示和隐藏，通过监听 `NotificationCenter` 中的通知来实现。

    这样，MainView 包含一个底部导航，隐藏了系统 Tab Bar，并使用自定义的 Tab Bar 进行替代。

    不禁让我想起之前的todo list项目，系统的TabBar总是影响美观，但我又无计可施，根源就在这里，没有用自定义的BabBar替代，只是叠加而已。

    # **总结归纳**

    > summarise

    啊～又是一个超长的讲解，爆肝好几晚，不过非常值得，现在咱们来总结一下。这个项目是一个植物商店应用的原型，使用 SwiftUI 构建。它包含了几个关键的视图：

    | No.  | 知识点                             | 说人话                                                       |
    | ---- | ---------------------------------- | ------------------------------------------------------------ |
    | 1    | **主页视图（Home）**               | 展示了欢迎信息、搜索栏以及“Most Popular”分类的植物卡片。利用自定义 Carousel 实现了卡片的流畅切换效果。 |
    | 2    | **植物详细信息视图（DetailView）** | 通过点击植物卡片触发，展示了选定植物的详细信息。使用了共享元素动画，让图像平滑过渡。 |
    | 3    | **主视图（MainView）**             | 使用 TabView 实现底部导航栏。包含一个隐藏的系统 Tab Bar，并通过自定义 Tab Bar 替代显示。 |
    | 4    | **其他辅助性视图和模型**           | 包括搜索框（SearchView）、植物卡片（PlantCardView）、头部视图（HeaderView）等。 |

    这里需要注意几个关键性逻辑：

    | No.  | 知识点                | 说人话                                                       |
    | ---- | --------------------- | ------------------------------------------------------------ |
    | 1    | **Carousel** **逻辑** | 自定义的 Carousel 用于展示“Most Popular”植物分类。Carousel 支持手势滑动，并在点击植物卡片时触发详细信息视图的显示。 |
    | 2    | **详细信息视图逻辑**  | 详细信息视图在点击植物卡片时弹出，展示了植物的图像、名称、价格、描述等详细信息。使用共享元素动画实现了图像的平滑过渡。 |
    | 3    | **主页视图逻辑**      | 主页视图包含了欢迎信息、搜索栏和植物分类卡片。通过 ScrollView 实现了垂直滚动效果，使得内容适应屏幕高度。 |
    | 4    | **主视图逻辑**        | MainView 包含一个 TabView，实现了底部导航。隐藏了系统 Tab Bar，并使用自定义的 Tab Bar 替代。 |
    | 5    | **辅助视图逻辑**      | SearchView 包含了一个搜索框和过滤按钮。HeaderView 显示了欢迎信息和消息通知按钮。 |

    感谢你的耐心，期待你的精进，我们下期再见。

    **标签**

    > Tags

    [编程](https://kxv36hgn51.feishu.cn/wiki/wikcnGrTUbs5WbYYtM9qRhQyp6g)[Swift](https://kxv36hgn51.feishu.cn/wiki/GSFewSmhqizDXfksatCc7QQ6nid)[Swift最小完整功能](https://kxv36hgn51.feishu.cn/wiki/PSkiwes1ziufoFkP1jVcggimnph)

    参考文献

    > References

    [ 1 ] https://youtu.be/6jfCLVeuY08?si=df5tP5t-va6eUKwU