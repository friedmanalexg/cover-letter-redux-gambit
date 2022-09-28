class ProseBlocksSerializer < ActiveModel::Serializer
  attributes :id, :block_title, :block_type, :prose_content, :user_id
end
