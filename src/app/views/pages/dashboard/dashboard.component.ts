import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  /**
   * Apex chart
   */
  public totalBooksChartOptions: any = {};
  public totalBooksSoldChartOptions: any = {};
  public totalRoyaltyChartOptions: any = {};
  public totalRoyaltyPaidChartOptions: any = {};
  public pendingRoyaltyChartOptions: any = {};

  // colors and font variables for apex chart 
  obj = {
    primary: "#6571ff",
    success: "#05a34a",
    info: "#66d1d1",
    warning: "#fbbc06",
    danger: "#ff3366",
    fontFamily: "'Roboto', Helvetica, sans-serif"
  }

  constructor() { }

  ngOnInit(): void {
    this.totalBooksChartOptions = gettotalBooksChartOptions(this.obj);
    this.totalBooksSoldChartOptions = gettotalBooksSoldChartOptions(this.obj);
    this.totalRoyaltyChartOptions = gettotalRoyaltyChartOptions(this.obj);
    this.totalRoyaltyPaidChartOptions = gettotalRoyaltyPaidChartOptions(this.obj);
    this.pendingRoyaltyChartOptions = getpendingRoyaltyChartOptions(this.obj);
  }
}

function gettotalBooksChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [
        0,
        0
      ]
    }],
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.primary],
    stroke: {
      width: 5,
      curve: "smooth"
    },
    tooltip: {
      enabled: false
    }
  }
}

function gettotalBooksSoldChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
    }],
    chart: {
      type: "bar",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.success],
    tooltip: {
      enabled: false
    }
  }
}

function gettotalRoyaltyChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }],
    chart: {
      type: "bar",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.warning],
    tooltip: {
      enabled: false
    }
  }
}

function gettotalRoyaltyPaidChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
    }],
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.danger],
    stroke: {
      width: 2,
      curve: "smooth"
    },
    tooltip: {
      enabled: false
    }
  }
}

function getpendingRoyaltyChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [
        4,
        1]
    }],
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.info],
    stroke: {
      width: 2,
      curve: "smooth"
    },
    tooltip: {
      enabled: false
    }
  }
}