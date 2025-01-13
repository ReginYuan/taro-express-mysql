import { View } from '@tarojs/components'
import './index.scss'
import { Component } from 'react'


interface TabItem {
  title: string;
  tab: string;
  index: number;
}

interface IndexState {
  tabIndex: number;
}

const DEFAULT_TAB_LIST: TabItem[] = [
  {title: '首页' , tab: 'flight', index: 0},
  {title: '火车票' , tab: 'train', index: 1},
  {title: '酒店' , tab: 'hotel', index: 2},
  {title: '汽车票' , tab: 'bus', index: 3},
];

interface IndexProps {}

export default class Index extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }
  switchTab = (index: number) => {
    this.setState({
      tabIndex: index,
    });
  };
  render () {
    const { tabIndex } = this.state
    return (
      <View className='index-container'>
        <View className='top'>
          <View className='index-tab'>
            {
              DEFAULT_TAB_LIST.map(item => (
                <View key={item.tab} className={`index_tab_item ${item.tab} ${tabIndex === item.index ? 'current' : ''}`} onClick={() => this.switchTab(item.index)}>
                  {item.title}
                </View>
              ))
            }
          </View>
        </View>
      </View>
    )
  }
}
