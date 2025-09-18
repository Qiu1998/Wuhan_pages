import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, Users, BookOpen, Scroll, Crown, Building2, Palette } from 'lucide-react';

const Culture: React.FC = () => {
  const culturalPeriods = [
    {
      period: '古代文明',
      timeRange: '商周 - 明清',
      icon: <Crown className="w-6 h-6 text-amber-600" />,
      description: '武汉地区自商周时期就有人类活动，春秋战国时期属楚国腹地，楚文化在此深深扎根。',
      highlights: ['楚文化发源地', '古代商贸重镇', '文人墨客聚集地'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/2ffa6f09-cdf2-4326-8a76-8f5b0ab4e0ba/images/70fcda16-94a7-11f0-a567-1ea3ef713798_0.jpg'
    },
    {
      period: '近现代变迁',
      timeRange: '1861年 - 1949年',
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      description: '汉口开埠后，武汉成为中国内陆最大的通商口岸，中西文化在此交融碰撞。',
      highlights: ['洋务运动重镇', '辛亥革命首义', '民族工业发源地'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/8ad94526-d509-43c3-af93-69f18dbafc3b/images/6a338bbc-94a7-11f0-a567-1ea3ef713798_0.jpg'
    },
    {
      period: '现代发展',
      timeRange: '1949年 - 至今',
      icon: <Palette className="w-6 h-6 text-green-600" />,
      description: '新中国成立后，武汉成为重要的工业基地和科教中心，文化事业蓬勃发展。',
      highlights: ['科教文化中心', '现代化都市', '文化创新高地'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/7ea0107f-f7ce-4fe0-9e62-946e9fe4a42c/images/7433dd92-94a7-11f0-9448-4607c254ba9d_0.jpg'
    }
  ];

  const culturalFeatures = [
    {
      title: '楚文化传承',
      description: '作为楚文化的重要发源地，武汉保留了丰富的楚文化遗产，从出土文物到民俗传统，无不体现着楚人的智慧与创造力。',
      icon: <Scroll className="w-8 h-8 text-purple-600" />,
      features: ['楚式建筑', '楚辞文学', '楚地音乐', '传统工艺']
    },
    {
      title: '码头文化',
      description: '长江与汉江交汇处的地理优势，造就了武汉独特的码头文化，形成了开放包容、敢为人先的城市性格。',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      features: ['商贸文化', '码头号子', '江湖义气', '开放包容']
    },
    {
      title: '教育文化',
      description: '武汉是中国重要的科教中心，拥有众多高等院校，形成了浓厚的学术氛围和教育传统。',
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      features: ['百年学府', '学术传统', '科研创新', '人才荟萃']
    }
  ];

  const culturalSites = [
    {
      name: '黄鹤楼',
      category: '古建筑',
      description: '江南三大名楼之一，历代文人墨客题咏胜地',
      significance: '文学地标',
      image: 'https://miaoda-site-img.cdn.bcebos.com/15a0ff62-27f4-4ee6-a379-7700365725cf/images/6a3d4b2a-94a7-11f0-9448-4607c254ba9d_0.jpg'
    },
    {
      name: '归元寺',
      category: '宗教文化',
      description: '武汉著名佛教寺院，清代建筑艺术典范',
      significance: '宗教圣地',
      image: 'https://miaoda-site-img.cdn.bcebos.com/2ffa6f09-cdf2-4326-8a76-8f5b0ab4e0ba/images/70fcda16-94a7-11f0-a567-1ea3ef713798_0.jpg'
    },
    {
      name: '武汉大学',
      category: '教育文化',
      description: '百年名校，樱花盛开时节美不胜收',
      significance: '学术殿堂',
      image: 'https://miaoda-site-img.cdn.bcebos.com/6f88faa6-c523-49f2-9ca0-304ddf7c73b4/images/6e18710c-94a7-11f0-b42d-8af640abeb71_0.jpg'
    },
    {
      name: '汉口江滩',
      category: '现代文化',
      description: '长江沿岸文化休闲带，展现现代武汉风貌',
      significance: '城市客厅',
      image: 'https://miaoda-site-img.cdn.bcebos.com/7b3c524a-f291-4494-8420-f0653b8b06bb/images/71011a90-94a7-11f0-9448-4607c254ba9d_0.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              武汉历史文化
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              三千年文明史，见证楚文化的辉煌与传承
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                3000年历史
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                楚文化发源地
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                科教文化中心
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Periods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              历史沿革
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              从古代文明到现代都市，武汉的历史变迁见证了中华文明的发展历程
            </p>
          </div>

          <div className="space-y-12">
            {culturalPeriods.map((period, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        {period.icon}
                        <CardTitle className="text-2xl">{period.period}</CardTitle>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {period.timeRange}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {period.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">重要特征：</h4>
                        <div className="flex flex-wrap gap-2">
                          {period.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={period.image} 
                      alt={period.period}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Cultural Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              文化特色
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              武汉独特的地理位置和历史背景，孕育出丰富多彩的文化特色
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.features.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="justify-center">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Sites */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              文化地标
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              这些承载着武汉历史文化的重要场所，见证着城市的文明传承
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalSites.map((site, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900">
                    {site.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {site.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {site.significance}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            传承与发展
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            武汉在传承深厚历史文化的同时，不断创新发展，形成了古今交融、中西合璧的独特文化风貌。
            这座城市既保持着楚文化的深厚底蕴，又展现出现代都市的时尚活力。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3000+</div>
              <div className="text-lg">年历史文化</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">89</div>
              <div className="text-lg">所高等院校</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-lg">处文物保护单位</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;