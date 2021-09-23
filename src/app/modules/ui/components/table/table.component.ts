import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {TableColumn} from './table.types';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, AfterViewInit {
  public tableDataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() title!: string;
  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns!: Array<TableColumn>;
  @Input() rowActionIcon!: string;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort, {static: true}) matSort!: MatSort;

  constructor() {
  }

  @Input() set tableData(data: any) {
    this.setTableDataSource(data);
  }

  private _displayedColumns!: string[];

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

  set displayedColumns(value: string[]) {
    this._displayedColumns = value;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.tableColumns?.find(column => column?.name === sortParameters?.active)?.dataKey as string;
    this.sort.emit(sortParameters);
  }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((col => col.name));
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  private setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource(data);
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.matSort;
  }
}
