
<script setup>
import Joi from 'joi'

defineProps({
  headers: {
    type: Array,
    default: () => ([]),
    validator: () => {
      const itemSchema = Joi.object({
        title: Joi.string()
          .required(),
        key: Joi.string()
          .required()
          .pattern(/^[a-z_]+$/)
      })

      const schema = Joi.array()
        .items(itemSchema)

      return schema.validate().error === undefined
    }
  },

  items: {
    type: Array,
    default: () => ([])
  },

  isLoading: {
    type: [Boolean, Number],
    default: true
  }
})

</script>

<template>
  <base-table>
    <base-thead>
      <base-th
        v-for="(header, headerKey) in headers"
        :key="headerKey"
      >
        <slot
          :name="`header.${header.key}`"
          :item="header"
          :index="headerKey"
        >
          {{ header.title }}
        </slot>
      </base-th>
    </base-thead>

    <base-tbody>
      <base-tr v-if="isLoading">
        <base-td
          :colspan="headers.length"
          class="text-center"
        >
          Loading
        </base-td>
      </base-tr>

      <template v-else>
        <base-tr
          v-for="(item, itemKey) in items"
          :key="itemKey"
        >
          <base-td
            v-for="(header, headerKey) in headers"
            :key="headerKey"
          >
            <slot
              :name="header.key"
              :item="item"
              :index="itemKey"
            >
              {{ item[header.key] }}
            </slot>
          </base-td>
        </base-tr>
      </template>
    </base-tbody>
  </base-table>
</template>

<style lang="scss" scoped>

</style>