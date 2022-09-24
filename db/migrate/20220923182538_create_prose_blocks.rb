class CreateProseBlocks < ActiveRecord::Migration[7.0]
  def change
    create_table :prose_blocks do |t|
      t.string :block_title
      t.string :type
      t.text :prose_content
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
