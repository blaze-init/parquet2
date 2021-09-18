(function() {var implementors = {};
implementors["parquet2"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/error/enum.ParquetError.html\" title=\"enum parquet2::error::ParquetError\">ParquetError</a>","synthetic":true,"types":["parquet2::error::ParquetError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/compression/struct.SnappyCodec.html\" title=\"struct parquet2::compression::SnappyCodec\">SnappyCodec</a>","synthetic":true,"types":["parquet2::compression::snappy_codec::SnappyCodec"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/compression/struct.GZipCodec.html\" title=\"struct parquet2::compression::GZipCodec\">GZipCodec</a>","synthetic":true,"types":["parquet2::compression::gzip_codec::GZipCodec"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/compression/struct.BrotliCodec.html\" title=\"struct parquet2::compression::BrotliCodec\">BrotliCodec</a>","synthetic":true,"types":["parquet2::compression::brotli_codec::BrotliCodec"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/compression/struct.Lz4Codec.html\" title=\"struct parquet2::compression::Lz4Codec\">Lz4Codec</a>","synthetic":true,"types":["parquet2::compression::lz4_codec::Lz4Codec"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/compression/struct.ZstdCodec.html\" title=\"struct parquet2::compression::ZstdCodec\">ZstdCodec</a>","synthetic":true,"types":["parquet2::compression::zstd_codec::ZstdCodec"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/compression/enum.Compression.html\" title=\"enum parquet2::compression::Compression\">Compression</a>","synthetic":true,"types":["parquet2::parquet_bridge::Compression"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/bitpacking/struct.Decoder.html\" title=\"struct parquet2::encoding::bitpacking::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::bitpacking::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/delta_bitpacked/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_bitpacked::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::delta_bitpacked::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/delta_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::delta_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/delta_length_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_length_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::delta_length_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.BitmapIter.html\" title=\"struct parquet2::encoding::hybrid_rle::BitmapIter\">BitmapIter</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::bitmap::BitmapIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.Decoder.html\" title=\"struct parquet2::encoding::hybrid_rle::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::decoder::Decoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"parquet2/encoding/hybrid_rle/enum.HybridEncoded.html\" title=\"enum parquet2::encoding::hybrid_rle::HybridEncoded\">HybridEncoded</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::HybridEncoded"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.HybridRleDecoder.html\" title=\"struct parquet2::encoding::hybrid_rle::HybridRleDecoder\">HybridRleDecoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::hybrid_rle::HybridRleDecoder"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"parquet2/encoding/plain_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::plain_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":true,"types":["parquet2::encoding::plain_byte_array::decoder::Decoder"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/encoding/enum.Encoding.html\" title=\"enum parquet2::encoding::Encoding\">Encoding</a>","synthetic":true,"types":["parquet2::parquet_bridge::Encoding"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.ColumnChunkMetaData.html\" title=\"struct parquet2::metadata::ColumnChunkMetaData\">ColumnChunkMetaData</a>","synthetic":true,"types":["parquet2::metadata::column_chunk_metadata::ColumnChunkMetaData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.ColumnDescriptor.html\" title=\"struct parquet2::metadata::ColumnDescriptor\">ColumnDescriptor</a>","synthetic":true,"types":["parquet2::metadata::column_descriptor::ColumnDescriptor"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/metadata/enum.ColumnOrder.html\" title=\"enum parquet2::metadata::ColumnOrder\">ColumnOrder</a>","synthetic":true,"types":["parquet2::metadata::column_order::ColumnOrder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.FileMetaData.html\" title=\"struct parquet2::metadata::FileMetaData\">FileMetaData</a>","synthetic":true,"types":["parquet2::metadata::file_metadata::FileMetaData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.RowGroupMetaData.html\" title=\"struct parquet2::metadata::RowGroupMetaData\">RowGroupMetaData</a>","synthetic":true,"types":["parquet2::metadata::row_metadata::RowGroupMetaData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/metadata/struct.SchemaDescriptor.html\" title=\"struct parquet2::metadata::SchemaDescriptor\">SchemaDescriptor</a>","synthetic":true,"types":["parquet2::metadata::schema_descriptor::SchemaDescriptor"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/metadata/enum.SortOrder.html\" title=\"enum parquet2::metadata::SortOrder\">SortOrder</a>","synthetic":true,"types":["parquet2::metadata::sort::SortOrder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.BinaryPageDict.html\" title=\"struct parquet2::page::BinaryPageDict\">BinaryPageDict</a>","synthetic":true,"types":["parquet2::page::page_dict::binary::BinaryPageDict"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.FixedLenByteArrayPageDict.html\" title=\"struct parquet2::page::FixedLenByteArrayPageDict\">FixedLenByteArrayPageDict</a>","synthetic":true,"types":["parquet2::page::page_dict::fixed_len_binary::FixedLenByteArrayPageDict"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"parquet2/page/struct.PrimitivePageDict.html\" title=\"struct parquet2::page::PrimitivePageDict\">PrimitivePageDict</a>&lt;T&gt;","synthetic":true,"types":["parquet2::page::page_dict::primitive::PrimitivePageDict"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.CompressedDictPage.html\" title=\"struct parquet2::page::CompressedDictPage\">CompressedDictPage</a>","synthetic":true,"types":["parquet2::page::page_dict::CompressedDictPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.PageType.html\" title=\"enum parquet2::page::PageType\">PageType</a>","synthetic":true,"types":["parquet2::parquet_bridge::PageType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.CompressedDataPage.html\" title=\"struct parquet2::page::CompressedDataPage\">CompressedDataPage</a>","synthetic":true,"types":["parquet2::page::CompressedDataPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.DataPageHeader.html\" title=\"enum parquet2::page::DataPageHeader\">DataPageHeader</a>","synthetic":true,"types":["parquet2::page::DataPageHeader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/page/struct.DataPage.html\" title=\"struct parquet2::page::DataPage\">DataPage</a>","synthetic":true,"types":["parquet2::page::DataPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.Page.html\" title=\"enum parquet2::page::Page\">Page</a>","synthetic":true,"types":["parquet2::page::Page"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/page/enum.CompressedPage.html\" title=\"enum parquet2::page::CompressedPage\">CompressedPage</a>","synthetic":true,"types":["parquet2::page::CompressedPage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/enum.Repetition.html\" title=\"enum parquet2::schema::Repetition\">Repetition</a>","synthetic":true,"types":["parquet2::parquet_bridge::Repetition"]},{"text":"impl&lt;'a, R&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.Decompressor.html\" title=\"struct parquet2::read::Decompressor\">Decompressor</a>&lt;'a, R&gt;","synthetic":true,"types":["parquet2::read::compression::Decompressor"]},{"text":"impl&lt;'a, R&gt; Freeze for <a class=\"struct\" href=\"parquet2/read/struct.PageIterator.html\" title=\"struct parquet2::read::PageIterator\">PageIterator</a>&lt;'a, R&gt;","synthetic":true,"types":["parquet2::read::page_iterator::PageIterator"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.PhysicalType.html\" title=\"enum parquet2::schema::types::PhysicalType\">PhysicalType</a>","synthetic":true,"types":["parquet2::schema::types::physical_type::PhysicalType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/schema/types/struct.BasicTypeInfo.html\" title=\"struct parquet2::schema::types::BasicTypeInfo\">BasicTypeInfo</a>","synthetic":true,"types":["parquet2::schema::types::basic_type::BasicTypeInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.PrimitiveConvertedType.html\" title=\"enum parquet2::schema::types::PrimitiveConvertedType\">PrimitiveConvertedType</a>","synthetic":true,"types":["parquet2::schema::types::converted_type::PrimitiveConvertedType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.GroupConvertedType.html\" title=\"enum parquet2::schema::types::GroupConvertedType\">GroupConvertedType</a>","synthetic":true,"types":["parquet2::schema::types::converted_type::GroupConvertedType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/schema/types/enum.ParquetType.html\" title=\"enum parquet2::schema::types::ParquetType\">ParquetType</a>","synthetic":true,"types":["parquet2::schema::types::parquet_type::ParquetType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.BinaryStatistics.html\" title=\"struct parquet2::statistics::BinaryStatistics\">BinaryStatistics</a>","synthetic":true,"types":["parquet2::statistics::binary::BinaryStatistics"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.BooleanStatistics.html\" title=\"struct parquet2::statistics::BooleanStatistics\">BooleanStatistics</a>","synthetic":true,"types":["parquet2::statistics::boolean::BooleanStatistics"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.FixedLenStatistics.html\" title=\"struct parquet2::statistics::FixedLenStatistics\">FixedLenStatistics</a>","synthetic":true,"types":["parquet2::statistics::fixed_len_binary::FixedLenStatistics"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"parquet2/statistics/struct.PrimitiveStatistics.html\" title=\"struct parquet2::statistics::PrimitiveStatistics\">PrimitiveStatistics</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["parquet2::statistics::primitive::PrimitiveStatistics"]},{"text":"impl&lt;'a, V&gt; Freeze for <a class=\"struct\" href=\"parquet2/write/struct.DynIter.html\" title=\"struct parquet2::write::DynIter\">DynIter</a>&lt;'a, V&gt;","synthetic":true,"types":["parquet2::write::dyn_iter::DynIter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"parquet2/write/struct.WriteOptions.html\" title=\"struct parquet2::write::WriteOptions\">WriteOptions</a>","synthetic":true,"types":["parquet2::write::WriteOptions"]},{"text":"impl Freeze for <a class=\"enum\" href=\"parquet2/write/enum.Version.html\" title=\"enum parquet2::write::Version\">Version</a>","synthetic":true,"types":["parquet2::write::Version"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()