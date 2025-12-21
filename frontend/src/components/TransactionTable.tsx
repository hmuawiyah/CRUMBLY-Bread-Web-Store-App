import React, { useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { LuArrowDownNarrowWide, LuArrowUpNarrowWide } from 'react-icons/lu'

type DataItem = {
    name: string
    date: string
}

interface TableProps {
    data: DataItem[]
}

export const TransactionTable: React.FC<TableProps> = ({ data }) => {
    const [sortedData, setSortedData] = useState<DataItem[]>(data)

    const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' }>({
        key: '',
        direction: 'asc',
    })

    const handleSort = (columnKey: keyof DataItem) => {
        let direction: 'asc' | 'desc' = 'asc'

        if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
            direction = 'desc'
        }

        const sorted = [...sortedData].sort((a, b) => {
            if (a[columnKey] < b[columnKey]) return direction === 'asc' ? -1 : 1
            if (a[columnKey] > b[columnKey]) return direction === 'asc' ? 1 : -1
            return 0
        })

        setSortedData(sorted)
        setSortConfig({ key: columnKey, direction })
    }

    return (
        <Table className="table-auto w-full border-collapse border border-gray-300">
            <TableHeader>
                <TableRow className='hover:bg-transparent'>
                    <TableHead onClick={() => handleSort('name')} className="cursor-pointer px-4 py-2 border border-gray-200 hover:bg-gray-100" >
                        <span className='flex justify-between items-center gap-2'>
                            Name {sortConfig.key == 'name'
                                ? sortConfig.direction === 'asc'
                                    ? <LuArrowUpNarrowWide />
                                    : <LuArrowDownNarrowWide />
                                : ''
                            }
                        </span>
                    </TableHead>

                    <TableHead onClick={() => handleSort('date')} className="cursor-pointer px-4 py-2 border border-gray-200 hover:bg-gray-100" >
                        <span className='flex justify-between items-center gap-2'>
                            Date {
                                sortConfig.key == 'date'
                                    ? sortConfig.direction === 'asc'
                                        ? <LuArrowUpNarrowWide />
                                        : <LuArrowDownNarrowWide />
                                    : ''
                            }
                        </span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedData.map((item, index) => (
                    <TableRow key={index} className='odd:bg-muted/50 odd:hover:bg-muted/50 hover:bg-transparent'>
                        <TableCell className="px-4 py-2 border border-gray-200">{item.name}</TableCell>
                        <TableCell className="px-4 py-2 border border-gray-200">{item.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

