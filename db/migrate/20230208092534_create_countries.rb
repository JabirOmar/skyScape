class CreateCountries < ActiveRecord::Migration[7.0]
  def change
    create_table :countries do |t|
      t.string :countryName
      t.string :cityOne
      t.string :cityTwo
      t.string :cityThree
      t.string :nationality

      t.timestamps
    end
  end
end
