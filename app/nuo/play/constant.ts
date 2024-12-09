// 定义 Section 类型
type Section = {
  name: string; // 标题
  url: string; // 音频链接
  str: string; // 内容字符串
};

// 定义 SectionMap 类型
type SectionMap = {
  [key: number | string]: Section; // 键为数字，值为 Section 类型
};

export const sectionMap: SectionMap = {
  1: {
    name: "起床出门",
    url: "https://nuo-english.s3.us-east-2.amazonaws.com/getup.wav",
    str: `场景英语表达分析
Morning Routine from Waking Up to Heading Out
I was woken up by my alarm at 8:10
I hit the snooze button for another 10 minutes of sleep
At 8:20, I had to get up
I went to the bathroom, brushed my teeth, washed my face, and applied face cream
I styled my hair with pomade for a classic slicked-back look
I grabbed my phone, work ID, and keys
I closed the door and double-checked if it was properly locked
Then I headed out for the day
应用 (Application)
基础描述版本
我被闹钟在8点10分叫醒
我按了贪睡按钮想再睡10分钟
8点20分我不得不起床了
我去洗手间刷牙洗脸擦护肤品
我用发蜡做了个复古油头造型
我拿上手机工卡和钥匙
我关上门并检查是否锁好
然后我出门了
场合变体
对同事
I overslept a bit this morning
早上我睡过头了一会
对朋友
Man I barely made it out of bed this morning
老兄我今天早上好不容易才爬起来
对长辈
I started my day a little later than usual today
今天我比平时晚起了一点
分析 (Analysis)
关键表达解析
wake up vs be woken up
自然醒来的表达
wake up
主动醒来的行为表达
be woken up
被动醒来的表达
hit the snooze button vs turn off alarm
贪睡按钮操作表达
hit the snooze button
更生动形象的表达方式
turn off alarm
直接关闭的表达方式
评估 (Evaluation)
表达效果比较
描述起床过程
I dragged myself out of bed
体现起床困难的状态
I jumped out of bed
形容精神饱满的起床状态
I slowly got up
描述慢慢起床的过程
描述整理过程
I rushed through my morning routine
匆忙进行晨间护理的表达
I took my time getting ready
从容准备的表达
I went about my usual morning routine
按平常节奏进行的表达
创造 (Creation)
个性化表达
赶时间场景
Time to dash through my morning prep
该快速完成晨间准备了
Running way behind schedule here
这里已经严重落后于计划了
悠闲场景
Taking it slow this lovely morning
在这个美好的早晨慢慢来
No rush just a peaceful start
不着急享受平静的开始
实践建议
情境扩展
匆忙版
Gotta sprint through this morning routine
必须快速完成这个早晨流程
悠闲版
Enjoying a relaxed morning start
享受轻松的早晨时光
糟糕版
Everything is going wrong this morning
今早所有事情都不顺心
心情变化版
疲惫时
Another morning another struggle
又一个早晨又一次挣扎
精神好
Ready to tackle the day ahead
准备迎接新的一天`,
  },
  2: {
    name: "开始工作",
    url: "https://nuo-english.s3.us-east-2.amazonaws.com/workstart.wav",
    str: `场景英语表达分析
A Typical Work Morning and Lunch Break
I arrive at the office and boot up my computer first thing in the morning
I open Notion to check my schedule and todo list
I launch my IDE and start working on the project
I open the design files to work on the UI implementation
When I need API documentation I consult with our Java developers
I debug and test the API integration
Our product manager schedules a Zoom meeting for requirement review
All relevant developers join to discuss the new features
We raise questions about unclear requirements
We also point out design issues that need improvement
At noon I grab my pre ordered lunch
I quickly finish my meal
I take the elevator to the company gym
I do some light exercise spending about 50 minutes walking on the treadmill
While exercising I watch some videos on my phone for entertainment
After working out I am all sweaty
Instead of taking a shower which would be time consuming I decide to freshen up
I go to the restroom to wipe off the sweat
Then I start my lunch break nap
应用 (Application)
基础描述版本
I am starting my workday at the office
我正在办公室开始我的工作日
First I need to boot up my computer and check my tasks
首先我需要启动电脑查看任务
I spend the morning coding and attending meetings
我整个上午都在编程和参加会议
At lunch I exercise in the gym before taking a break
午餐时我在健身房运动后休息
场合变体
对同事
Hey I will be in the requirement review meeting after I finish this API integration
嘿 我完成这个接口对接后就去参加需求评审会议
对朋友
Got a busy morning with coding and meetings but managed to squeeze in some exercise during lunch
上午很忙要写代码开会 不过午休时间还是抽空运动了下
对长辈
I have a good work life balance at this company they even provide a gym for employees
这家公司的工作生活平衡很好 甚至还为员工提供健身房
分析 (Analysis)
关键表达解析
boot up vs turn on
启动电脑的表达
boot up
更专业正式 常用于计算机场景
turn on
更口语化 使用范围更广
launch vs open
打开软件的表达
launch
正式用语 暗示启动较大的程序
open
通用说法 适用于所有类型文件和程序
evaluation (Evaluation)
表达效果比较
描述工作进度
I am working on the API integration
正在进行中 比较中性的表达
I am in the middle of the API integration
强调正处于关键阶段
I am about to finish the API integration
即将完成 带有时间紧迫感
描述运动强度
I do some light exercise
温和的表达 表示运动强度适中
I take a quick workout
简短有力 强调时间紧凑
I squeeze in some exercise
暗示时间有限 但仍然重视运动
Creation (Creation)
个性化表达
忙碌工作场景变体
I am juggling between coding and meetings this morning
我今天上午在编程和会议之间周旋
The morning flew by with back to back tasks
上午在一个接一个的任务中飞快过去
运动场景变体
I am sneaking in some exercise during lunch
我午餐时间偷偷做运动
I am treating myself to some me time at the gym
我在健身房享受属于自己的时光
实践建议
情境扩展
匆忙版
No time for shower just a quick freshen up before afternoon work
没时间洗澡 下午工作前快速整理一下
悠闲版
Taking my time to properly cool down after the workout
运动后悠闲地让身体冷却下来
疲惫版
The morning meetings drained me I really need this lunch break
上午的会议让我很疲惫 我真的需要这个午休时间
心情变化版
疲惫时
These meetings are wearing me out need some exercise to recharge
这些会议让我疲惫不堪 需要运动来充电
精神好
Feeling energized after the workout ready to tackle afternoon tasks
运动后感觉精力充沛 准备应对下午的任务`,
  },
  3: {
    name: "起床2",
    // url: "/audio/getup_new.wav",
    url: "https://nuo-english.s3.us-east-2.amazonaws.com/getup_new.wav",
    str: `Scene: Morning Routine
Here we go again with that stupid alarm at 8:10
又是该死的闹钟在8点10分响起
Hit the snooze button for another 10 minutes
按了贪睡按钮又睡了10分钟
Drag myself out of bed eventually
终于把自己从床上拖起来
Time to step on the scale first thing
先称个重
Looks like the workouts are paying off
看起来运动有点效果
Got to keep at it to lose this belly fat and stay healthy
得继续坚持减掉肚腩保持健康
Grab my white tee and throw on some jeans
拿件白T恤套上牛仔裤
This will do for today
今天就这身了
Head to the bathroom and grab my electric toothbrush
去卫生间拿我的电动牙刷
Check out this handsome devil in the mirror
照照镜子看看帅脸
Too good looking to be working a regular job honestly
这么帅的脸真不该打工
Time to freshen up
是时候洗漱了
This stupid allergies make me gag every time I brush my tongue
该死的过敏让我刷舌苔时都想干呕
Wash my face and put on some moisturizer
洗把脸涂上润肤霜
Great my bedhead is a total mess again
该死的又睡乱了发型
Dampen the hair first then style it with the blow dryer
先用水打湿头发再用吹风机造型
Add a bit of pomade to keep it from falling flat
抹点发蜡防止塌下来
Finish with some hairspray to set everything in place
最后喷点定型喷雾固定
What a hassle for this retro pompadour
麻烦的复古油头造型
Wash my hands and time to head out
洗个手准备出门
Grab my keys ID phone and prayer beads from the desk
从桌上拿上钥匙工卡手机和佛珠
Lock up and double check it is secure
锁好门再检查一遍
All set another painful workday begins
一切就绪又一个痛苦的工作日开始了
Analysis:
Key Expression Breakdown
step on the scale vs check weight
称重的表达
step on the scale
更自然的口语表达
check weight
更直接但不够生动
keep at it vs continue
坚持的表达
keep at it
更口语化更有动力感
continue
过于正式直接
freshen up vs get ready
整理打扮的表达
freshen up
更精炼优雅
get ready
较为平淡普通
handsome devil vs good looking
帅气的玩笑表达
handsome devil
带有自嘲幽默感
good looking
过于直白普通`,
  },
  4: {
    name: "午休",
    // url: "/audio/getup_new.wav",
    url: "https://nuo-english.s3.us-east-2.amazonaws.com/lunch.wav",
    str: `Scene: Lunch Break Workout and Study Session
First thing I need to do is grab my lunch from the break room
第一件事就是得从茶水间拿午餐
Looks like it's already 11:45
看起来已经11点45了
I have to wolf this down in 3 minutes
我不得不在3分钟内把午饭消灭掉
Time to clean up and get moving
是时候收拾收拾动起来了
Got to catch the elevator first
得先坐电梯
This gym location makes things tricky
健身房的位置让事情有点麻烦
Need to go to the 5th floor, then drag myself up the stairs to the 6th
需要先去5楼，然后把自己拖到6楼
First thing at the gym is scanning my phone
进健身房第一件事是扫码签到
Time to set up the treadmill
是时候设置跑步机了
This will do - 3km/h speed and level 6 incline
这样就行了 - 时速3公里，坡度6级
Keep at tracking with my Garmin watch
继续用佳明手表记录
Looks like it's going to be a light session today
看来今天是个轻松的运动日
Got to prop my phone up here
得把手机支在这里
Time to learn while walking
是时候边走边学了
My memory is too slow to learn quickly
我的记忆力太慢了，学不快
But I've got to keep at my studies
但我必须坚持学习
Eventually I'll become fluent
最终我会说得流利的
Trying to keep at being a healthy office worker
努力坚持做个健康的上班族
What a nice view from these windows
窗外的景色真好
Looks like perfect weather with blue skies
看起来是个蓝天白云的好天气
This will do - 55 minutes of workout done
这样就行了 - 55分钟运动完成
Time to wipe off and head back up
是时候擦干汗回楼上了
Need to rest up before another work session
需要休息一下再开始下午的工作
Analysis of Grammar Patterns Used:
时序表达模式
First thing
第一要务，强调优先性
Time to
是时候做某事，表示时机恰当
Eventually
最终，表达长期目标
动作描述模式
grab
抓取，暗含匆忙
drag oneself
拖着自己，暗含不情愿
keep at
坚持做某事，强调持续性
状态评价模式
looks like
看起来像
this will do
这样就行了
what a
感叹语气
情态表达模式
got to (gotta)
必须要，口语化表达
have to
不得不，较正式表达
need to
需要，中性表达`,
  },
  5: {
    name: "打工路上",
    url: "https://nuo-english.s3.us-east-2.amazonaws.com/work-routing.wav",
    str: `My body is still slowly waking up this morning
身体还在早晨的缓慢恢复中

Still in recovery mode, I head down seven floors to start my day
保持着半清醒状态，我走下七楼开始新的一天

I make my way toward the village entrance
我朝着村口走去

As I get closer to the village entrance, I notice more and more people gathering
当我越接近村口，我注意到越来越多的人在聚集

Looks like we are all ordinary workers heading to our jobs
看来我们都是普通的上班族呢

The breakfast vendors along the way are doing great business
路边的早餐摊位生意很好

Their food looks really tempting
他们的食物看起来很诱人

But unfortunately, I cannot buy breakfast here
但可惜的是，我不能在这里买早餐

I have to take the subway instead
我得去坐地铁

I arrive at the subway station and find my way to the starting platform
我到达地铁站，找到始发站台

I join the queue and wait patiently
我开始排队耐心等待

I usually manage to get a seat since this is the first station
因为是始发站，我通常能找到座位

That is exactly why I chose to rent an apartment here
这正是我选择在这里租房的原因

My past decision proves to be quite wise
我当初的选择证明是明智的

No need to squeeze onto crowded trains while standing
不用站着挤地铁

My body can gradually return to full alertness
身体可以慢慢恢复到完全清醒的状态

Though not fully awake, I listen to English audio lessons
虽然还没有完全清醒，我还是在听英语课程

Along with the rhythmic sounds of the subway, I close my eyes and focus on the English audio
伴随着地铁的节奏声，我闭上眼专注听英语

I believe my persistence will pay off eventually
我相信我的坚持最终会有回报

I transfer to Line 5 midway through my journey
途中我转乘5号线

Lucky me, I find a seat on this line too
幸运的是，这条线我也找到了座位

I can continue listening to my English lessons in comfort
我可以继续舒适地听我的英语课程

I am in such a good mood
我心情特别好

After 40 minutes, I arrive at my company station and exit
40分钟后，我到达公司所在的地铁站并出站

I check in for work
我打卡上班

I head to my usual breakfast vendor
我走向常去的早餐摊位

Same as always - eggs and steamed buns
和往常一样 - 鸡蛋和包子

My unchanging breakfast routine
我雷打不动的早餐习惯

I bring my breakfast to my desk
我把早餐带到工位上

After finishing breakfast
吃完早餐后

I drink the boxed milk from my desk
我喝掉放在工位上的盒装牛奶

Take some vitamins and lutein supplements
吃一些维生素和叶黄素补充剂

This truly is an authentic middle aged workers wellness routine
这真是一个地道的中年打工人养生日常

Once I finish eating and drinking, I tidy everything up
当我吃喝完毕，我收拾好一切

Time to start the actual work
该开始真正的工作了

Another painful workday officially begins
又一个痛苦的工作日正式开始了

Key Expression Analysis
关键表达分析

head down + direction vs make way toward
表示向下移动 vs 表示朝某方向前进

do great business vs be busy
生意很好（强调结果）vs 很忙（强调状态）

manage to + verb vs succeed in + verb
设法做到（口语） vs 成功做到（较正式）

Mood Variations
情绪变体表达

When Tired
疲惫时

I drag myself down the stairs
我拖着疲惫的身体下楼

When Energetic
精力充沛时

I stride down the stairs
我大步流星地下楼

When Rushed
匆忙时

I hurry down the stairs
我匆忙下楼

Practical Usage
实用场景

At the Platform
在站台上

The usual morning crowd is gathering
常见的早高峰人群在聚集

In the Train
在车厢里

I drift in and out of sleep
我时睡时醒

At Work
在工作中

Time to power up my computer
是时候启动电脑了`,
  },
};
