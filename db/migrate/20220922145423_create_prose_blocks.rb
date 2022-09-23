class CreateProseBlocks < ActiveRecord::Migration[7.0]
  def change
    create_table :prose_blocks do |t|
      t.string :block_name
      t.string :block_type
      t.text :prose_content
      t.belongs_to :letter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
