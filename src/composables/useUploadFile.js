import supabase from '@/config/supabase'

import {
  random as randomString
} from '@/utils/string'

import {
  last as lastArray
} from '@/utils/array'

import _toLower from 'lodash/toLower'

export default async (file, {
  bucket = 'images'
} = {}) => {
  const extension = lastArray(_toLower(file.name).split('.'))
  const name = `${randomString()}.${extension}`

  const { error: uploadError } = await supabase
    .storage
    .from(bucket)
    .upload(name, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (uploadError) {
    throw uploadError
  }

  return name
}