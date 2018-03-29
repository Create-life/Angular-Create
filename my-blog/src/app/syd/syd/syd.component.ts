import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syd',
  templateUrl: './syd.component.html',
  styleUrls: ['./syd.component.css']
})
export class SydComponent implements OnInit {
  selectList: Array<number>; // 随机结果列表
  totalPeople: number; // 总人数
  wantSelectNum: number; // 抽查数
  adminList = ['幻影', '蚂蚁', '基恒', '老铁', '卡兹', '乔丹', '向北', '辰', '阿诚']; // 抽图人员名单
  startDay: any; // 起始日期
  targetDay: any; // 当日
  todayPerson: string; // 今日抽图人员
  nextPerson: string; // 明日抽图人员
  todayFormat: string; // 今日日期格式
  tomorrowFormat: string; // 明日日期格式
  clearTime: any; // 定时器
  flag: boolean;
  constructor () {
  }
  ngOnInit(): void {
    this.startDay = new Date('Mar 17 2018 00:00:00 GMT+0800').getTime(); // 卡兹
    this.targetDay = new Date().getTime(); // now

    this.todayPerson = this.adminList[this.datedifference(this.startDay, this.targetDay) % this.adminList.length];
    this.nextPerson = this.adminList[(this.datedifference(this.startDay, this.targetDay) + 1) % this.adminList.length];

    this.todayFormat = this.getNowFormatDate('today');
    this.tomorrowFormat = this.getNowFormatDate('tomorrow');
  }

  getMember () {
    this.flag = true;
    if (!this.totalPeople) {
      alert ('请输入总人数！');
      this.flag = false;
      return ;
    } else if (this.totalPeople > 100) {
      alert('总人数不得大于100！');
      this.flag = false;
      return ;
    }
    if (!this.wantSelectNum) {
      alert ('请输入抽查人数！');
      this.flag = false;
      return ;
    } else if (this.wantSelectNum >= this.totalPeople) {
      alert ('抽查人数不得大于总人数！');
      this.flag = false;
      return ;
    }
    clearInterval(this.clearTime);
    this.selectList = [];
    const arr = [];
    for (let i = 0; i < this.wantSelectNum; i++) {
      const temp = this.getRandom(this.totalPeople);
      arr.some(it => it === temp) ? i-- : arr.push(temp);
    }

    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      ((j) => {
        this.clearTime = setTimeout(() => {
          this.selectList.push(arr[j]);
          if (j === arr.length - 1) {
            console.log(j);
            this.flag = false;
          }
        }, 100 * j);
      })(i);
    }
  }

  getRandom(sum) {
    return Math.ceil(Math.random() * sum);
  }

  datedifference(sstartDate, sthatDate) {
    const dateSpan = sthatDate - sstartDate;
    return Math.floor(dateSpan / (24 * 3600 * 1000));
  }
  getNowFormatDate(message) {
    const date = new Date();
    if (message === 'tomorrow') {
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    }
    const seperator1 = '-';
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let strDate: any = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    const currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  }

}
