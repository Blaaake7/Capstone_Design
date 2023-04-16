import React from 'react'
import BasicMenu from '../components/BasicMenu'
import MyPagelist from '../components/MyPageList'
import { Table } from '@mui/material'
import ColumnGroupingTable from '../components/ColumnGroupingTable'

export default function () {
  return (
    <div className='my_page'>
        <BasicMenu />
        <div className="my_page_list">
        <MyPagelist />
        <ColumnGroupingTable />
        </div>
    </div>
  )
}
